import React from 'react';
import classes from './classes.module.css';

export default function GalleryCard({imgSrc}) {
    return <div className={classes.box}>
        <div className={classes.shadow}>
            <div className={classes.imgBx}>
                <img src={imgSrc} alt='image'/>
            </div>
            <div className={classes.content}>
                <h2>Image Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa esse quis
                    repudiandae rerum sapiente sunt!</p>
            </div>
        </div>
    </div>
}