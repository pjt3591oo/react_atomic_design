import React from 'react';

import styled from 'styled-components';

import './index.css'

const Checkbox = (props: any) => {
  return (
    <div className="checkbox" id="custom-checkbox" >
      <label>
        <input type="checkbox" checked={props.checked} {...props}/>
        <span className="glyphicon glyphicon-ok"></span>
      </label>
    </div>
  )
}

export default Checkbox;
