"use client";

import Button from "./Button";

const Login = () => {
  return (
    // <a
    //   href="api/auth/login"
    //   className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
    // >
    //   Log In
    // </a>
    <Button buttonType="primary" onClick={() => onBtnClicked()}>
      Login/Signup
    </Button>
  );

  function onBtnClicked() {
    window.location.href = "/api/auth/login";
  }
};

export default Login;
