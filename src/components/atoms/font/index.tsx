import React from 'react';
import styled from 'styled-components';

const Font = styled.span.attrs((props: any) => ({
}))<any>`
  fontWeight: 900;
  color: ${(props:any) => props.isDelete? "red": "black"};
  text-decoration: ${(props:any) => props.isDelete? "line-through": "none"};
`;

export default Font;
