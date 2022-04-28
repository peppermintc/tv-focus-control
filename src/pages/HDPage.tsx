import { useState } from "react";
import styled from "styled-components";
import Contents from "../components/contents/Contents";
import Remote from "../components/hardware/Remote";
import TV from "../components/hardware/TV";

export interface FocusPosition {
  row: number;
  column: number;
}

export const HEADER_ROW = 0;
export const BODY_ROW = 1;
export const FOOTER_ROW = 2;

const VALUE_ARRAY = [
  ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
  ["Content 1", "Content 2", "Content 3", "Content 4", "Content 5"],
  ["Footer 1", "Footer 2"],
];

const HDPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HDPage = () => {
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

  return (
    <HDPageContainer>
      <TV
        resolution={{ width: 1280, height: 720 }}
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
    </HDPageContainer>
  );
};

export default HDPage;
