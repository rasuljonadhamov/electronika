import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";

export default function Register() {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  function validate() {
    let hasNoError = true;
    let autoFocused = false;

    if (!usernameRef.current.value) {
      setUsernameError("Please enter a username");
      hasNoError = false;
      usernameRef.current.focus();
      autoFocused = true;
    } else {
      setUsernameError("");
    }

    if (!emailRef.current.value) {
      setEmailError("Please enter an email address");
      hasNoError = false;
      autoFocused ? "" : emailRef.current.focus();
      autoFocused = true;
    } else {
      setEmailError("");
    }

    if (!passwordRef.current.value) {
      setPasswordError("Please enter a password");
      hasNoError = false;
      autoFocused ? "" : passwordRef.current.focus();
      autoFocused = true;
    } else if (passwordRef.current.value.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      hasNoError = false;
      autoFocused ? "" : passwordRef.current.focus();
      autoFocused = true;
    } else {
      setPasswordError("");
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setConfirmPasswordError("Passwords do not match");
      hasNoError = false;
      autoFocused ? "" : confirmPasswordRef.current.focus();
      autoFocused = true;
    } else {
      setConfirmPasswordError("");
    }

    return hasNoError;
  }

  const handleRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("New user registered:", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert("Registration failed:", errorMessage);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    handleRegistration(emailRef.current.value, passwordRef.current.value);
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <div>
            <input
              autoFocus
              placeholder="Username"
              ref={usernameRef}
              className="border w-full border-gray-300 p-2 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200"
            />
            <span className="text-red-700">{usernameError}</span>
          </div>
          <div>
            <input
              placeholder="Email"
              type="email"
              ref={emailRef}
              className="border w-full border-gray-300 p-2 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200"
            />
            <span className="text-red-700">{emailError}</span>
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              ref={passwordRef}
              className="border w-full border-gray-300 p-2 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200"
            />
            <span className="text-red-700">{passwordError}</span>
          </div>
          <div>
            <input
              placeholder="Confirm Password"
              type="password"
              ref={confirmPasswordRef}
              className="border w-full border-gray-300 p-2 rounded-md focus:border-blue-500 focus:outline-none focus:ring-blue-200 focus:ring-2 duration-200"
            />
            <span className="text-red-700">{confirmPasswordError}</span>
          </div>
        </div>
        <button
          className="bg-primary text-white py-2 rounded-md w-full mt-4"
          type="submit"
        >
          Register
        </button>
        <Link to="/login" className="text-primary mt-2">
          Already have an account? Login here
        </Link>
      </form>
    </div>
  );
}
