import React from "react";
import useStore from "../store/store";
import { Button } from "../Styles/GlobalStyles";

const Navbar = () => {
  const { user, logout } = useStore();

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#007bff", color: "white" }}>
      <h3>NotesApp</h3>
      {user ? (
        <div>
          <span>Welcome, {user.user_name}!</span>
          <Button onClick={logout} style={{ marginLeft: "10px" }}>Logout</Button>
        </div>
      ) : (
        <a href="/login" style={{ color: "white" }}>Login</a>
      )}
    </nav>
  );
};

export default Navbar;