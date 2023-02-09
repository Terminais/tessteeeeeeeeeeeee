import dummyTerminals from "../DummyData/dummyTerminals"
import Styled from  "styled-components"
import {useNavigate} from 'react-router-dom'
import useSound from "use-sound"
import clicks from '../assets/sounds/typing_keystroke_single_hard_04.wav'

const data = dummyTerminals
export default function TerminalsList(props) {
   const [play]=useSound(clicks,{volume:.7})
   const {setActiveTerminal} = props
   let nav = useNavigate()
   return <Container>
      <div className="terminals">
      {Object.values(data).map((terminal) => <div className="terminalBlock" key={terminal.terminal_name}>
         <div>{terminal.location}</div>
            <TerminalNameStyle onClick={() => {
               play()
               console.log(terminal)
               setActiveTerminal(terminal)
               nav(`/terminal/${terminal.terminal_name}`)}}>[{terminal.terminal_name}]
            </TerminalNameStyle>
         </div>)}
         </div>{/*terminals*/}
         
   </Container>
};

const TerminalNameStyle = Styled.div`
   display: inline-block;
   font-size:1rem;
   cursor: pointer;
   margin: 1%;
   width:fit-content;
   @media(max-width:800px){
      font-size: 1rem;
      h2{
         font-size:1rem;
      }
   }
`

const Container = Styled.div`
   height: 100%;
   width:100%;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
   h2{
     align-self:center;
   }
   .terminals{
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      height: 90%;
   }
   .terminalBlock{
      height:fit-content;
      margin:5px;
      width:90%;
      background-color:inherit;
      color:inherit;
      border-left: solid 2px;
      border-right: solid 2px;
      border-radius: 5px;
      border-color:inherit;
   }
   @media (min-width: 800px){
      .terminals{
         flex-direction:row;
      }
      .terminalBlock{

         width:fit-content;
      }
   }
   footer{
      align-self: flex-end;
   }
 
`