import styled from "styled-components";
import Footer from "./Footer";
import Body from "./Body";
import Header from "./Header";
import { FocusPosition } from "../../interfaces";

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

interface ContentsProps {
  valueArray: string[][];
  currentFocus: FocusPosition;
}

const Contents = ({ valueArray, currentFocus }: ContentsProps) => {
  return (
    <ContentsContainer>
      <Header valueArray={valueArray} currentFocus={currentFocus} />
      <Body valueArray={valueArray} currentFocus={currentFocus} />
      <Footer valueArray={valueArray} currentFocus={currentFocus} />
    </ContentsContainer>
  );
};

export default Contents;
