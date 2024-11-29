import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={"Merhaba dünya"} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
