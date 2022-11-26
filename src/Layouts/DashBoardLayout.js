import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Pages/Navbar/Navbar';

const DashBoardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashboard">My Orders</Link></li>
                        {isAdmin && <>

                            <li><Link to="/dashboard/allusers">All Buyers</Link></li>
                            <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                            <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                        </>}

                        <li><Link to="/dashboard/addproduct">Add A Product</Link></li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoardLayout;