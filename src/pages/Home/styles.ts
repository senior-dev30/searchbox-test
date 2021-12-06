import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px;
  width: 100%;
  height: 100vh;
  & .search-field {
    max-width: 640px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  display: flex;
  flex-direction: column;
`;
