import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider-context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SIgnUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const signUpUser = result.user;
                console.log(signUpUser);

                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        reset();

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${signUpUser.displayName}, thank you for signUp`,
                            showConfirmButton: false,
                            timer: 1500
                        });

                        logout()
                        .then(() => {
                            navigate('/login');
                        })
                    })
            })
            .catch(errors => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${errors}, thank you for signUp`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }

    return (
        <div>
            <Helmet>
                <title>TechNex | SignUp</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row max-w-[850px] mx-auto">
                    <div className="text-center lg:text-left w-1/3">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                    </div>
                    <div className="card shrink-0 flex-1 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="flex gap-5 w-full">
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        placeholder="name"
                                        {...register('name', { required: true })}
                                        name="name"
                                        className="input input-bordered w-full" />
                                    {errors.name && <span className="text-red-700 mt-2">Name is required</span>}
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Bank Account Number</span>
                                    </label>
                                    <input type="text"
                                        placeholder="bank account number"
                                        {...register('bNumber', { required: true })}
                                        name="bNumber"
                                        className="input input-bordered w-full" />
                                    {errors.bNumber && <span className="text-red-700 mt-2">Bank Number is required</span>}
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Salary</span>
                                    </label>
                                    <input type="number"
                                        placeholder="10000...."
                                        min={0}
                                        {...register('salary', { required: true })}
                                        name="salary"
                                        className="input input-bordered" />
                                    {errors.salary && <span className="text-red-700 mt-2">Salary Info is required</span>}
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Designation</span>
                                    </label>
                                    <input type="text"
                                        placeholder="designation"
                                        {...register('designation', { required: true })}
                                        name="designation"
                                        className="input input-bordered" />
                                    {errors.designation && <span className="text-red-700 mt-2">Designation is required</span>}
                                </div>
                            </div>
                            <div className="flex gap-5 w-full">
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="url"
                                        placeholder="photo url"
                                        {...register('photo', { required: true })}
                                        name="photo"
                                        className="input input-bordered" />
                                    {errors.photo && <span className="text-red-700 mt-2">Photo URL is required</span>}
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text">Role</span>
                                    </label>
                                    <select className="input input-bordered" {...register("role")}>
                                        <option value="employee">Employee</option>
                                        <option value="hr">Human Resource Executive(HR)</option>
                                    </select>
                                    {errors.role && <span className="text-red-700 mt-2">Role is required</span>}
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    {...register('email', { required: true })}
                                    className="input input-bordered" />
                                {errors.email && <span className="text-red-700 mt-2">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-700 mt-2">Password is required</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-700 mt-2">Password must be one upper case, one lower case, one digit and one special character</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-700 mt-2">Password must be 6 characters</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-700 mt-2">Password must be less then 20 characters</p>
                                )}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <input className="btn btn-primary" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p className='text-center mb-3'>Already have an account!! please <span className='text-blue-700 font-semibold'><Link to='/login'>login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIgnUp;