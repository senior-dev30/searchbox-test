import styled from 'styled-components';

export const Content = styled.div`
  max-width: 640px;
  width: 100%;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 16px;
  padding: 16px;
  grid-template-columns: 100px 300px;
  & .name {
    font-weight: 600;
  }
`;
