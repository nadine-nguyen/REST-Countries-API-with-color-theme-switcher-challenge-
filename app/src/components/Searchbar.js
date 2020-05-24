import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Search = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  padding: 16px 25px;
  width: max-content;
  align-items: center;
  border-radius: 5px;
`;

const SearchIcon = styled.div`
  margin-right: 15px;
`;

const SearchInput = styled.input`
  background-color: transparent;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.text};
  border: none;
  font-size: 1em;
  min-width: 30vw;
`;

export default function Searchbar({ onChange, onEnter, ...inputProps }) {
  let history = useHistory();

  const handleOnKeyUp = (e) => {
    if (e.key === 'Enter') {
      if (onEnter) {
        onEnter(e);
      } else {
        defaultOnEnter(e);
      }
    }
  };

  const defaultOnEnter = (e) => {
    if (e.target.value) {
      history.push(`?name=${e.target.value}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Search>
      <SearchIcon as={FontAwesomeIcon} icon={faSearch} />
      <SearchInput
        type="search"
        onChange={onChange}
        onKeyUp={handleOnKeyUp}
        {...inputProps}
      />
    </Search>
  );
}
