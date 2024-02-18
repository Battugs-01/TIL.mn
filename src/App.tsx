import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/index";
import "./styles/index.css";
import "./styles/tailwind.css";
import "./styles/color.css";
import "./styles/font.css";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
