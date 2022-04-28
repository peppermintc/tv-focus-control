import { useEffect, useState } from "react";
import styled from "styled-components";
import Contents from "../components/contents/Contents";
import Remote from "../components/hardware/Remote";
import Tablet from "../components/hardware/Tablet";
import { FocusPosition } from "../interfaces";

export const HEADER_ROW = 0;
export const BODY_ROW = 1;
export const FOOTER_ROW = 2;

const VALUE_ARRAY = [
  ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
  ["Content 1", "Content 2", "Content 3", "Content 4", "Content 5"],
  ["Footer 1", "Footer 2"],
];

const IPad6Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IPad6Page = () => {
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
    if (currentFocus.column + 1 > VALUE_ARRAY[currentFocus.row].length - 1)
      return;

    setCurrentFocus({
      ...currentFocus,
      column: currentFocus.column + 1,
    });
  };

  const onDownClick = () => {
    if (currentFocus.row + 1 > VALUE_ARRAY.length - 1) return;

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
  }, [currentFocus.row]);

  return (
    <IPad6Container>
      <h2>IPad 6</h2>
      <Tablet
        resolution={{ width: 2048, height: 1536 }}
        contents={
          <Contents valueArray={VALUE_ARRAY} currentFocus={currentFocus} />
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
