import React from 'react';
import classes from './classes.module.css';

export default function Butterfly() {
    return <section className={classes.container}>
        <div
            className={classes.grass}
            style={{
                background: 'url(lug.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        />
        <div className={classes.butterflyContainer}>
            <div>
                <div className={classes.butterfly}>
                    <div
                        className={classes.leftWing}
                        style={{
                            background: 'url(leftwing.png)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                    <div
                        className={classes.rightWing}
                        style={{
                            background: 'url(rightwing.png)',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}
                    />
                </div>
            </div>
        </div>
    </section>
}