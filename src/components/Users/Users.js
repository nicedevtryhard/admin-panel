import User from "../User/User";
import "./Users.scss";
import { register } from "../../util/requests/usersRequests";
import Dialog from "../../util/Dialog/Dialog";
import { useState } from "react";
export default function Users(props) {
  const [dialogActive, setDialogActive] = useState(false);
  const [userCreateForm, setUserCreateForm] = useState({
    name: "",
    comment: "",
    login: "",
    password: "",
  });
  const handleCreate = () => {
    setUserCreateForm({
      name: "",
      comment: "",
      login: "",
      password: "",
    });
    setDialogActive(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register(
      userCreateForm.name,
      userCreateForm.comment,
      userCreateForm.login,
      userCreateForm.password
    ).then(() => props.setEdit(true));
    setDialogActive(false);
  };
  return (
    <section className="users">
      <table className="users_table">
        <caption className="users_title">Users Information</caption>
        <thead>
          <tr>
            <td className="users_headers-item">№</td>
            <td className="users_headers-item">Name</td>
            <td className="users_headers-item">Comment</td>
            <td className="users_headers-item">Creation date</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {props.users &&
            props.users.map((el) => {
              return <User user={el} key={el.id} setDelete={props.setEdit} />;
            })}
        </tbody>
      </table>
      <button className="create_btn" onClick={handleCreate}>
        Create User
      </button>
      <Dialog active={dialogActive} setActive={setDialogActive}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={userCreateForm.name}
              onChange={(e) =>
                setUserCreateForm((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              required
            />
          </label>
          <label>
            Comment:
            <input
              type="text"
              value={userCreateForm.comment}
              onChange={(e) =>
                setUserCreateForm((prev) => {
                  return { ...prev, comment: e.target.value };
                })
              }
              required
            />
          </label>
          <label>
            Login:
            <input
              type="text"
              value={userCreateForm.login}
              onChange={(e) =>
                setUserCreateForm((prev) => {
                  return { ...prev, login: e.target.value };
                })
              }
              required
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              value={userCreateForm.password}
              onChange={(e) =>
                setUserCreateForm((prev) => {
                  return { ...prev, password: e.target.value };
                })
              }
              required
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </Dialog>
    </section>
  );
}
