import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Hero from './IntroScreen'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/music" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
