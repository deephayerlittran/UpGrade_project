import { db } from "../config/firebase";

const collection = db.collection("branches");

export const branchRepository = {
  async getAll() {
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  async create(data: any) {
    const ref = await collection.add(data);
    return { id: ref.id, ...data };
  }
};
