import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Panel from "./components/Panel/Panel";
import { useEffect, useState } from "react";
function App() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setUser(localStorage.getItem("userName"));
      setAuthed(true);
      navigate("/panel");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} setAuthed={setAuthed} />}
        />

        <Route path="/register" element={<Register />} />
        {authed && (
          <Route
            path="/panel"
            element={
              <Panel user={user} setAuthed={setAuthed} setUser={setUser} />
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
