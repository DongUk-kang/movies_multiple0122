        import React, {useState, useEffect} from 'react';
        import {Card} from "react-bootstrap";
        import axios from "axios";
        import styled from 'styled-components';
        import Video from "./Video";
        import Movie from "./Movie";

        const Container = styled.div`
          padding: 40px 30px;
          margin-bottom: 50px;
          margin-left: 50px;
        `
        const Title = styled.h1`
          font-size: 50;
          font-weight: 600;
        `
        const Grid = styled.div`
        margin-top: 25px; 
        display: grid;
          grid-template-columns: repeat(auto-fill, 300px);
          grid-gap: 25px;
        `

        const App = () => {

            const [trends, setTrends] = useState([])
            const [movies, setMovies] = useState([])
            const [tvs, setTvs] = useState([])
            const [loading, setLoading] = useState(true)

            const getData = async () => {
                return(
                    await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=8597e491ed6e80f0de12e349eb60ea6e')
                        // .then(aaa => console.log(aaa.data.results))
                        .then(aaa => {
                            setTrends(aaa.data.results)
                            setLoading(false)
                        })
                        .catch(err => console.log(err))
                )
            }

            const getDates = async () => {
                return(
                    await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
                        // .then(bbb => console.log(bbb.data.results))
                        .then(bbb => {
                            setMovies(bbb.data.results)
                            setLoading(false)
                        })
                        .catch(err => console.log(err))
                )
            }
            const getTvdb = async () => {
                return(
                    await axios.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1')
                         // .then(ccc => console.log(ccc.data.results))
                        .then(ccc => {
                            setTvs(ccc.data.results)
                        })
                        .catch(err => console.log(err))
                )
            }


            useEffect(() => {
                getData()
                getDates()
                getTvdb()
            }, [])

            return (
                <Container>
                    {loading ?
                        <div>
                            <hi>
                                loading ...
                            </hi>
                        </div>
                    :    (
                        <>
                            <div>
                                <Title> Trend </Title>
                                <Grid>
                                {trends.map(trend =>
                                    <>
                                        <Video
                                            title={trend.original_name ? trend.original_name : trend.original_title}
                                            overview={trend.overview}
                                            poster={trend.poster_path}
                                        />

                                        </>
                                )}
                                </Grid>
                            </div>
                            <div>
                                <Title> MOVIE </Title>
                                <Grid>
                                    {movies.map(movie =>
                                        <>
                                            <Movie
                                                moviename={movie.title}
                                                overview={movie.overview}
                                                posters={movie.poster_path}
                                            />
                                        </>
                                    )}
                                </Grid>
                            </div>
                            <div>
                                <Title> TV On Air</Title>
                                <Grid>
                                    {tvs.map(tv =>
                                        <>
                                            <Video
                                                title={tv.name}
                                                overview={tv.overview}
                                                poster={tv.poster_path}
                                            />
                                        </>
                                    )}
                                </Grid>

                            </div>
                        </>

                        )
                    }

                </Container>

            );
        };

        export default App;
