import React, { useEffect } from 'react'
import Main from './Main'
import { useState } from 'react';
import Page1 from './Page1';

const App = () => {
  
  const [test, setTest] = useState();
  const [visible, setVisible] = useState(true);
  const [userID, setUserID] = useState("000");
  const [screen, setScreen] = useState(<Main setUserID={setUserID}/>);

  const [q1,setQ1] = useState();
  const [q2,setQ2] = useState();
  const [q3,setQ3] = useState();
  const [q4,setQ4] = useState();

  const buttonClick = () =>{
    setScreen(<Page1 userID={userID} setScreen={setScreen} setQ1={setQ1} q1={q1}/>);
    setVisible(false);
  }

  function handleChange(e){
    console.log(e.target);
   }  

  const buttonTestClick = () =>{
    setTest("test");
  }

  useEffect(() => {
    console.log("レンダリング");
  })

  return (
    <>
      {screen}
      {/* <button onClick={() => buttonTestClick()}>test</button> */}
      <button style={{visibility: visible ? "visible" : "hidden"}} onClick={() => buttonClick()}>ログイン</button>
      <br/>
    </>
  )
}

export default App
