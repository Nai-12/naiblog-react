import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// List Pages
import { Layout } from "./pages/layout";
import { PageSport } from "./pages/pageSport";
import { PageTech } from "./pages/pageTech";
import { PageOtomotif } from "./pages/pageOtomotif";
import { PageDunia } from "./pages/pageDunia";
const MainPage = React.lazy(() => import("./components/MainPage"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense
                fallback={
                  <span className=" flex justify-center items-center text-center h-[100vh]">
                    {" "}
                    Memuat guys..{" "}
                  </span>
                }
              >
                <MainPage />
              </Suspense>
            }
          />
          <Route path="/sport" element={<PageSport />} />
          <Route path="/tech" element={<PageTech />} />
          <Route path="/otomotif" element={<PageOtomotif />} />
          <Route path="/dunia" element={<PageDunia />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
