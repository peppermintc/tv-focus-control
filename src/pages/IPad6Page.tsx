import { useEffect, useState } from "react";
import styled from "styled-components";
import Contents from "../components/contents/Contents";
import Remote from "../components/hardware/Remote";
import Tablet from "../components/hardware/Tablet";
import { FocusPosition } from "../interfaces";

interface IPad6PageProps {
  valueArray: string[][];
}

const IPad6Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IPad6Page = ({ valueArray }: IPad6PageProps) => {
  const [currentFocus, setCurrentFocus] = useState<FocusPosition>({
    row: 0,
    column: 0,
  });

  const onUpClick = () => {
    if (currentFocus.row - 1 < 0) return;

    setCurrentFocus({
      ...currentFocus,
      row: currentFocus.row - 1,
    });
  };

  const onRightClick = () => {
    if (currentFocus.column + 1 > valueArray[currentFocus.row].length - 1)
      return;

    setCurrentFocus({
      ...currentFocus,
      column: currentFocus.column + 1,
    });
  };

  const onDownClick = () => {
    if (currentFocus.row + 1 > valueArray.length - 1) return;

    setCurrentFocus({
      ...currentFocus,
      row: currentFocus.row + 1,
    });
  };

  const onLeftClick = () => {
    if (currentFocus.column - 1 < 0) return;

    setCurrentFocus({
      ...currentFocus,
      column: currentFocus.column - 1,
    });
  };

  useEffect(() => {
    const resetFocusOnChangeRow = () => {
      setCurrentFocus({
        ...currentFocus,
        column: 0,
      });
    };
    resetFocusOnChangeRow();
  }, [currentFocus.row, valueArray]);

  return (
    <IPad6Container>
      <h2>IPad 6</h2>
      <Tablet
        resolution={{ width: 2048, height: 1536 }}
        contents={
          <Contents valueArray={valueArray} currentFocus={currentFocus} />
        }
      />
      <Remote
        onUpClick={onUpClick}
        onRightClick={onRightClick}
        onDownClick={onDownClick}
        onLeftClick={onLeftClick}
      />
    </IPad6Container>
  );
};

export default IPad6Page;
