import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";

import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ListMedicines from "./pages/ListMedicines.jsx";
import AddMedicine from "./pages/AddMedicine.jsx";
import UserProvider from "./context/userContext.jsx";
import Logout from "./pages/Logout.jsx";
import EditMedicine from "./pages/EditMedicine.jsx";

const router = createBrowserRouter([
  { path: "/", element: <ListMedicines /> },
  { path: "/auth/register", element: <Register /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/logout", element: <Logout /> },
  { path: "/add-medicine", element: <AddMedicine /> },
  { path: "/edit-medicine/:medicineId", element: <EditMedicine /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <UserProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>
);
