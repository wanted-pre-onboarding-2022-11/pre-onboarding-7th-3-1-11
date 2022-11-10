import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "@/routes/routesPath";
import Main from "@/pages/Main";
import NotFound from "@/pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATH.MAIN} element={<Main />} />
      <Route path={ROUTE_PATH.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
