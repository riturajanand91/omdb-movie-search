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
                    <Grid item key={movie.Year + Math.random()} xs={12} md={6} lg={4} >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                    </IconButton>
                                }
                                title={movie.Title}
                                subheader={movie.Year}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={movie.Poster}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
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




