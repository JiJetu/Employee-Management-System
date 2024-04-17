import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider-context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const [disable, setDisable] = useState(true);
    const {logIn} = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }

    const handleCaptcha = e => {
        const captchaText = e.target.value;
        console.log(captchaText);

        if (validateCaptcha(captchaText)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }
    }

    return (
        <div>
            <Helmet>
                <title>TechNex | LogIn</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse max-w-[800px] mx-auto">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text"
                                    onBlur={handleCaptcha}
                                    placeholder="type the text above"
                                    name="captcha" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disable} className="btn btn-primary" type="submit">Login</button>
                            </div>
                        </form>
                        <p className='text-center mb-3'>New here? <span className='text-blue-700 font-semibold'><Link to='/signUp'>create an account</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;