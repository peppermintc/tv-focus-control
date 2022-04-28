import HDPage from "./pages/HDPage";
import FHDPage from "./pages/FHDPage";
import QHDPage from "./pages/QHDPage";
import IPad6Page from "./pages/IPad6Page";
import IPhoneSEPage from "./pages/IPhoneSEPage";
import { Navigate, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/common/NavigationBar";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/hd" />} />
        <Route path="/hd" element={<HDPage />} />
        <Route path="/fhd" element={<FHDPage />} />
        <Route path="/qhd" element={<QHDPage />} />
        <Route path="/iphone" element={<IPhoneSEPage />} />
        <Route path="/ipad" element={<IPad6Page />} />
      </Routes>
    </>
  );
};

export default App;
