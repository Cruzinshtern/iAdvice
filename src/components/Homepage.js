import {toDrink, toProceed, toPractice, yesOrNo} from "../utils/options";
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    homepage: {
        display: 'flex',
        flexDirection: 'column',
        height: '90vh'
    },
    button_bar: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '10rem'
    },
    display: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10rem'

    }
}));

export default function Homepage ({toDo, setToDo}) {
    const classes = useStyles();


    const handleChoice = (choice) => {
        const random = Math.floor(Math.random() * choice.length);
        setToDo(choice[random])
    }

    return (
        <div className={classes.homepage}>
            <div className={classes.button_bar}>
                <Button variant="contained" color="primary" onClick={() => handleChoice(toDrink)}>Что мне выпить?</Button>
                <Button variant="contained" color="primary" onClick={() => handleChoice(toProceed)}>Что мне делать?</Button>
                <Button variant="contained" color="primary" onClick={() => handleChoice(toPractice)}>Что делать с тренировкой?</Button>
                <Button variant="contained" color="primary" onClick={() => handleChoice(yesOrNo)}>Да или нет?</Button>
            </div>
            <div className={classes.display}>
                <h2>{toDo}</h2>
            </div>


        </div>
    )
}
