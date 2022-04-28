import styled from "styled-components";

interface Resolution {
  width: number;
  height: number;
}

interface TVProps {
  resolution: Resolution;
  contents?: React.ReactNode;
}

const TVContainer = styled.div<TVProps>`
  box-sizing: content-box;
  border: 5px solid #000000;
  border-radius: 8px;
  width: ${(props) => `calc(${props.resolution.width}px / 2)`};
  height: ${(props) => `calc(${props.resolution.height}px / 2)`};
`;

const TV = ({ resolution, contents }: TVProps) => {
  return (
    <>
      <h3>
        Resolution {resolution.width} X {resolution.height}
      </h3>
      <TVContainer resolution={resolution}>{contents}</TVContainer>
      <h4>실제 픽셀보다 2배 축소된 크기입니다</h4>
    </>
  );
};

export default TV;
