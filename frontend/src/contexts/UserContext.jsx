import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "./api/UserAPI";
import { makeToast } from "../components";

const UserContext = createContext();

export function UserProvider({ children }) {

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",

  });

  // User Login
  const Login = (values) => {
    UserAPI.login(values)
      .then((response) => {
        localStorage.setItem("uId", response.data._id);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("permissionLevel", response.data.permissionLevel);
        navigate("/user");
        makeToast({ type: "success", message: "Login Successful" });
      })
      .catch((error) => {
        makeToast({ type: "error", message: "Invalid Email or Password" });
      });
  };

  //User Register
  const Register = async (values) => {
    UserAPI.register(values)
      .then((response) => {
        setUsers([...users, response.data]);
        makeToast({ type: "success", message: "Registration Successful" });
        window.location.href = "/user/login";
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.response.data);
        if (err.response.data.details == "Email already exists") {
          makeToast({ type: "error", message: "Email already exists" });
          setMailError(err.response.data.details);
        }
      });
  };




  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        Login,
        Register,


      }}

    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;