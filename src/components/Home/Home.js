import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <main>
        <h1 className="app-title">Welcome</h1>
        <nav>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </nav>
      </main>
    </>
  );
}
export default Home;
