import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const DropDownButton = styled.button`
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  padding: 16px 25px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: ${(props) => props.theme.fontFamily};
`;

const DropDown = styled.div`
  position: relative;
  width: max-content;
`;

const Menu = styled.datalist`
  position: absolute;
  top: calc(100% + 3px);
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  width: 100%;
  padding: 15px 0;
  border-radius: 5px;
  display: none;
  flex-direction: column;
  z-index: 1;

  &.show {
    display: flex;
  }
`;

const Option = styled.option`
  cursor: pointer;
  text-decoration: none;
  padding: 4px 25px;
  color: ${(props) => props.theme.text};
  &:hover,
  &:focus,
  &.selected {
    background-color: ${(props) => props.theme.elementSecondary};
  }
`;

const Icon = styled.div`
  margin-left: 20px;
`;

export default function DropDownMenu({ label, options, onChange }) {
  const [active, setActive] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0].value);

  window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-btn')) {
      setActive(false);
    }
  });

  const handleChange = (e) => {
    setSelected(e.target.value);
    onChange(e);
  };

  return (
    <DropDown>
      <DropDownButton
        onClick={() => setActive(!active)}
        className="dropdown-btn"
      >
        {label} <Icon as={FontAwesomeIcon} icon={faAngleDown} />
      </DropDownButton>
      <Menu className={active && 'show'}>
        {options.map((l, i) => (
          <Option
            key={i}
            value={l.value}
            onClick={handleChange}
            tabIndex="0"
            {...(selected === l.value ? { className: 'selected' } : {})}
          >
            {l.text}
          </Option>
        ))}
      </Menu>
    </DropDown>
  );
}
