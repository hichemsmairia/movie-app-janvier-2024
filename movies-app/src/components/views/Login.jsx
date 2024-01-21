import React, { useState } from 'react';
import styles from '../../styles/Login.module.css';
import { useDispatch } from 'react-redux';
import { signin } from '../../../redux/slices/authSlice'
const Login = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signin(user))
    };

    return (
        <div className={styles['login-container']}>
            <div className={styles['login-image']}>

                <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="Side" />
            </div>
            <div className={styles['login-form']}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles['form-group']}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            onChange={e => setUser({ ...user, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            onChange={e => setUser({ ...user, password: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
