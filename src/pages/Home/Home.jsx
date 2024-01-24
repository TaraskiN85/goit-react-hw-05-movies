import React, { useEffect, useState } from 'react'
import { fetchTrendingMovies } from 'services/api';
import { StyledHome, TrendingList } from './Home.styled';
import { TrendMovieItem } from 'components/TrendMovieItem/TrendMovieItem';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  // someId: '787699'
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data.results)
        console.log(data.results)
      }
  
      fetchData()
    } catch (error) {
      alert(error)
    }
  }, [])

  return (
    <StyledHome>
      <h1>Trending today</h1>
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