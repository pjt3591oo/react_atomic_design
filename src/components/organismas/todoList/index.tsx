import React, {useState, useEffect} from 'react';

import TodoRow from '../../molecules/todoRow'

interface TodoItem {
  checked: boolean
  title: string
  isComplete: boolean
  isDelete: boolean
}

const Todos = (props: any) => {

  return (
    <div style={{maxHeight: 300, minHeight: 300, height: 300, overflowY: "scroll"}}>
      {props.todos.map((todo: TodoItem, key: number) => (
        <TodoRow
          key={key}
          onCheckBtnClick={() => props.onCheckBtnClick(key)}
          onLikeBtnClick={() => props.onLikeBtnClick(key)}
          onDeleteByItem={() => props.onDeleteByItem(key)}
          {...todo}
        /> 
      ))}
    </div>
  );
};

export default Todos;
