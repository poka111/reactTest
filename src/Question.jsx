import React from 'react'

export const Question = (props) => {
  //改行なし
  const contentStyle = {
    display: "inline-block",
    _display: "inline"
};

const clickChange = (e) =>{
  props.setAnswer(e.target.value);
}

return(
    <div class = "yn">
      <p style={contentStyle}>{props.question}　</p>
      <p style={contentStyle}></p>
      <label>
      <input
        name={"q" + props.questionNumber}
        class = "y"
        type="radio"
        value="y"
        onChange={(e) => clickChange(e)}
          />
              yes
    </label>
    <p style={contentStyle}></p>
    <label>
      <input
        name={"q" + props.questionNumber}
        class="n"
        type="radio"
        value="n"
        onChange={(e) => clickChange(e)}
      />
      no
    </label> 
  </div>
);
}

export default Question