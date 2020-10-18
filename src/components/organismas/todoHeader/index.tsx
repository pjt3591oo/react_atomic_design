import React from 'react';

import TodoHeaderText from '../../molecules/todoHeaderText'

const TodoHeader = (props: any) => {

  return (
    <div style={{boxSizing: "border-box", width: "100%", backgroundColor: "#D3EDF5", paddingTop: 30, paddingBottom: 30, paddingLeft:10}}>
      <TodoHeaderText />
    </div>
  );
};

export default TodoHeader;
