import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
//import axios from "axios";
import styled from "styled-components";
//import dummyTerminals from "../DummyData/dummyTerminals";

export default function Terminal(props) {
  //sets prompt for a page  
  const [prompt, setPrompt] = useState('');
  //terminalobject to hold pages
  const [terminal,setTerminal] = useState({})
  //pages hold prompts and array of userOptions
  const [page,setPage] = useState({})
  const handleChange = (e) => {
    setPrompt(e.target.value );
  };
  const handleSubmit = (e)=> {
    e.preventDefault();

  }

  return (
    <PageStyle className="page">
        <form onSubmit={handleSubmit}>
            {/* prompt */}
        <textarea
          type="text"
          name="newContent"
          placeholder="testing changes"
          value={prompt}
          onChange={handleChange}
        ></textarea>
        {/* useroptions */}
        {/* a list of 1 to 4 options and a "[back]" each leading to a page */}
        <button type='submit'>{'[submit]'}</button>
        </form>
    </PageStyle>
  );
}

const PageStyle = styled.div`
  display: flex;
  white-space: pre-wrap;
  flex-direction: column;
  h2{
    text-align:center;
  }
  @media(max-width:800px){
    font-size: 0.65rem;
    h2{
       font-size:0.7rem;
    }
 }
 .option{
  cursor: pointer;
 }
 textarea{
   background-color:inherit;
   color:inherit;
   border-top: solid 2px;
   border-left: none;
   border-right:none;
   border-radius: 5px;
   border-color:inherit;
 }
 textarea:focus {
  border: solid 2px;
  outline: none !important;
}
 button{
  background-color:inherit;
  color:inherit;
  border:none;
 }
 button:focus{
  outline: none !important;
 }
`;