import React from "react";
import {
  Navigate,
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import NavBarMenu from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import Leadership from "./pages/LeaderShip";
import LeaderDetail from "./pages/LeaderDetail";
import Banner from "./components/Banner";
import LoginPage from "./auth/Login";

import ReporterLayout from "./layout/ReporterLayout";
import HomeReporter from "./reporter/components/Home.reporter";
import MyArticles from "./reporter/pages/MyArticles";
import CreateArticle from "./reporter/pages/CreateArticle";
import Feedback from "./reporter/pages/Feedback";

import EICLayout from "./layout/EIC-Layout";
import ManageArticle from "./EditorInChief/pages/ManageArticle";
import ManageReporter from "./EditorInChief/pages/ManageReporter";
import AddReporter from "./EditorInChief/pages/AddReporter";
import RegisterPage from "./auth/Register";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isReporterRoute = location.pathname.startsWith("/reporter");
  const isEICRoute = location.pathname.startsWith("/editor");

  const showMainLayout = !isReporterRoute && !isEICRoute;

  return (
    <>
      {showMainLayout && (
        <>
          <Header />
          <NavBarMenu />
          <Banner />
        </>
      )}

      <Routes>
        {/* Public pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/article/:slugId" element={<ArticlePage />} />
        <Route path="/manage-leader" element={<Leadership />} />
        <Route path="/leader/:name" element={<LeaderDetail />} />

        {/* Reporter routes */}
        <Route path="/reporter" element={<ReporterLayout />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<HomeReporter />} />
          <Route path="my-articles" element={<MyArticles />} />
          <Route path="create-article" element={<CreateArticle />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>

        {/* Editor in Chief routes */}
        <Route path="/editor" element={<EICLayout />}>
          <Route index element={<Navigate to="review-articles" replace />} />
          <Route path="review-articles" element={<ManageArticle />} />
          <Route path="reporters" element={<ManageReporter />} />
          <Route path="add-reporter" element={<AddReporter />} />
          <Route path="manage-leader" element={<Leadership />} />
          <Route path="leader/:name" element={<LeaderDetail />} />
        </Route>
      </Routes>

      {showMainLayout && <Footer />}
    </>
  );
}

export default App;
