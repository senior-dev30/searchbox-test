import styled from 'styled-components';

export const SearchInput = styled.input`
  border: 1px solid ${(props) => props.theme.colors.grey.main};
  color: ${(props) => props.theme.colors.text.primary};
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.primary};
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.theme.fonts.baseSize};
  line-height: 150%;
  padding: 6px 10px;
  outline: none;
  border-radius: 12px !important;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    right: 8px;
    color: ${(props) => props.theme.colors.grey.gray80};
  }
  & .dropdown {
    position: absolute;
    left: 4px;
    width: calc(100% - 8px);
    top: 38px;
    background: ${(props) => props.theme.colors.white};
    box-sizing: border-box;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    border-radius: 0px 0px 4px 4px;
  }
  & .dropdown-item {
    padding: 8px;
    font-family: ${(props) => props.theme.fonts.primary};
    font-style: normal;
    font-weight: normal;
    font-size: ${(props) => props.theme.fonts.baseSize};
    line-height: 150%;
    &:hover {
      background-color: ${(props) => props.theme.colors.grey.light};
    }
  }
`;
