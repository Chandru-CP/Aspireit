import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Review from "./components/pages/review";
import Preview from "./components/pages/preview";
import Benefits from "./components/pages/benifits";
import Salary from "./components/pages/salary";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Review />} />
          <Route path="preview" element={<Preview />} />
          <Route path="benefits" element={<Benefits />} />
          <Route path="*" element={<Salary />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);