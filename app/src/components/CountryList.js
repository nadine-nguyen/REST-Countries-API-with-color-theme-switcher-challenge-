import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FlagImage from '../styles/FlagImage';
import Strong from '../styles/Strong';
import Section from '../styles/Section';

const Grid = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 40px;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  max-width: 300px;
  height: 100%;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const formatter = new Intl.NumberFormat();

export default function CountryList({ data = [] }) {
  return (
    <Grid as={Section}>
      {data.map((c, i) => (
        <div key={i}>
          <CountrySummary {...c} />
        </div>
      ))}
    </Grid>
  );
}

function CountrySummary({
  alpha3Code,
  name,
  flag,
  population,
  region,
  capital,
}) {
  return (
    <Card>
      <Link to={`/${alpha3Code}`}>
        <FlagImage src={flag} alt={name} />
      </Link>

      <CardContent>
        <StyledLink as={Link} to={`/${alpha3Code}`}>
          <h2>{name}</h2>
        </StyledLink>
        <p>
          <Strong>Population:</Strong> {formatter.format(population)}
        </p>
        <p>
          <Strong>Region:</Strong> {region}
        </p>
        <p>
          <Strong>Capital:</Strong> {capital}
        </p>
      </CardContent>
    </Card>
  );
}
