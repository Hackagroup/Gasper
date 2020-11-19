import React from "react";
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GasperIco from '../static/GasperG.svg'

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
        //fontStyle: 'normal',
        fontSize: 40
    },
}));

//export const Main = () => {
export const Bar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" >
            <Toolbar>
                <IconButton edge="start" aria-label="menu">
                    <img src={GasperIco} height={30} width={30} />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Gasper
                </Typography>
            </Toolbar>
        </AppBar>
    )
}