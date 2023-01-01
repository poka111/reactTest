import React, { useState } from 'react'

const Main = (props) => {

 const [formText,setText] = useState();
 
  function hundleUserID(e){
      props.setUserID(e.target.value);
  }

  return (
      <div>ログイン画面<br/>
      <input type="text" value={formText} placeholder="ユーザーID" onChange={(e) => hundleUserID(e)}/>
      </div>
   );
  }

export default Main