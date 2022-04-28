import HDPage from "./pages/HDPage";
import FHDPage from "./pages/FHDPage";
import QHDPage from "./pages/QHDPage";
import IPad6Page from "./pages/IPad6Page";
import IPhoneSEPage from "./pages/IPhoneSEPage";
import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/common/NavigationBar";
import { useState } from "react";

export const HEADER_ROW = 0;
export const BODY_ROW = 1;
export const FOOTER_ROW = 2;

const VALUE_ARRAYS = [
  [
    ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
    ["Content 1", "Content 2", "Content 3", "Content 4", "Content 5"],
    ["Footer 1", "Footer 2"],
  ],
  [
    ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 6"],
    ["Content 1", "Content 2"],
    ["Footer 1", "Footer 2", "Footer3"],
  ],
  [
    ["Menu 1", "Menu 2", "Menu 3"],
    ["Content 1", "Content 2", "Content 3", "Content 4", "Content 5"],
    ["Footer 1", "Footer 2", "Footer 3", "Footer 4"],
  ],
];

const App = () => {
  const [valueArrayIndex, setValueArrayIndex] = useState<number>(0);
  const valueArray = VALUE_ARRAYS[valueArrayIndex];

  const changeValueArray = (newIndex: number) => setValueArrayIndex(newIndex);

  return (
    <>
      <NavigationBar changeValueArray={changeValueArray} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/hd" />} />
        <Route path="/hd" element={<HDPage valueArray={valueArray} />} />
        <Route path="/fhd" element={<FHDPage valueArray={valueArray} />} />
        <Route path="/qhd" element={<QHDPage valueArray={valueArray} />} />
        <Route
          path="/iphone"
          element={<IPhoneSEPage valueArray={valueArray} />}
        />
        <Route path="/ipad" element={<IPad6Page valueArray={valueArray} />} />
      </Routes>
    </>
  );
};

export default App;
