import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Strong from '../styles/Strong';
import Container from '../styles/Container';
import Section from '../styles/Section';

const FluidContainer = styled(Container)`
  @media (min-width: 1024px) {
    max-width: 98vw;
    max-width: 1440px;
  }
`;

const StyledLink = styled.a`
  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};
  width: max-content;
  padding: 10px;
  margin: 10px 10px 10px 0;
  text-decoration: none;
  &:last-child {
    margin-right: 0;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  &.space-evenly {
    justify-content: space-evenly;
  }
  &.align-center {
    align-items: center;
  }
  @media (min-width: 900px) {
    &.desktop-responsive {
      flex-wrap: nowrap;
    }
  }
`;

const BorderTitle = styled.p`
  font-weight: 600;
  margin-right: 20px;
  width: max-content;
`;

const DesktopColumn = styled.div`
  flex: 1 1 100%;

  @media (min-width: 1024px) {
    margin-right: 20px;
    flex: 1 1 50%;
  }
`;

const Flag = styled.div`
  height: 100%;
  > img {
    width: calc(100% - 20px);
    max-width: 500px;
    height: 100%;
    min-width: 200px;
  }
  @media (min-width: 1024px) {
    text-align: center;
  }
`;

const formatter = new Intl.NumberFormat();

export default function CountryDetail({
  name,
  nativeName,
  flag,
  population,
  region,
  subregion,
  capital,
  topLevelDomain = [],
  currencies = [],
  languages = [],
  borders = [],
}) {
  return (
    <FlexBox as={FluidContainer} className="desktop-responsive align-center">
      <DesktopColumn as={Flag}>
        <img src={flag} alt={name} />
      </DesktopColumn>
      <DesktopColumn>
        <h1>{name}</h1>
        <FlexBox className="desktop-responsive">
          <DesktopColumn as={Section}>
            <p>
              <Strong>Native Name:</Strong> {nativeName}
            </p>
            <p>
              <Strong>Population:</Strong> {formatter.format(population)}
            </p>
            <p>
              <Strong>Region:</Strong> {region}
            </p>
            <p>
              <Strong>Sub Region:</Strong> {subregion}
            </p>
            <p>
              <Strong>Capital:</Strong> {capital}
            </p>
          </DesktopColumn>

          <DesktopColumn as={Section}>
            <p>
              <Strong>Top Level Domain:</Strong>{' '}
              {topLevelDomain.map((d, i) => (
                <span key={i}>{d}</span>
              ))}
            </p>
            <p>
              <Strong>Currencies:</Strong>{' '}
              {currencies.map((c, i) =>
                i === currencies.length - 1 ? (
                  <span key={c.code}>{c.name}</span>
                ) : (
                  <React.Fragment key={c.code}>
                    <span>{c.name}</span>,{' '}
                  </React.Fragment>
                )
              )}
            </p>
            <p>
              <Strong>Languages:</Strong>{' '}
              {languages.map((l, i) =>
                i === languages.length - 1 ? (
                  <span key={i}>{l.name}</span>
                ) : (
                  <React.Fragment key={i}>
                    <span>{l.name}</span>,{' '}
                  </React.Fragment>
                )
              )}
            </p>
          </DesktopColumn>
        </FlexBox>

        <Section>
          <FlexBox className="align-center">
            <BorderTitle>Border Countries:</BorderTitle>
            <FlexBox>
              {borders.map((b, i) => (
                <StyledLink as={Link} key={i} to={`/${b.alpha3Code}`}>
                  {b.name}
                </StyledLink>
              ))}
            </FlexBox>
          </FlexBox>
        </Section>
      </DesktopColumn>
    </FlexBox>
  );
}
