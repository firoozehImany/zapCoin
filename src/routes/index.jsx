import { BrowserRouter, Routes, Route } from "react-router";
import { lazy } from "react";
import MainLayout from "../layout/mainLayout";
import AuthLayout from "../layout/authLayout.jsx";
const HomePage = lazy(() => import("../pages/HomePage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const Login = lazy(() => import("../pages/LoginPage"));
const Register = lazy(() => import("../pages/RegisterPage"));
const ExchangesPage = lazy(() => import("../pages/ExchangesPage"));
const AssetPage = lazy(() => import("../pages/SingleAssetPage.jsx"));
const ExchangePage = lazy(() => import("../pages/SingleExchangePage.jsx"));

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/exchanges" element={<ExchangesPage />} />
          <Route path="/assets/:id" element={<AssetPage />} />
          <Route path="/exchanges/:id" element={<ExchangePage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
