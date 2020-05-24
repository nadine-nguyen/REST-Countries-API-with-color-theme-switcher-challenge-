import React from 'react';
import Container from '../styles/Container';
import Searchbar from '../components/Searchbar';
import DropDownMenu from '../components/DropDownMenu';
import CountryFilter from './CountryFilter';

import styled from 'styled-components';

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  flex-wrap: wrap;
  > * {
    margin: 10px 0;
  }
`;

export default function HomePage() {
  const [filter, setFilter] = React.useState(null);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <React.Fragment>
      <Container>
        <Actions>
          <Searchbar />
          <DropDownMenu
            label="Filter by region"
            options={[
              { text: 'All', value: '' },
              { text: 'Africa', value: 'africa' },
              { text: 'Americas', value: 'americas' },
              { text: 'Asia', value: 'asia' },
              { text: 'Europe', value: 'europe' },
              { text: 'Oceania', value: 'oceania' },
            ]}
            onChange={handleFilterChange}
          />
        </Actions>
      </Container>
      <Container>
        <CountryFilter filter={filter} />
      </Container>
    </React.Fragment>
  );
}
