import React from 'react';
import axios from 'axios';
import { NAME_SEARCH, ALL_COUNTRIES } from '../apiRoutes';

export default function useNameSearch(searchName) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function fetchData(name) {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          name ? NAME_SEARCH + `/${name}` : ALL_COUNTRIES
        );
        setData(data);
        setIsLoading(false);
      } catch (error) {
        if (error.response) {
          if (error.response.status === 404) {
            setError('Could not find any results.');
          } else {
            setError(error.message);
          }
        } else {
          setError(error.message);
        }
        setIsLoading(false);
      }
    }

    fetchData(searchName);
  }, [searchName]);

  return [isLoading, data, error];
}
