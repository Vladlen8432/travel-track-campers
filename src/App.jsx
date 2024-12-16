import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import DetailsPage from "./pages/DetailsPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CatalogPage />} />
        <Route path="/campers/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
