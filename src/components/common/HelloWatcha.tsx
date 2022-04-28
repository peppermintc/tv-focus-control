import styled from "styled-components";
import WatchLogo from "../../img/watchaLogo.png";

const HelloWatchContainer = styled.div`
  background-color: gray;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  gap: 15px;
  padding: 10px 20px;
  border-radius: 0px 0px 0px 10px;
`;

const LogoImg = styled.img`
  width: 60px;
`;

const HelloWatcha = () => {
  return (
    <HelloWatchContainer>
      Hello,
      <LogoImg src={WatchLogo} alt="logo" />
    </HelloWatchContainer>
  );
};

export default HelloWatcha;
