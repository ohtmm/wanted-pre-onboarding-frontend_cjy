import React, { useState } from "react";
import axios from "../../../node_modules/axios/index";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import Header from "../header/header";
import styles from "./sign_up.module.css";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(
        "https://pre-onboarding-selection-task.shop/auth/signup",
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
        console.log("회원가입 완료!");
        localStorage.setItem("token", response.data.access_token);
        navigate("/todo");
      })
      .catch((error) => {
        console.log("에러 발생", error.response);
      });
  };

  const goLogin = () => {
    navigate("/");
  };
  return (
    <div className={styles.signUp}>
      <Header />
      <h1 className={styles.tit}>회원 가입</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email" className={styles.label}>
          사용할 이메일을 입력하세요
        </label>
        <input
          name="email"
          type="email"
          placeholder="@을 포함해야 합니다"
          value={email}
          required
          autoComplete="off"
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
          className={styles.email}
        />
        <label htmlFor="password" className={styles.label}>
          사용할 비밀번호를 입력하세요
        </label>
        <input
          type="password"
          name="password"
          placeholder="8자 이상이어야 합니다"
          value={password}
          required
          autoComplete="off"
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
          className={styles.password}
        />
        <button onClick={onSubmit} className={styles.submit}>
          {" "}
          가입하기{" "}
        </button>
      </form>
      <button onClick={goLogin} className={styles.goBack}>
        {" "}
        로그인 화면으로 가기{" "}
      </button>
    </div>
  );
};

export default SignUp;
