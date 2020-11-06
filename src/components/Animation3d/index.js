import React, {useState, useCallback} from 'react';
import classes from './classes.module.css';

const defaultValues = ['creative', '3d', 'animation', 'for fun'];

export default function Animation3d() {
    const [animationPlay, setAnimationPlay] = useState(true);

    const onBlur = useCallback(() => {
        setAnimationPlay(true);
    }, []);

    const onFocus = useCallback(() => {
        setAnimationPlay(false)
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes.rotateContainer + ' ' + classes[animationPlay ? 'play' : 'pause']}>
                <div className={classes.inputsContainer}>
                    {defaultValues.map((defaultValue, i) => {
                        return <div className={classes.side} key={i}>
                            <input
                                onFocus={onFocus}
                                onBlur={onBlur}
                                defaultValue={defaultValue}
                            />
                            <div className={classes.decoration}>
                                <span/>
                                <span/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
