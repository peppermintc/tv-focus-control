import HDPage from "./pages/HDPage";
import FHDPage from "./pages/FHDPage";
import QHDPage from "./pages/QHDPage";
import IPad6Page from "./pages/IPad6Page";
import IPhoneSEPage from "./pages/IPhoneSEPage";
import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/common/NavigationBar";
import { useState } from "react";
import { VALUE_ARRAYS } from "./data";

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
