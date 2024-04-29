import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toggleLoginWindow } from "../redux/loginWindowSlice";

export default function Login() {
  const usernameEmail = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const [usernameEmailError, setUsernameEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validate() {
    let hasNoError = true;
    let autoFocused = false;
    if (!usernameEmail.current.value) {
      setUsernameEmailError("Please, enter a username or email");
      hasNoError = false;
      usernameEmail.current.focus();
      autoFocused = true;
    } else if (usernameEmail.current.value.length <= 3) {
      setUsernameEmailError("User or email has to be longer than 3 characters");
      hasNoError = false;
      autoFocused ? "" : usernameEmail.current.focus();
      autoFocused = true;
    } else {
      setUsernameEmailError("");
    }

    if (!passwordRef.current.value) {
      setPasswordError("You must enter your password");
      hasNoError = false;
      autoFocused ? "" : passwordRef.current.focus();
      autoFocused = true;
    } else if (passwordRef.current.value.length < 8) {
      setPasswordError("The password must at least be 8 characters");
      hasNoError = false;
      autoFocused ? "" : passwordRef.current.focus();
      autoFocused = true;
    } else {
      setPasswordError("");
    }

    return hasNoError;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) ?? [];
    if (users) {
      const index = users.findIndex(
        (user) =>
          user.username === usernameEmail.current.value ||
          user.email === usernameEmail.current.value
      );

      if (index !== -1 && users[index].password === passwordRef.current.value) {
        navigate("/");
      } else {
        console.log("incorrect password");
        setPasswordError("You have entered an incorrect email or password");
      }
    }
  }
  return (
    <div className="flex flex-col items-center mt-20">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <input
              autoFocus
              placeholder="Username or Email"
              ref={usernameEmail}
              onChange={(e) =>
                e.target.value.length > 0 && usernameEmailError
                  ? setUsernameEmailError("")
                  : ""
              }
              className="border w-full border-gray-300 p-2 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200"
            />
            <span className="text-red-700 block">{usernameEmailError}</span>
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              ref={passwordRef}
              onChange={(e) =>
                e.target.value.length > 0 && passwordError
                  ? setPasswordError("")
                  : ""
              }
              className="border w-full border-gray-300 p-2 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200"
            />
            <span className="text-red-700 block">{passwordError}</span>
          </div>
          <Link className="text-right text-primary hover:underline" to="/">
            Forgot Password?
          </Link>
        </div>
        <button
          className="bg-primary text-white py-2 rounded-md w-full mt-4"
          type="submit"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="text-primary mt-2"
          style={{
            fontFamily: "Cera Pro",
            textTransform: "initial",
            width: "100%",
          }}
        >
          Don't have an account?
        </button>
      </form>
    </div>
  );
}
