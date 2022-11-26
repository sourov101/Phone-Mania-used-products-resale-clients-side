import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const url = 'http://localhost:5000/products';

    const { data: myProducts = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handelDelete = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',

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
    return (
        <div>
            <h3 className="text-3xl mb-5">My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th></th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((myProduct, i) => <React.Fragment key={myProduct._id}>
                                {
                                    myProduct?.email === user?.email &&
                                    <tr>
                                        <th>{i + 1}</th>
                                        <td><div className="avatar">
                                            <div className="w-24 mask mask-squircle">
                                                <img src={myProduct?.image} alt='' />
                                            </div>
                                        </div>
                                        </td>
                                        <td>{myProduct.name}</td>
                                        <td>{myProduct.resalePrice}</td>
                                        <td>{myProduct.availability}</td>

                                        <td>
                                            <button onClick={() => handelDelete(myProduct._id)} className='btn btn-error btn-sm'>DELETE</button>

                                        </td>
                                        <td>
                                            {myProduct.availability === 'available' &&
                                                <button className='btn btn-info btn-sm'>Advertise</button>
                                            }

                                        </td>
                                    </tr>

                                }

                            </React.Fragment>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;