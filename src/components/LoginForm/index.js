import React, {useCallback, useState} from 'react';
import classes from './classes.module.css';

export default function LoginForm({closeModal}) {
    const close = useCallback((e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }, [closeModal]);

    const onSubmit = useCallback((e) => {
        e.preventDefault()
    }, []);

    const [formValues, setFormValues] = useState({});

    const onChange = useCallback((e) => {
        console.log(e.target.name, e.target.value, formValues);

        setFormValues({...formValues, [e.target.name]: e.target.value})
    }, [formValues]);

    return <div className={classes.modal} onClick={close}>
        <div className={classes.container}>
            <form onSubmit={onSubmit} className={classes.form}>
                <h3 className={classes.title}>Login Here</h3>
                <input
                    type='text'
                    name='username'
                    onChange={onChange}
                    required
                    placeholder='Username'
                    value={formValues.username || ''}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='password'
                    required
                    onChange={onChange}
                    value={formValues.password || ''}
                />
                <button type='submit'>Login</button>
                <p className={classes.forgotPassword}>Forgot Password ?&nbsp;
                    <a href='#' className={classes.link}>Click here</a>
                </p>
            </form>
        </div>
    </div>
}