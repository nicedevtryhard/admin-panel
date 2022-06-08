import "./Register.scss";
import Input from "../../util/Input/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../../util/requests/usersRequests";
function Register() {
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);

  const handleClick = async () => {
    const response = await register(userName, comment, login, password);
    if (!(response === undefined)) {
      setRegistered(!registered);
    }
  };

  return (
    <main>
      <h2>Welcome to our App</h2>
      {(!registered && (
        <div className="register__form">
          <div className="register__title">
            <span>Register your account</span>
          </div>
          <Input
            type="text"
            placeholder="User name"
            value={userName}
            setValue={setUserName}
          />
          <Input
            type="text"
            placeholder="Describe yourself"
            value={comment}
            setValue={setComment}
          />
          <Input
            type="text"
            placeholder="Login"
            value={login}
            setValue={setLogin}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          <button className="register__btn" type="submit" onClick={handleClick}>
            Create account
          </button>
        </div>
      )) || <h2>Your account has been registered!</h2>}
      <Link to="/" className="back_btn">
        Back
      </Link>
    </main>
  );
}
export default Register;
