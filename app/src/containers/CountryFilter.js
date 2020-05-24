import React from 'react';
import { useLocation } from 'react-router-dom';
import CountryList from '../components/CountryList';
import useNameSearch from '../hooks/useNameSearch';

export default function CountryFilter({ filter }) {
  let location = useLocation();
  const search = location.search;
  const params = new URLSearchParams(search);
  const searchName = params.get('name');

  const [isLoading, data, error] = useNameSearch(searchName);
  const [filtered, setFiltered] = React.useState([]);

  React.useEffect(() => {
    if (filter) {
      setFiltered(
        data.filter((d) => d.region.toLowerCase() === filter.toLowerCase())
      );
    } else {
      setFiltered(data);
    }
  }, [data, filter]);

  if (error) {
    return <p>{error}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <CountryList data={filtered} />
    </React.Fragment>
  );
}
