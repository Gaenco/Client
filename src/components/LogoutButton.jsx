import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
  <div className="font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mx-7 px-7">
   <button onClick={() => logout()}>Log out</button> 
   </div>);
};

export default LogoutButton;
