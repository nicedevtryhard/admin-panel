import "./Login.scss";
import { useState } from "react";
import { signIn } from "../../util/requests/usersRequests";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../util/Input/Input";
function Login(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState(false);
  let navigate = useNavigate();
  const handleClick = async () => {
    const response = await signIn(login, password);
    if (!(response === undefined)) {
      localStorage.setItem("token", response.user_jwt);
      props.setUser(login);
      props.setAuthed(true);
      navigate("/panel");
    } else {
      setError(!Error);
    }
  };
  const clear = () => {
    setLogin("");
    setPassword("");
    setError(!Error);
  };

  return (
    <main>
      <h2>Welcome to our App</h2>
      {(!Error && (
        <div className="login__form">
          <div className="register__title">
            <span>Have a password? Continue with your user name</span>
          </div>
          <Input
            type="text"
            placeholder="User name"
            value={login}
            setValue={setLogin}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            setValue={setPassword}
          />
          <button className="login__btn" type="submit" onClick={handleClick}>
            Login
          </button>
        </div>
      )) || (
        <div className="error-msg">
          <h2>Wrong user name or password</h2>
          <button className="retry" onClick={clear}>
            Try again?
          </button>
        </div>
      )}
      <Link to="/" className="back_btn">
        Back
      </Link>
    </main>
  );
}
export default Login;
