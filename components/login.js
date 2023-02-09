import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const LoginPage = (props) => {
  const initialFormValues = {
    username: "",
    password: "",
  };

  //const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  const onChange = (e) => {
    const { name, value } = e.target;
    //validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };

    axios
      .post(`https://f2d20terminal.herokuapp.com/api/auth/login`, user)
      .then((r) => {
        localStorage.setItem("token", r.data.token);
        console.log(r.data);
        //history.push("/landing");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <StyledLoginDiv>
      <form id="login-form" onSubmit={formSubmit}>
        <h2>password required</h2>
        <div className="user-box">
          <input
            id="username"
            value={formValues.username}
            name="username"
            type="text"
            onChange={onChange}
            placeholder="username"
          />
        </div>
        <div className="user-box">
          <input
            id=""
            value={formValues.password}
            name="password"
            type="password"
            onChange={onChange}
            placeholder="password"
          />
        </div>
        <button className="submit" type="submit">
          submit
        </button>
      </form>
    </StyledLoginDiv>
  );
};

export default LoginPage;

const StyledLoginDiv = styled.div`
  * {
    font-family: arial;
    animation: colorPulse 5s infinite ease-in-out;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    caret-shape: block;

    &:before {
      animation: wave 10s infinite ease-in-out;
      content: "";
      height: 20vh;
      left: 0;
      opacity: 0.5;
      position: absolute;
      right: 0;
      z-index: 1;
    }

    &:after {
      background-image: linear-gradient(transparent, transparent 3px, #222);
      background-size: 4px 4px;
      bottom: 0;
      content: "";
      left: 0;
      pointer-events: none;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 2;
    }

    p:last-child:after {
      animation: blink 1s infinite;
      content: "_";
    }

    @keyframes colorPulse {
      0%,
      100% {
        color: #0c0;
        border-color: #0c0;
      }
      48%,
      52% {
        color: #090;
        border-color: #090;
      }
      50% {
        color: #060;
        border-color: #060;
      }
    }

    @keyframes wave {
      0% {
        box-shadow: 0 -10vh 20vh #0c0;
        top: -100vh;
      }
      48%,
      52% {
        box-shadow: 0 -10vh 20vh #090;
      }
      50% {
        box-shadow: 0 -10vh 20vh #060;
      }
      100% {
        box-shadow: 0 -10vh 20vh #0c0;
        top: 150vh;
      }
    }

    @keyframes blink {
      50% {
        opacity: 0;
      }
    }
  }

  .submit {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    border-top: solid green;
    border-radius: 5px;
    margin-top: 3px;
  }
`;
