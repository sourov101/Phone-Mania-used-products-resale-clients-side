import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import CheckOutForm from './CheckOutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

console.log(stripePromise);

const Payment = () => {
    const info = useLoaderData();
    const navigation = useNavigation();
    console.log('info', info);

    // const url = 'http://localhost:5000/products';

    // const { data: products = [], isLoading } = useQuery({
    //     queryKey: ['bookings'],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json();
    //         console.log(products);
    //         return data;
    //     }
    // })
    // if (isLoading) {
    //     return <PacmanLoader className='mx-auto mt-10'></PacmanLoader>

    // }



    if (navigation.state === 'loading') {
        <PacmanLoader></PacmanLoader>
    }
    return (
        <div className='ml-8'>
            <h3 className="text-3xl mt-10">Payment for {info.productName}</h3>
            <h3 className="text-xl mt-4">Pay ${info.resalePrice} to purchase the product</h3>

            <div className='w-96 my-10'>
                <Elements stripe={stripePromise}>


                    <CheckOutForm



                        info={info}
                    />

                </Elements>
            </div>
        </div>
    );
};

export default Payment;