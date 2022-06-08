import { useState } from "react";
import Station from "../Station/Station";
import Dialog from "../../util/Dialog/Dialog";
import "./Stations.scss";
import { register } from "../../util/requests/sationsRequests";
export default function Stations(props) {
  const [dialogActive, setDialogActive] = useState(false);
  const [stationCreateForm, setstationCreateForm] = useState({
    name: "",
    comment: "",
  });
  const handleCreate = () => {
    setstationCreateForm({
      name: "",
      comment: "",
    });
    setDialogActive(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register(stationCreateForm.name, stationCreateForm.comment).then(() =>
      props.setEdit(true)
    );
    setDialogActive(false);
  };
  return (
    <section className="stations">
      <table className="stations_table">
        <caption className="stations_title">Stations Information</caption>
        <thead>
          <tr>
            <td className="stations_headers-item">№</td>
            <td className="stations_headers-item">Name</td>
            <td className="stations_headers-item">Comment</td>
            <td className="stations_headers-item">Creation date</td>
            <td className="stations_headers-item">API Key</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {props.stations &&
            props.stations.map((el) => {
              return (
                <Station station={el} key={el.id} setDelete={props.setEdit}>
                  {el.name}
                </Station>
              );
            })}
        </tbody>
      </table>
      <button className="create_btn" onClick={handleCreate}>
        Create Station
      </button>
      <Dialog active={dialogActive} setActive={setDialogActive}>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={stationCreateForm.name}
              onChange={(e) =>
                setstationCreateForm((prev) => {
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
              value={stationCreateForm.comment}
              onChange={(e) =>
                setstationCreateForm((prev) => {
                  return { ...prev, comment: e.target.value };
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
