import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CatalogPage />} />
      </Routes>
    </div>
  );
};

export default App;
