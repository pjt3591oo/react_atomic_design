import React from 'react';

import TodoCard from '../components/templetes/todoCard';

const Todo = (props: any) => {
  return (
    <div>
      {
        [1, 2, 3, 4, 5,].map((item: any) => (
          <div style={{width: "33%", display: "inline-block", padding: 5, boxSizing: "border-box"}}>
            <TodoCard />
          </div>
        ))
      }
    </div>
  );
};

export default Todo;
