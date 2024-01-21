import React, { useState, useTransition } from 'react';
import styles from '../../styles/Login.module.css';
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { signup } from '../../../redux/slices/authSlice'

const Register = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        console.log(user)
        e.preventDefault();
        dispatch(signup(user))

    };

    return (
        <div className={styles['login-container']}>
            <ToastContainer />
            <div className={styles['login-image']}>

                <img src="https://www.allen.ac.in/ace2324/assets/images/register.png" alt="Side" />
            </div>
            <div className={styles['login-form']}>
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles['form-group']}>
                        <label>Nom:</label>
                        <input
                            type="text"
                            onChange={e => setUser({ ...user, name: e.target.value })}
                            required
                        />


                        <label>Email:</label>
                        <input
                            type="email"
                            onChange={e => setUser({ ...user, email: e.target.value })}

                        />
                    </div>
                    <div className={styles['form-group']}>
                        <label>Password:</label>
                        <input
                            type="password"
                            onChange={e => setUser({ ...user, password: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
