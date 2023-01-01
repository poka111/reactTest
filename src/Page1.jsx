import React from 'react'
import Question from './Question'
import Page2 from './Page2'

const Page1 = (props) => {

const confirmButton = () =>{
    props.setScreen(<Page2 q1={props.q1}/>);
    // props.setAnswer();
}

  return (
    <div>Page1<br/>
        あなたのユーザーID：{props.userID}

        <Question question="VALORANTは好きですか？" questionNumber="1" setAnswer={props.setQ1}/>
        {/* <Question question="スマブラは好きですか？　" questionNumber="2" setAnswer={props.setQ2} q1={props.q1} q2={props.q2} q3={props.q3} q4={props.q4}/>
        <Question question="スプラは好きですか？　　" questionNumber="3" setAnswer={props.setQ3} q1={props.q1} q2={props.q2} q3={props.q3} q4={props.q4}/>
        <Question question="マイクラは好きですか？　" questionNumber="4" setAnswer={props.setQ4} q1={props.q1} q2={props.q2} q3={props.q3} q4={props.q4}/> */}
        <button onClick={() => confirmButton()}>送信</button>
    </div>
  )
}

export default Page1