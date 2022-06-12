import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box, Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from '@mui/material/Grid';


const SearchResultComponent = (props) => {

    return (
        <Container sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                {props.result.map(movie => (
                    <Grid item key={movie.imdbID} xs={12} md={6} lg={4} >
                        <Card sx={{ maxWidth: 345 }}>
                            {/* <CardHeader
                                // title={movie.Title}
                                subheader={movie.Year}
                            /> */}
                            <CardMedia
                                component="img"
                                height="194"
                                image={movie.Poster}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {movie.Title} / {movie.Year}
                                </Typography>
                            </CardContent>
                        </Card>
                        <br />
                    </Grid>
                ))
                }
            </Grid >
        </Container>

    );
}
export default SearchResultComponent




