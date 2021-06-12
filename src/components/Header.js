import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

export default function Header ({setToDo}) {
    const classes = useStyles();

    const clear = () => {
        setToDo('')
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.bar}>
                    <Typography variant="h6">
                        Лучшие советы
                    </Typography>
                    <Button color="inherit" onClick={clear}>Сбросить советы</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

