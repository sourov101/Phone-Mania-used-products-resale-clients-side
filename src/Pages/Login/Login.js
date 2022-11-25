import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login.jpg'
import { AuthContext } from '../../context/AuthProvider';
import useAccessToken from '../../hooks/useAccessToken';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserMail, setLoginUserMail] = useState('');
    const [accessToken] = useAccessToken(loginUserMail);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (accessToken) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserMail(data.email)

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <img src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2  shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold mt-6 text-center">Login now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Email</span></label>
                                <input type="text"
                                    {...register("email", {
                                        required: "Email Address is required"
                                    })}
                                    className="input input-bordered w-full " />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full ">
                                <label className="label"> <span className="label-text">Password</span></label>
                                <input type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                                    })}
                                    className="input input-bordered w-full " />
                                <label className="label"> <span className="label-text">Forget Password?</span></label>
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            </div>
                            <input className='btn btn-accent w-full' value="Login" type="submit" />
                            <div>
                                {loginError && <p className='text-red-600'>{loginError}</p>}
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Login;