import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./SharedLayout/SharedLayout";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";

export const App = () => {
  return (
    <SharedLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId/*' element={<MovieDetails />} />
      </Routes>
    </SharedLayout>
  );
};
