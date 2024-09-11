import './App.css';
import TodoContainer from './components/TodoContainer';
import React, { useState, useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyLa0yOs-mcdnKCpfE7sQrzttK_4d5w4Q",
  authDomain: "todos-58484.firebaseapp.com",
  projectId: "todos-58484",
  storageBucket: "todos-58484.appspot.com",
  messagingSenderId: "28611619036",
  appId: "1:28611619036:web:4d37720878197a9442ac19",
  measurementId: "G-PWBYZCTBH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const querySnapshot = await getDocs(collection(db, 'todoItem'));
    const todos = [];
    querySnapshot.docs.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id });
    })
    setTodoList(todos);
    setLoading(false);
  }


  return (
    <>
      {!loading ? (
        <TodoContainer todoList={todoList} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default App;
