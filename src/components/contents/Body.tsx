import styled from "styled-components";
import { FocusPosition } from "../../pages/HDPage";

const BODY_ROW = 1;

interface BodyProps {
  valueArray: string[][];
  currentFocus: FocusPosition;
}

interface BodyItemProps {
  value: string;
  index: number;
  currentFocus: FocusPosition;
}

const BodyContainer = styled.div<{ isFocused: boolean }>`
  width: 100%;
  flex: 1;
  display: flex;
  background-color: lightgreen;
  border: ${(props) =>
    props.isFocused ? "5px solid blue" : "5px dotted black"};
`;

const BodyItemContainer = styled.div<{ isFocused: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.isFocused ? "5px solid red" : "5px dotted black"};
`;

const BodyItem = ({ value, index, currentFocus }: BodyItemProps) => {
  const isFocused =
    BODY_ROW === currentFocus.row && index === currentFocus.column;

  return <BodyItemContainer isFocused={isFocused}>{value}</BodyItemContainer>;
};

const Body = ({ valueArray, currentFocus }: BodyProps) => {
  const BodyValues = valueArray[BODY_ROW];

  return (
    <BodyContainer isFocused={BODY_ROW === currentFocus.row}>
      {BodyValues.map((value, index) => (
        <BodyItem
          key={index}
          index={index}
          value={value}
          currentFocus={currentFocus}
        />
      ))}
    </BodyContainer>
  );
};

export default Body;
