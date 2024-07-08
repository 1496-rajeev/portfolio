import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ABOUT_PATH, HOME_PATH } from "./constants";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
import { AppContext } from "./store";
import { useState } from "react";

export default function AppRoutes() {
  const [value, setValue] = useState<string>(HOME_PATH);
  return (
    <AppContext.Provider value={{ value, setValue }}>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path={HOME_PATH} element={<HomePage />} />
          <Route path={ABOUT_PATH} element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
