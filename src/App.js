import "./App.css";
import { RouterProvider, useLocation } from "react-router-dom";
import { router } from "./Routes/routes";
import { useState } from "react";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
