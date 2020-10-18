import React from 'react';

import Button from '../../atoms/button';

const TodoDeleteBtn = (props: any) => {
  const buttonStyle = {
    width: "100%", backgroundColor: "#F00",
    color: "#FFF", textAlign: "center",
    padding: 5, hegith: 36, border: 0,
    fontSize: 24, fontWeight: 600,
    cursor: "pointer"
  }
  return (
    <div>
      <Button
        style={buttonStyle}
        onClick={props.onDeleteByCheckeds} 
      >
        삭제
      </Button>
    </div>
  );
};

export default TodoDeleteBtn;
