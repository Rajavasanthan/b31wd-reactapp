import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Users from "./Users";
import Usercreate from "./Usercreate";
import Useredit from "./Useredit";
import Register from "./Register";
import Login from "./Login";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/users" element={<Users />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Usercreate />} />
      <Route path="/edit/:id" element={<Useredit />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
