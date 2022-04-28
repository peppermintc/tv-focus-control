// const BodyContainer = styled.div`
//   width: 100%;
//   flex: 1;
//   display: flex;
//   background-color: lightgreen;
// `;

// const BodyElement = styled.div`
//   width: 100%;
//   height: 100%;
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const FooterContainer = styled.div`
//   width: 100%;
//   height: 70px;
//   display: flex;
//   background-color: lightblue;
// `;

// const FooterElement = styled.div`
//   width: 100%;
//   height: 100%;
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;

// const Body = () => {
//   return (
//     <BodyContainer>
//       <BodyElement>Content 1</BodyElement>
//       <BodyElement>Content 2</BodyElement>
//       <BodyElement>Content 3</BodyElement>
//       <BodyElement>Content 4</BodyElement>
//       <BodyElement>Content 5</BodyElement>
//     </BodyContainer>
//   );
// };

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterElement>Footer 1</FooterElement>
//       <FooterElement>Footer 2</FooterElement>
//     </FooterContainer>
//   );
// };

import styled from "styled-components";
import { FocusPosition } from "../../pages/HDPage";
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
      {/* <Body />
      <Footer /> */}
    </ContentsContainer>
  );
};

export default Contents;
