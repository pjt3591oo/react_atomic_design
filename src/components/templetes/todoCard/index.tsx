import React from 'react';

import TodoHeader from '../../organismas/todoHeader';
import TodoList from '../../organismas/todoList';
import Input from '../../atoms/input';

const Todo = (props: any) => {
  const inputStyle ={width: "100%", height: "31px", padding: 5, border: "1px solid #e8e8e8", borderRadius: 5, fontSize: 16}
  return (
    <div>
      <TodoHeader />
      <Input style={inputStyle} placeHolder="할 일을 등록하세요"/>
      <TodoList />
    </div>
  );
};

export default Todo;
