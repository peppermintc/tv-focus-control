import styled from "styled-components";
import Remote from "../components/hardware/Remote";
import TV from "../components/hardware/TV";

const HDPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HDPage = () => {
  const onUpClick = () => {
    console.log("onUpClick");
  };
  const onRightClick = () => {
    console.log("onRightClick");
  };
  const onDownClick = () => {
    console.log("onDownClick");
  };
  const onLeftClick = () => {
    console.log("onLeftClick");
  };

  return (
    <HDPageContainer>
      <TV resolution={{ width: 1280, height: 720 }} />
      <Remote
        onUpClick={onUpClick}
        onRightClick={onRightClick}
        onDownClick={onDownClick}
        onLeftClick={onLeftClick}
      />
    </HDPageContainer>
  );
};

export default HDPage;
