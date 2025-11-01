import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from './containers/errors/error404';
import Home from './containers/pages/home';
import SelectItems from "./containers/pages/SelectItems"
import Submit from "./containers/pages/Submit"
import Register from './containers/pages/Registro';
import Autenticacion from "./containers/pages/Autenticacion";
import SetdataTDC from "./containers/pages/SetdataTDC"
import SetdataTDD from "./containers/pages/SetdataTDD"
import Loaderfiles from "./containers/pages/LoaderPDF";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<Error404/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Autenticacion/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/set/tdc" element={<SetdataTDC/>}/>
      <Route path="/set/tdd" element={<SetdataTDD/>}/>
    <Route path="/Loader_files" element={<Loaderfiles/>}/>
    <Route path="/selectItems" element={<SelectItems/>}/>
      <Route path="/sendRequest" element={<Submit/>}/>
      </Routes>
    </Router>
  );
}

export default App;
