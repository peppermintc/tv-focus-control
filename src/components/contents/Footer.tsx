import styled from "styled-components";
import { FocusPosition, FOOTER_ROW } from "../../pages/HDPage";

interface FooterProps {
  valueArray: string[][];
  currentFocus: FocusPosition;
}

interface FooterItemProps {
  value: string;
  index: number;
  currentFocus: FocusPosition;
}

const FooterContainer = styled.div<{ isFocused: boolean }>`
  width: 100%;
  height: 70px;
  display: flex;
  background-color: lightblue;
  border: ${(props) =>
    props.isFocused ? "5px solid blue" : "5px dotted black"};
`;

const FooterItemContainer = styled.div<{ isFocused: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.isFocused ? "5px solid red" : "5px dotted black"};
`;

const FooterItem = ({ value, index, currentFocus }: FooterItemProps) => {
  const isFocused =
    FOOTER_ROW === currentFocus.row && index === currentFocus.column;

  return (
    <FooterItemContainer isFocused={isFocused}>{value}</FooterItemContainer>
  );
};

const Footer = ({ valueArray, currentFocus }: FooterProps) => {
  const FooterValues = valueArray[FOOTER_ROW];

  return (
    <FooterContainer isFocused={FOOTER_ROW === currentFocus.row}>
      {FooterValues.map((value, index) => (
        <FooterItem
          key={index}
          index={index}
          value={value}
          currentFocus={currentFocus}
        />
      ))}
    </FooterContainer>
  );
};

export default Footer;
