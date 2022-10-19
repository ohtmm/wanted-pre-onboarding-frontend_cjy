import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../node_modules/axios/index";
import { isLogin } from "../../utils/is_login";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidEmail = email.includes("@");
  const isValidPassword = password.length >= 8;
  const allValid = isValidEmail && isValidPassword === true;

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(
        "https://pre-onboarding-selection-task.shop/auth/signin",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((response) => {
        console.log("로그인 성공");
        localStorage.setItem("token", response.data.access_token);
        navigate("/todo");
      })
      .catch((error) => {
        console.log("에러 발생", error.response);
        alert("일치하는 정보가 없습니다");
      });
  };
  useEffect(() => {
    if (isLogin()) {
      navigate("/todo");
    }
  }, []);
  return (
    <div className={styles.login}>
      <Header />
      <h1 className={styles.tit}> Hello, Wanted ! </h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email" className={styles.label}>
          email
        </label>
        <input
          type="email"
          className={styles.email}
          placeholder="반드시 @을 포함해주세요"
          name="email"
          required
          autoComplete="off"
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
        />

        <label htmlFor="password" className={styles.label}>
          password
        </label>
        <input
          type="password"
          className={styles.password}
          placeholder="8자 이상 입력해야 해요"
          required
          autoComplete="off"
          minLength="8"
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
        />
        <p className={styles.msg}>
          {" "}
          입력한 조건을 만족하였을 때 로그인 버튼이 나타납니다
        </p>
        <button
          className={allValid ? styles.active : styles.inactive}
          type="submit"
        >
          login
        </button>
      </form>

      <Link to={"/signup"}>회원가입</Link>
    </div>
  );
};

export default Login;
