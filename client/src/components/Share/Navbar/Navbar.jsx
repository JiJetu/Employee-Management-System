import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const activeLinkStyle = {
        color: 'red',
        fontWeight: 'bold',
        border: ''
      };

    const navbar = <>
        <li><NavLink to='/' className={({ isActive, isPending }) => isActive ? "px-5 py-2 border-b-2 border-red-700 rounded-xl" : isPending ? "pending" : "" }>Home</NavLink></li>

        <li><NavLink to='/contact' className={({ isActive, isPending }) => isActive ? "px-5 py-2 border-b-2 border-red-700 rounded-xl" : isPending ? "pending" : "" }>Contact Us</NavLink></li>

        <li><NavLink to='/dashboard' className={({ isActive, isPending }) => isActive ? "px-5 py-2 border-b-2 border-red-700 rounded-xl" : isPending ? "pending" : "" }>Dashboard</NavLink></li>
    </>
    return (
        <div className="w-full text-white">
            <div className="navbar max-w-[1000px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbar}
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-serif font-semibold">TechNex Solutions</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-serif">
                        {navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="px-5 py-2 border-2 border-red-700 rounded-xl hover:bg-red-700">LogIn</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;