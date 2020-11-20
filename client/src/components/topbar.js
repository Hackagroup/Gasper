// Author : Amanuel

import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GasperIco from '../static/GasperG.svg'


// Styles used for the top bar
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "white",
        fontFamily: 'Museo Slab',
        fontSize: 40
    },
}));


// Top Bar REACT Component
// which uses above style for text
export const Bar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton edge="start" aria-label="menu">
                    <img src={GasperIco} height={30} width={30} alt="left_ico"/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Gasper
                </Typography>
            </Toolbar>
        </AppBar>
    )
}