import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';

const AllSellers = () => {

    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            console.log(data);
            return data;
        }
    })

    const handelAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Admin confirmed')
                    refetch();
                }
            })
    }
    const handelVerify = id => {
        fetch(`http://localhost:5000/users/verify/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Verify confirmed')
                    refetch();
                }
            })
    }

    const handelDelete = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('Delete confirmed')
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <div className='mx-auto'><div className="radial-progress" style={{ "--value": 100 }}>100%</div></div>
    }


    return (
        <div>
            <h3 className="text-3xl mb-5">All Sellers</h3>
            <div className="overflow-x-auto">

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Verify</th>
                                <th>Delete</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <React.Fragment key={user._id}>
                                    {user.userType === 'Seller' &&
                                        <tr key={user._id}>
                                            <th>{i + 1}</th>

                                            <td className='flex'>{user.name} {
                                                user.verified === 'true' && <FaCheck className='text-primary mx-2' />
                                            }</td>
                                            <td>{user.email}</td>

                                            <td>
                                                {user.role !== 'admin' && <button onClick={() => handelAdmin(user._id)} className='btn btn-primary btn-sm'>Admin</button>}

                                            </td>
                                            <td>
                                                {user.verified !== 'true' &&
                                                    <button onClick={() => handelVerify(user._id)} className='btn btn-secondary btn-sm text-white'>Verify</button>}

                                            </td>
                                            <td>
                                                <button onClick={() => handelDelete(user._id)} className='btn btn-error btn-sm text-white'>Delete</button>

                                            </td>
                                        </tr>
                                    }
                                </React.Fragment>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSellers;