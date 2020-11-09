import React, {useRef, useState, useCallback, useEffect} from 'react';
import classes from './classes.module.css';

export default function NavBar() {
    const [scrollbarWidth, setScrollbarWidth] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        let el = ref.current;
        el.style.overflow = 'scroll';
        setScrollbarWidth(el.offsetWidth - el.clientWidth);
        el.style.overflow = '';
    }, []);

    const toggle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);


    return <div ref={ref} className={classes.container} style={{'--scroll-width': scrollbarWidth}}>
        <div className={classes.content}>
            <div className={classes.logo}>
                {Array.from({length: 4}).map((_, i) => <span style={{'--delay': i}} key={i}/>)}
            </div>
            <nav>
                <ul className={classes.list + ' ' + ((isOpen) ? classes.open : '')}>
                    <li className={classes.link}>
                        <a href='#login_form' onClick={close}>form</a>
                    </li>
                    <li className={classes.link}>
                        <a href='#buttons' onClick={close}>buttons</a>
                    </li>
                    <li className={classes.link}>
                        <a href='#3d_inputs' onClick={close}>3d&nbsp;inputs</a>
                    </li>
                    <li className={classes.link}>
                        <a href='#gallery' onClick={close}>gallery</a>
                    </li>
                    <li className={classes.link}>
                        <a href='#cards' onClick={close}>cards</a>
                    </li>
                    <li className={classes.link}>
                        <a href='#butterfly' onClick={close}>butterfly</a>
                    </li>
                </ul>
            </nav>
            <div onClick={toggle} className={classes.hamburger + ' ' + ((isOpen) ? classes.active : '')}>
                <span/>
            </div>
        </div>
    </div>
}