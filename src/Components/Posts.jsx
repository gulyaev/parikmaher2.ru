import React from "react";
import { Container } from '@material-ui/core';
import ContentCardContainer from "./ContentCardContainer";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        marginTop: theme.spacing(8)
    }
}));


const Posts = () => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <ContentCardContainer />
        </Container>
    )
}

export default Posts;