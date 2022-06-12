import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { fetchApi } from '../api/httpClient';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import SearchResultComponent from '../searchResults/SearchResultComponent';
import axios from "axios";

const SearchBarComponent = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const url = "https://jsonmock.hackerrank.com/api/movies";

    /** api call using axios within component start */
    const handleSubmitWithinComponentAxios = (e) => {
        e.preventDefault();
        getMoviesUsingAxios(search);
    };
    const getMoviesUsingAxios = (searchTerm) => {
        axios.get(`${url}?Year=${searchTerm}`)
            .then((response) => {
                console.log(response.data.data);
                setMovies(response.data.data);
            })
            .catch((error) => console.error(error))
    }
    /** api call using axios within component end */

    /**  api call using axios http file start*/
    const handleSubmitWithExternalAxios = async (e) => {
        e.preventDefault();
        const data = await fetchApi(search);
        setMovies(data.data.Search);
        console.log(data.data.Search);
    }
    /**  api call using axios http file end*/

    /**  api call using react fetch start*/
    const handleSubmitUsingFetch = (e) => {
        e.preventDefault();
        getMoviesUsingFetch(search);
        // using same component api call using axios
    };
    const getMoviesUsingFetch = (searchTerm) => {
        fetch(`${url}?Year=${searchTerm}`)
            .then(res => res.json())
            .then((result) => {
                console.log(result.data);
                setMovies(result.data);
            })
            .catch((error) => console.error(error));
    }
    /**  api call using react fetch end*/

    return (
        <Container maxWidth="xl" sx={{ p: '0px !important' }}>
            <Box sx={{
                mt: 3, '& .MuiTextField-root': { my: 1, width: '100%' },
            }} noValidate autoComplete="off">
                <Container>
                    <Typography variant="h4"> OMDb Movie Search UI </Typography>
                    <form onSubmit={handleSubmitWithExternalAxios}>
                        <div>
                            <TextField id="Search Movie" value={search} onChange={(e) => setSearch(e.target.value)} label="Search Movie" margin="normal" variant="outlined" />
                        </div>
                        <div>
                            <Box
                                m={1} //margin
                                display="flex"
                                justifyContent="flex-end"
                                alignItems="flex-end"

                            >
                                <Button variant="contained" type="submit" sx={{ height: 40 }}>
                                    Search
                                </Button>
                            </Box>
                        </div>
                    </form>
                </Container>
            </Box>
            {movies === undefined ? (
                <p>Data Loading</p>
            ) : (
                <SearchResultComponent result={movies}></SearchResultComponent>
            )}

        </Container>
    )
}

export default SearchBarComponent