import React, {useState, useEffect} from 'react';

import TodoRow from '../../molecules/todoRow'

interface TodoItem {
  checked: boolean
  title: string
  isLike: boolean
}

const Todos = (props: any) => {
  let [todos, setTodos] = useState<TodoItem[]>([])
  
  useEffect(() => {
    initData()
  }, [])

  const initData = () => {
    let temp = []
    temp.push({
      checked: false,
      title: "react 아토믹 디자인 패턴 적용하기",
      isLike: true,
      isDelete: false,
    }, {
      checked: false,
      title: "storybook을 활용하여 아토믹 디자인 패턴 구조 확인123123123123asad,",
      isLike: false,
      isDelete: false,
    }, {
      checked: false,
      title: "title2",
      isLike: true,
      isDelete: false,
    }, {
      checked: true,
      title: "title2",
      isLike: true,
      isDelete: false,
    }, {
      checked: false,
      title: "title2",
      isLike: false,
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
    temp[idx].isLike = !temp[idx].isLike
    setTodos(temp)
  }

  return (
    <div>
      {todos.map((todo, key) => (
        <TodoRow
          key={key}
          onCheckBtnClick={() => onCheckBtnClick(key)}
          onLikeBtnClick={() => onLikeBtnClick(key)}
          {...todo}
        /> 
      ))}
    </div>
  );
};

export default Todos;
