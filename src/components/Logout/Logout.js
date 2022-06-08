import { Link } from "react-router-dom";
import logoutIcon from "../../assets/logout-icon.svg";
export default function Logout(props) {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    props.setUser("");
    props.setAuthed(false);
  };
  return (
    <Link className="logout_btn" to="/" onClick={logout}>
      <img className="logout_icon" src={logoutIcon} alt="logout" />
    </Link>
  );
}
