import React from 'react';
import classes from './classes.module.css';

export default function WaterButton({children,...rest}) {
    return <button {...rest} className={classes.button}>
        <span>{children}</span>
        <div className={classes.wave}/>
    </button>
}