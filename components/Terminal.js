import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import styled from "styled-components";
import useSound from "use-sound"
import clicks from '../assets/sounds/typing_keystroke_sequence_11.wav'
const spriteMap = {
  sequence: [0, 527],
  heavy0: [530, 272],
  heavy1: [730, 478],
};
export default function Terminal(props) {
  const [play]= useSound(clicks,{volume:.7, sprite:spriteMap})
  const {activeTerminal} = props;
  const initialState = {
    prompt: "loading",
  };
  const nav = useNavigate();
  const [page, setPage] = useState(initialState);
  const [tA, setTA] = useState('');
  const sounds=["sequence", "heavy0", "heavy1"]
  useEffect(()=>{
    if(!activeTerminal)
    nav("/")
    setPage(activeTerminal.page_0)},[]) // eslint-disable-line react-hooks/exhaustive-deps
  const handleClick = (route) => {
    setPage(activeTerminal[route])
  }
  const handleChange = (e) => {
    setTA(e.target.value );
  };
  const handleSubmit = (e)=> {
    e.preventDefault();
    setPage({...page, prompt:tA})
  }

  return (
    <PageStyle className="page">
      {activeTerminal.header ? (
        <h2 className="page-header">{`${activeTerminal.header}`}</h2>
      ) : (
        <></>
      )}
      {page ? 
      <div>
        <h3 className="page-text">{`${page.prompt}`}</h3>
      </div>
      : <></>}
      {page.userOptions?.map((option, index) => {
          return (
            <h3 className="option"
              key={index}
              onClick={() =>{
                play({id:returnRandomSound(sounds)});
                handleClick(`${option.route}`)
              }}
            >{`> ${option.text}`}
            </h3>
          );
        })}
        {/* INPUT FIELD */}
        {false?<form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newContent"
          placeholder="testing changes"
          value={tA}
          onChange={handleChange}
        ></input>
        <button type='submit'>{'[submit]'}</button>
        </form>:<></>}
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
 input{
   background-color:inherit;
   color:inherit;
   border-top: solid 2px;
   border-left: none;
   border-right:none;
   border-radius: 5px;
   border-color:inherit;
   border-bottom:none;
   ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
   color: inherit;
   opacity: .5;
}
 }
 input:focus {
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

function returnRandomSound(array){
  return array[Math.floor(Math.random() * array.length)]
}
