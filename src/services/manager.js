import db from "../firebase-config";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

const todosCollection = collection(db, "todos");

class TodosData {
  addTodo = (newTodo) => {
    return addDoc(todosCollection, newTodo);
  };
  getAllTodos = () => {
    return getDocs(todosCollection);
  };
  deleteTodo = (id) => {
    const todo = doc(db, "todos", id);
    return deleteDoc(todo);
  };
  updateTodo = (id, todo) => {
    const todoDoc = doc(db, "todos", id);
    return updateDoc(todoDoc, todo);
  };
  getOneTodo = (id) => {
    const todo = doc(db, "todos", id);
    return getDoc(todo);
  };
}
export default new TodosData();
