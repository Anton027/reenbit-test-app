import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";

const Home = lazy(() => import('../pages/Home/Home'));
const Character = lazy(() => import('../pages/Character/Character'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const App = () => {
  return (
    <>
    <Routes>
      <Route index path="/" element={<Home />}></Route>
      <Route path="/:id" element={<Character />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
      <GlobalStyle />
    </>
  );
};
