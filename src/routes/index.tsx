import { lazy } from "react";
import HomeLayout from "@/layouts/HomeLayout";
import { userAuth } from "@/store/authAtom";
import { Layout } from "antd";
import { useAtom } from "jotai";
import { Navigate, Route, Routes } from "react-router-dom";

const Auth = lazy(() => import("@/pages/Auth"));
const Home = lazy(() => import("@/pages/Home"));
const AppHeader = lazy(() => import("@/components/AppHeader"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const AppRouter = () => {
  const [isLoggedIn] = useAtom(userAuth);

  return (
    <Layout style={{ height: "100vh" }}>
      <Layout className="site-layout">
        <AppHeader />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <HomeLayout /> : <Navigate to="login" />}
          >
            <Route index element={<Home />} />
          </Route>
          <Route
            path="/"
            element={!isLoggedIn ? <Auth /> : <Navigate to="/" />}
          >
            <Route path="login" element={<Auth />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Route>
          <Route
            path="/*"
            element={isLoggedIn ? <NotFound /> : <Navigate to="/login" />}
          />
        </Routes>
      </Layout>
    </Layout>
  );
};

export default AppRouter;
