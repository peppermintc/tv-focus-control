import styled from "styled-components";
import { FocusPosition } from "../../pages/HDPage";

const HEADER_ROW = 0;

interface HeaderProps {
  valueArray: string[][];
  currentFocus: FocusPosition;
}

interface HeaderItemProps {
  value: string;
  index: number;
  currentFocus: FocusPosition;
}

const HeaderContainer = styled.div<{ isFocused: boolean }>`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: yellow;
  border: ${(props) =>
    props.isFocused ? "5px solid blue" : "5px dotted black"};
`;

const HeaderItemContainer = styled.div<{ isFocused: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.isFocused ? "5px solid red" : "5px dotted black"};
`;

const HeaderItem = ({ value, index, currentFocus }: HeaderItemProps) => {
  const isFocused =
    HEADER_ROW === currentFocus.row && index === currentFocus.column;
  return (
    <HeaderItemContainer isFocused={isFocused}>{value}</HeaderItemContainer>
  );
};

const Header = ({ valueArray, currentFocus }: HeaderProps) => {
  const headerValues = valueArray[HEADER_ROW];

  return (
    <HeaderContainer isFocused={HEADER_ROW === currentFocus.row}>
      {headerValues.map((value, index) => (
        <HeaderItem
          key={index}
          index={index}
          value={value}
          currentFocus={currentFocus}
        />
      ))}
    </HeaderContainer>
  );
};

export default Header;
