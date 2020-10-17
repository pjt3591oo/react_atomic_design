import React from 'react';

import Checkbox from '../../atoms/checkbox'
import Font from '../../atoms/font'
import Icon from '../../atoms/icon'

const Row = (props: any) => {

  return (
    <div style={{borderBottom: "2px solid #F0F9FB", padding: 16, clear: "both", verticalAlign:"center" }}>
      <div style={{ display: "inline-block" }}>
        <Checkbox isCheck={props.isCheck} onClick={props.onCheckBtnClick}/> 
      </div>
      <div style={{ display: "inline-block", textAlign: "left", width: "80%", marginLeft: 10, verticalAlign: "top" }}>
        <Font style={{ display: "block", wordWrap: "break-word", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}>
          {props.title}
        </Font>
      </div>
      <div style={{ display: "inline-block", float: "right", cursor: "pointer" }}>
        <Icon isLike={props.isLike} onClick={props.onLikeBtnClick}/>
      </div>
    </div>
  );
};

export default Row;
