import React from 'react';
import classes from './classes.module.css';

export default function ButtonSquares({children, className, ...rest}) {
    return <div className={classes.container}>
        <button className={classes.button + ' ' + className}>
            {children}
        </button>
        <span className={classes.square}/>
        <span className={classes.square}/>
    </div>
}