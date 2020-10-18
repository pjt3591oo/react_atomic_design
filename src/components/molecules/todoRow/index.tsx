import React from 'react';

import Checkbox from '../../atoms/checkbox'
import Font from '../../atoms/font'
import {CompleteIcon, UnCompleteIcon, DeleteIcon} from '../../atoms/icon'

const Row = (props: any) => {
  return (
    <div style={{borderBottom: "2px solid #F0F9FB", padding: 16, clear: "both", verticalAlign:"center", textAlign: "left" }}>
      <div style={{ display: "inline-block" }}>
        <Checkbox checked={props.checked} onClick={props.onCheckBtnClick}/> 
      </div>
      <div style={{ display: "inline-block", textAlign: "left", width: "80%", marginLeft: 10, verticalAlign: "top" }}>
        <Font
          style={{ display: "block", wordWrap: "break-word", whiteSpace: "nowrap", textOverflow: "ellipsis", overflow: "hidden" }}
          isDelete={props.isDelete}
        >
          {props.title}
        </Font>
      </div>
      <div style={{ display: "inline-block", float: "right", cursor: "pointer" }}>
        {/* <Icon isComplete={props.isComplete} onClick={props.onLikeBtnClick}/> */}
        <DeleteIcon onClick={props.onDeleteByItem} />
        <span style={{ width: "12px" }}>{" "}</span>
        {props.isComplete
          ? (<CompleteIcon onClick={props.onLikeBtnClick} width={16} height={16} />)
          : (<UnCompleteIcon onClick={props.onLikeBtnClick} width={16} height={16} />)
        }
      </div>
    </div>
  );
};

export default Row;
