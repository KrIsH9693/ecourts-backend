import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Scraper from "./pages/Scraper";
import AdminDashboard from "./pages/AdminDashboard";
import { ScraperProvider } from "./context/ScraperContext";

const App = () => {
  return (
    <ScraperProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Scraper />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ScraperProvider>
  );
};

export default App;
