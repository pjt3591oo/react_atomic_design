import React, { useState, useEffect } from 'react';

import TodoHeader from '../../organismas/todoHeader';
import TodoInput from '../../organismas/todoInput';
import TodoList from '../../organismas/todoList';
import TodoDeleteBtn from '../../organismas/todoDelete';

interface TodoItem {
  checked: boolean
  title: string
  isComplete: boolean
  isDelete: boolean
}

const Todo = (props: any) => {
  let [todos, setTodos] = useState<TodoItem[]>([])
  
  useEffect(() => {
    initData()
  }, []);

  const initData = () => {
    let temp = []
    temp.push({
      checked: false,
      title: "react 아토믹 디자인 패턴 적용하기",
      isComplete: true,
      isDelete: false,
    }, {
      checked: false,
      title: "storybook을 활용하여 아토믹 디자인 패턴 구조 확인123123123123asad,",
      isComplete: false,
      isDelete: false,
    }, {
      checked: false,
      title: "title1",
      isComplete: true,
      isDelete: false,
    }, {
      checked: false,
      title: "title2",
      isComplete: true,
      isDelete: false,
    }, {
      checked: false,
      title: "title3",
      isComplete: false,
      isDelete: false,
    })

    setTodos(temp);
  };

  const onCheckBtnClick = (idx: number) => {
    let temp = [...todos]
    temp[idx].checked = !temp[idx].checked
    setTodos(temp)
  }

  const onLikeBtnClick = (idx: number) => {
    let temp = [...todos]
    temp[idx].isComplete = !temp[idx].isComplete
    setTodos(temp)
  }

  const onDeleteByCheckeds = () => {
    let temp = [...todos];

    temp.forEach((item: TodoItem, idx: number) => {
      if (item.checked) {
        item.isDelete = true
        item.checked = false
      }
    });

    setTodos(temp);
  }
  
  const onDeleteByItem = (idx: number) => {
    let temp = [...todos];
    temp[idx].isDelete = true
    setTodos(temp)
  }

  const onAddTodoInput = (todo: TodoItem) => {
    let temp = [...todos];
    temp.push(todo);
    setTodos(temp);
  }

  return (
    <div>
      <TodoHeader />
      <TodoInput
        onAddTodoInput={onAddTodoInput}
      />
      <TodoList
        todos={todos}
        onCheckBtnClick={onCheckBtnClick}
        onLikeBtnClick={onLikeBtnClick}
        onDeleteByItem={onDeleteByItem}
      />
      <TodoDeleteBtn
        todos={todos}
        onDeleteByCheckeds={onDeleteByCheckeds}
      />
    </div>
  );
};

export default Todo;
