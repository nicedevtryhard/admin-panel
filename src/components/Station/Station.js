import { useState } from "react";
import Dialog from "../../util/Dialog/Dialog";
import {
  deleteStation,
  editStation,
} from "../../util/requests/sationsRequests";
import "./Station.scss";

export default function Station({ station, setDelete }) {
  console.log(station);
  const d = new Date(station.created_at);
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
  const [stationEdit, setStationEdit] = useState({
    name: "",
    comment: "",
  });
  const handleEdit = () => {
    setStationEdit({
      name: "",
      comment: "",
    });
    setDialogActive(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editStation(station.id, stationEdit.name, stationEdit.comment);
    setDelete(true);
    setDialogActive(false);
  };
  const handleDelete = () => {
    if (deleteStation(station.id)) {
      setDelete(true);
    }
  };
  return (
    <tr key={station.id}>
      <td>{station.id}</td>
      <td>{station.name}</td>
      <td>{station.comment || "none"} </td>
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
                value={stationEdit.name}
                onChange={(e) =>
                  setStationEdit((prev) => {
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
                value={stationEdit.comment}
                onChange={(e) =>
                  setStationEdit((prev) => {
                    return { ...prev, comment: e.target.value };
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
