import { useEffect, useState } from "react";
import axios from "axios";
import './ManageUsers.css';



interface User {
  id: string;
  firstname: string;
  lastname: string;
  city: string;
}

const ManageUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/telegram/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/telegram/users/${id}`);
      alert("User deleted"); // Replace this with your toast-like mechanism if needed
      fetchUsers(); // Refetch users after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "black" }}>Manage Users</h1>
      <div style={{ margin: "20px", maxWidth: "1200px" }}>
        <table style={{ width: "100%", backgroundColor: "#2D3748", color: "white" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.city}</td>
                <td>
                  <button style={{ color: "red" }} onClick={() => handleDelete(user.id)}>
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUsers;
