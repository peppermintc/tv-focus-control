import styled from "styled-components";

interface Resolution {
  width: number;
  height: number;
}

interface MobileProps {
  resolution: Resolution;
  contents?: React.ReactNode;
}

const MobileContainer = styled.div<MobileProps>`
  box-sizing: content-box;
  border: 5px solid #000000;
  border-radius: 8px;
  width: ${(props) => `${props.resolution.width}px`};
  height: ${(props) => `${props.resolution.height}px`};
`;

const Mobile = ({ resolution, contents }: MobileProps) => {
  return (
    <>
      <h3>
        Resolution {resolution.width} X {resolution.height}
      </h3>
      <MobileContainer resolution={resolution}>{contents}</MobileContainer>
      <h4>실제 픽셀 크기입니다</h4>
    </>
  );
};

export default Mobile;
