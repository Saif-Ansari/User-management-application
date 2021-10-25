import "./App.css";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsersData } from "./actions/action";
import UsersTable from "./components/UsersTable";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersData());
  }, []);
  return (
    <div className="App">
      <h1>User Management Application</h1>
      <UsersTable />
    </div>
  );
}

export default App;
