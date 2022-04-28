import styled from "styled-components";
import { FocusPosition } from "../../pages/HDPage";
import Footer from "./\bFooter";
import Body from "./Body";
import Header from "./Header";

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
