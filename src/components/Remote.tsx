import styled from "styled-components";
import {
  BsArrowDownSquare,
  BsArrowLeftSquare,
  BsArrowRightSquare,
  BsArrowUpSquare,
} from "react-icons/bs";

interface RemoteProps {
  onUpClick?: () => void;
  onRightClick?: () => void;
  onDownClick?: () => void;
  onLeftClick?: () => void;
}

const RemoteContainer = styled.div`
  box-sizing: content-box;
  width: 200px;
  height: 300px;
  border: 5px solid gray;
  border-radius: 8px;
  position: fixed;
  right: 100px;
  bottom: 100px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  background-color: gray;
  color: white;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
`;

const Buttons = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin-top: 40px;
`;

const UP = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const RIGHT = styled.div`
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-100%, -50%);
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const DOWN = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -100%);
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const LEFT = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Remote = ({
  onUpClick,
  onRightClick,
  onDownClick,
  onLeftClick,
}: RemoteProps) => {
  return (
    <RemoteContainer>
      <Header>Remote Controller</Header>
      <Buttons>
        <UP>
          <BsArrowUpSquare size={40} onClick={onUpClick} />
        </UP>
        <RIGHT>
          <BsArrowRightSquare size={40} onClick={onRightClick} />
        </RIGHT>
        <DOWN>
          <BsArrowDownSquare size={40} onClick={onDownClick} />
        </DOWN>
        <LEFT>
          <BsArrowLeftSquare size={40} onClick={onLeftClick} />
        </LEFT>
      </Buttons>
    </RemoteContainer>
  );
};

export default Remote;
