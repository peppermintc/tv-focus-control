import styled from "styled-components";

interface Resolution {
  width: number;
  height: number;
}

interface TabletProps {
  resolution: Resolution;
  contents?: React.ReactNode;
}

const TabletContainer = styled.div<TabletProps>`
  box-sizing: content-box;
  border: 5px solid #000000;
  border-radius: 8px;
  width: ${(props) => `calc(${props.resolution.width}px / 2)`};
  height: ${(props) => `calc(${props.resolution.height}px / 2)`};
`;

const Tablet = ({ resolution, contents }: TabletProps) => {
  return (
    <>
      <h3>
        Resolution {resolution.width} X {resolution.height}
      </h3>
      <TabletContainer resolution={resolution}>{contents}</TabletContainer>
    </>
  );
};

export default Tablet;
