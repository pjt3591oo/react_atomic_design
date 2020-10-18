import React, { useState } from 'react';

import Input from '../../atoms/input';

const TodoInput = (props: any) => {
  const [ title, setTitle ] = useState('')
  const padding ={paddingLeft: 17, paddingRight: 5, paddingTop: 5, paddingBottom: 5}
  const inputStyle = {
    ...padding,
    height: 54,
    border: "1px solid #e8e8e8",
    borderRadius: 5,
    fontSize: 24,
    width: "100%",
    boxSizing: "border-box"
  }
  
  const onKeyPressHandler = (e: any) => {
    if (e.key === "Enter") {
      props.onAddTodoInput({
        checked: false,
        isComplete: false,
        isDelete: false,
        title,
      })
      setTitle('')
    }
  }

  return (
    <div>
      <Input
        style={inputStyle}
        placeholder="할 일을 등록하세요"
        onKeyPress={onKeyPressHandler}
        value={title}
        onChange={(e:any) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default TodoInput;
