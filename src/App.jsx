import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.tsx";
import AgreementPage from "./pages/AgreementPage/AgreementPage.tsx";
import LayoutPage from "./pages/LayoutPage/LayoutPage.tsx";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.tsx";
import NoPage from "./pages/NoPage/NoPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="contract" element={<AgreementPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
