import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import AiChat from "./pages/AiChat";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AiChat />} />
      </Routes>
    </BrowserRouter>
  );
};
