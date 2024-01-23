import * as admin from 'firebase-admin';
import * as path from 'path';
import { Injectable } from '@nestjs/common/decorators';

@Injectable()
export class FirestoreAdminService {
  private readonly firestore: FirebaseFirestore.Firestore;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const serviceAccount = require(path.resolve(
      __dirname,
      '../../telebothb-firebase-adminsdk-2jz5a-6c3324445b.json',
    ));

    // const serviceAccount = require(path.resolve(
    //   __dirname,
    //   '../../telebothb-firebase-adminsdk-2jz5a-6c3324445b.json',
    // ));
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    }

    this.firestore = admin.firestore();
  }

  getFirestore() {
    return this.firestore;
  }
}
