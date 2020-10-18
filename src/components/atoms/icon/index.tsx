import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const CompleteIcon = (props: any) => {
  return <img src="/imgs/Star_Pull.png" {...props}></img>
}
export const UnCompleteIcon = (props: any) => {
  return <img src="/imgs/Start_empty.png" {...props}></img>
}

export const DeleteIcon = (props: any) => {
  return <FontAwesomeIcon icon={faTrash} {...props} />
}

// export default Icon;
