import { db } from "../config/firebase";

export const getCollection = async (collectionName: string) => {
  const snapshot = await db.collection(collectionName).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const addDocument = async (collectionName: string, data: any) => {
  const docRef = await db.collection(collectionName).add(data);
  return { id: docRef.id, ...data };
};
