import { db } from "../config/firebase";
import type { Employee } from "../types/Employee";

const collection = db.collection("employees");

export const employeeRepository = {
  async getAll() {
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Employee[];
  },

  async create(data: Omit<Employee, "id">) {
    const ref = await collection.add(data);
    return { id: ref.id, ...data };
  }
};
