import React from 'react';
import { Content, Row } from './styles';
import { PeopleInterface } from 'redux/interfaces';

type Props = {
  result: PeopleInterface;
};

const SearchContainer = ({ result }: Props): React.ReactElement => {
  return (
    <Content>
      <Row>
        <div className="name">name:</div>
        <div>{result.name}</div>
      </Row>
      <Row>
        <div className="name">height:</div>
        <div>{result.height}</div>
      </Row>
      <Row>
        <div className="name">mass:</div>
        <div>{result.mass}</div>
      </Row>
      <Row>
        <div className="name">hair color:</div>
        <div>{result.hair_color}</div>
      </Row>
      <Row>
        <div className="name">skin color:</div>
        <div>{result.skin_color}</div>
      </Row>
      <Row>
        <div className="name">eye color:</div>
        <div>{result.eye_color}</div>
      </Row>
      <Row>
        <div className="name">birth year:</div>
        <div>{result.birth_year}</div>
      </Row>
      <Row>
        <div className="name">gender:</div>
        <div>{result.gender}</div>
      </Row>
    </Content>
  );
};

export default SearchContainer;
