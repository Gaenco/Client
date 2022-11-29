import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mx-7 px-7" >
      <button onClick={() => loginWithRedirect()}>Log in</button>
    </div>
  );
};

export default LoginButton;