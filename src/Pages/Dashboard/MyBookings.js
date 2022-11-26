import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookedItems = [], refetch } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl mb-5">My Ordered Items</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th></th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookedItems.map((Item, i) => <tr key={Item._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 mask mask-squircle">
                                        <img src={Item?.image} alt='' />
                                    </div>
                                </div>
                                </td>
                                <td>{Item.productName}</td>
                                <td>{Item.resalePrice}</td>

                                <td>
                                    {Item.resalePrice && !Item.paid && <Link to={`/dashboard/payment/${Item._id}`}><button className='btn btn-info btn-sm'>pay</button></Link>}
                                    {
                                        Item.price && Item.paid && <span className='text-primary'>paid</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;