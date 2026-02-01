import { db } from "../config/firebase";
import type { Department } from "../types/department";

const collection = db.collection("departments");

export const departmentRepository = {
  async getAll() {
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Department[];
  },

  async getById(id: string) {
    const doc = await collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() } as Department;
  },

  async create(data: Omit<Department, "id">) {
    const ref = await collection.add(data);
    return { id: ref.id, ...data };
  },

  async update(id: string, data: Partial<Department>) {
    await collection.doc(id).update(data);
    return this.getById(id);
  },

  async remove(id: string) {
    await collection.doc(id).delete();
  }
};
