import React from 'react';
import classes from './classes.module.css';
import GalleryCard from "./GalleryCard";

const arr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];

export default function Gallery() {
    return <section className={classes.main}>
        <div className={classes.container}>
            {
                arr.map((src, i) => <GalleryCard key={i} imgSrc={src}/>
                )
            }
        </div>
    </section>
}
