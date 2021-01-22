import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// creación de estilo de texto grande para interpolar en el botón de login y quizá a futuro.

const largeStyles = ({ large }) => {
  if (large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }
};

// interpolación de variables con template literals para la configuración
// del estilo para el botón.

const Button = styled.button`
  color: white;
  background: ${(p) =>
    p.secondary ? p.theme.secondaryColor : p.theme.primaryColor};
  font-weight: bold;
  ${largeStyles}
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

Button.propTypes = {
  large: PropTypes.bool,
  secondary: PropTypes.bool,
};

export { Button };