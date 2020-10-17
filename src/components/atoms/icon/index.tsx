import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar, faHandSpock } from '@fortawesome/free-solid-svg-icons';

const Icon = (props: any) => {
  if (props.isLike) {
    return <FontAwesomeIcon icon={faStar} {...props}/>
  }
  return <FontAwesomeIcon icon={faHandSpock} {...props}/>
};

export default Icon;
