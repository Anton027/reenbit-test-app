import { lazy,Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";
import { GlobalStyle } from "./GlobalStyle";

const Home = lazy(() => import('../pages/Home/Home'));
const Character = lazy(() => import('../pages/Character/Character'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Character />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <GlobalStyle />
    </Suspense>
  );
};
