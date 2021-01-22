import styled, { keyframes } from 'styled-components';

// creación del spinner a travez de keyframes.
// el spinner se utiliza al intentar hacer login.

const rotation = keyframes`
from{
    transform: rotate(0deg);
}

to{
    transform: rotate(360deg);
}
`;

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid #f8049c;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s linear infinite;
`;

export { Spinner };
