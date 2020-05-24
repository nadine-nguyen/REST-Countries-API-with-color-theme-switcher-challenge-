import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeCheckbox = styled.input`
  display: none;
`;

const ThemeLabel = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.text};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

export default function ThemeController({ onChange, ...rest }) {
  return (
    <div>
      <ThemeCheckbox
        type="checkbox"
        id="theme-controller"
        onChange={onChange}
        {...rest}
      />
      <ThemeLabel htmlFor="theme-controller" tabIndex="0">
        <StyledIcon icon={faMoon} />
        Dark Mode
      </ThemeLabel>
    </div>
  );
}
