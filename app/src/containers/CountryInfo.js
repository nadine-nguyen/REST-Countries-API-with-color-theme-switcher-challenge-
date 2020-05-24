import React from 'react';
import { useParams } from 'react-router-dom';
import useNameSearch from '../hooks/useNameSearch';
import CountryDetail from '../components/CountryDetail';
import BackButton from './BackButton';
import styled from 'styled-components';
import Container from '../styles/Container';

const Spacer = styled.div`
  margin: 30px 0;
`;

export default function CountryInfo() {
  let params = useParams();
  let { id } = params;

  let [isLoading, countries, fetchingError] = useNameSearch('');
  const [data, setData] = React.useState({});
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (!id) {
      return;
    }

    // find the country using its alpha3code
    let info = countries.filter((c) => c.alpha3Code === id);
    if (info.length === 0) {
      setData({});
      setError('404 Country Not Found');
      return;
    }
    info = info[0];

    // getting extended info about the country's borders
    if (info.borders.length > 0) {
      let borders = countries.filter(
        (c) => info.borders.findIndex((b) => b === c.alpha3Code) !== -1
      );
      info.borders = borders;
    }

    setData(info);
    setError(null);
  }, [id, countries]);

  if (error || fetchingError) {
    return (
      <Container>
        <Spacer>
          <BackButton />
        </Spacer>
        {error && <p>{error}</p>}
        {fetchingError && <p>{fetchingError}</p>}
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <React.Fragment>
      <Container>
        <Spacer>
          <BackButton />
        </Spacer>
      </Container>
      <CountryDetail {...data} />
    </React.Fragment>
  );
}
