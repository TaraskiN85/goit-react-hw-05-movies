import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";

import { Loader } from "helpers/Loader/Loader";

const Home = lazy(() => import('pages/Home/Home'))
const Movies = lazy(() => import('pages/Movies/Movies'))
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'))

export const App = () => {
  return (
    <SharedLayout>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId/*' element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </SharedLayout>
  );
};
