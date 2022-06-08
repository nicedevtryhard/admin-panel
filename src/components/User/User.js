import { useState } from "react";
import Dialog from "../../util/Dialog/Dialog";
import { deleteUser, editUser } from "../../util/requests/usersRequests";
import "./User.scss";
export default function User({ user, setDelete }) {
  const d = new Date(user.created_at);
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const day = d.getDate();
  const monthName = months[d.getMonth()];
  const year = d.getFullYear();
  const date = `${day} ${monthName} ${year}`;
  const [dialogActive, setDialogActive] = useState(false);
  const [userEdit, setUserEdit] = useState({
    name: "",
    comment: "",
    login: "",
    password: "",
  });
  const handleEdit = () => {
    setUserEdit({
      name: "",
      comment: "",
      login: "",
      password: "",
    });
    setDialogActive(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(
      user.id,
      userEdit.name,
      userEdit.comment,
      userEdit.login,
      userEdit.password
    ).then((response) => {
      if (!response) {
        alert("Something went wrong! Watch Console.");
      }
      setDelete(true);
    });
    setDialogActive(false);
  };
  const handleDelete = () => {
    if (deleteUser(user.id)) {
      setDelete(true);
    }
  };
  return (
    <tr key={user.id}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.comment || "none"} </td>
      <td>{date}</td>
      <td>
        <button className="edit__btn" onClick={handleEdit}>
          Edit
        </button>
        <Dialog active={dialogActive} setActive={setDialogActive}>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={userEdit.name}
                onChange={(e) =>
                  setUserEdit((prev) => {
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
                value={userEdit.comment}
                onChange={(e) =>
                  setUserEdit((prev) => {
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
                value={userEdit.login}
                onChange={(e) =>
                  setUserEdit((prev) => {
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
                value={userEdit.password}
                onChange={(e) =>
                  setUserEdit((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
                required
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Dialog>
      </td>
      <td>
        <button className="delete_btn" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}
