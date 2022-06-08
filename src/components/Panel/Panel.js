import "./Panel.scss";
import { useEffect, useState } from "react";
import Stations from "../Stations/Stations";
import Logout from "../Logout/Logout";
import { loadUsers } from "../../util/requests/usersRequests";
import { loadStations } from "../../util/requests/sationsRequests";
import Users from "../Users/Users";
export default function Panel(props) {
  const [users, setUsers] = useState([]);
  const [stations, setStations] = useState([]);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    setEdit(false);
    if (localStorage.getItem("token")) {
      loadUsers().then((results) => {
        setUsers(results);
      });
      loadStations().then((results) => {
        setStations(results);
      });
      localStorage.setItem("userName", props.user);
    }
    if (edit) {
      loadUsers().then((results) => {
        setUsers(results);
      });
      loadStations().then((results) => {
        setStations(results);
      });
    }
  }, [edit]);
  return (
    <main className="panel">
      <header className="panel_header">
        <h1>Welcome!</h1>
        <div className="panel_user-block">
          <h2 className="panel_user-name">{props.user.toUpperCase()}</h2>
          <Logout setUser={props.setUser} setAuthed={props.setAuthed} />
        </div>
      </header>
      <Users users={users} setEdit={setEdit} />
      <Stations stations={stations} setEdit={setEdit} />
    </main>
  );
}
