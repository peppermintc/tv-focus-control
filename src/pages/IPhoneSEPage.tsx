import { useEffect, useState } from "react";
import styled from "styled-components";
import Contents from "../components/contents/Contents";
import Mobile from "../components/hardware/Mobile";
import Remote from "../components/hardware/Remote";
import { FocusPosition } from "../interfaces";

interface IPhoneSEContainerProps {
  valueArray: string[][];
}

const IPhoneSEContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IPhoneSEPage = ({ valueArray }: IPhoneSEContainerProps) => {
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
    <IPhoneSEContainer>
      <h2>IPhone SE</h2>
      <Mobile
        resolution={{ width: 375, height: 667 }}
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
    </IPhoneSEContainer>
  );
};

export default IPhoneSEPage;
