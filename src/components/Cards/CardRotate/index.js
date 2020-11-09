import React from 'react';
import classes from './classes.module.css';

export default function CardRotate({className, src, alt, title, text}) {
    return <div className={classes.container + ' ' + className}>
        <div className={classes.card}>
            <div className={classes.cardFront}>
                <h3>{title}</h3>
                <div className={classes.cardImg}>
                    <img src={src} alt={alt}/>
                </div>
            </div>
            <div className={classes.cardBack + ' ' + classes.cardEl}>
                <h3>{title}</h3>
                <p>
                    {text}
                </p>
            </div>
            <span className={classes.cardEl} style={{'--t': 1}}/>
            <span className={classes.cardEl} style={{'--t': 2}}/>
            <span className={classes.cardEl} style={{'--t': 3}}/>
            <span className={classes.cardEl} style={{'--t': 4}}/>
        </div>
    </div>
}