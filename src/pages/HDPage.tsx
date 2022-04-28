import styled from "styled-components";
import TV from "../components/TV";

const HDPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HDPage = () => {
  return (
    <HDPageContainer>
      <TV resolution={{ width: 1280, height: 720 }} />
    </HDPageContainer>
  );
};

export default HDPage;
