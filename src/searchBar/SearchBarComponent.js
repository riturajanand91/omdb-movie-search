import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { fetchApi } from '../api/httpClient';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import SearchResultComponent from '../searchResults/SearchResultComponent';

const SearchBarComponent = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = await fetchApi(search);
        setMovies(data.data.Search);
        // console.log(data.data.Search);
        // .then(res => {
        //     //do something
        //     console.log(res.data.search);
        //     setMovies(res.data.search);
        // })
        // .catch(err => {
        //     // catch error
        //     console.error(err);
        // });

    };
    return (
        <Container maxWidth="xl" sx={{ p: '0px !important' }}>
            <Box sx={{
                mt: 3, '& .MuiTextField-root': { my: 1, width: '100%' },
            }} noValidate autoComplete="off">
                <Container>
                    <Typography variant="h4"> OMDb Movie Search UI </Typography>
                    <form onSubmit={handleSubmit}>
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