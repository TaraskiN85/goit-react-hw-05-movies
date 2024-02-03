import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import { TrendMovieItem } from 'components/TrendMovieItem/TrendMovieItem';

import { Loader } from 'helpers/Loader/Loader';
import { fetchTrendingMovies } from 'services/api';

import { StyledHome, TrendingList } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    try {
      setIsLoading(true)
      const fetchData = async () => {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data.results)
      }
 
      fetchData()
    } catch (error) {
      toast.error(error.message)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <StyledHome>
      <h1>Trending today</h1>
      {isLoading && <Loader/>}
      <TrendingList>
        {trendingMovies.length > 0 && trendingMovies.map(movieData => {
          return (
            <TrendMovieItem movieData={movieData} key={movieData.id}/>
          )
        })}
      </TrendingList>
    </StyledHome>
  )
}

export default Home