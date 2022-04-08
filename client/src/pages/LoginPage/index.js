import React, { useEffect } from "react";
import Form from "../../components/Form";
import logo from "../../static/imgs/logo.png";
import { NavLink as Link, useNavigate } from "react-router-dom";
import { fetchProfile, loginUser } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const user = useSelector( state => state.user.user)
  const inputs = [{ text: "username" }, { text: "password" }];

  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(e));
  };

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token != null) {
      dispatch(fetchProfile());
      nav("/", { replace: true });
    }
  }), [];

  return (
    <div className="mx-auto bg-nl-darkblue min-h-screen container pt-16 px-8">
      <div className="space-y-20">
        <img
          className=" container object-cover h-28 w-80 rounded-full mx-auto"
          src={logo}
        />
        <Form text="Login" inputs={inputs} handleSubmit={login} />
      </div>
      <Link to="/register" className="text-slate-50 mx-auto w-fit block mt-4">
        Don&apos;t have an account?
      </Link>
    </div>
  );
};

export default LoginPage;
