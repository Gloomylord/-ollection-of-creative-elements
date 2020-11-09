import React, {useRef, useState, useCallback, useEffect} from 'react';
import classes from './classes.module.css';

export default function ButtonWave({children, className, ...rest}) {

    const button = useRef(null);
    const [size, setSize] = useState(null);
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        const {width} = button.current.getBoundingClientRect();
        setSize(width * 3);
    }, []);

    const onEnter = useCallback((e) => {
        const {left, top} = button.current.getBoundingClientRect();
        setLeft(e.clientX - left);
        setTop(e.clientY - top);
    }, []);

    const onLeave = useCallback((e) => {
        const {left, top} = button.current.getBoundingClientRect();
        setLeft(e.clientX - left);
        setTop(e.clientY - top);
    }, []);

    return <button onMouseEnter={onEnter}
                   onMouseLeave={onLeave}
                   ref={button}
                   style={{
                       '--size': size + 'px',
                       '--left': left + 'px',
                       '--top': top + 'px'
                   }}
                   {...rest}
                   className={classes.button + ' ' + className}>
        <span/>
        <span>
            {children}
        </span>
    </button>
}