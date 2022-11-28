import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import AdvertisedItemCard from './AdvertisedItemCard';
import { PacmanLoader } from 'react-spinners';
const AdvertisedItem = () => {
    const [book, setBook] = useState(null);
    const { data: products = [], refetch, isLoading } = useQuery({

        queryKey: ['products'],
        queryFn: () => fetch(`https://phone-mania-server-sourov101.vercel.app/products`)
            .then(res => res.json())

    })


    console.log(products)
    if (isLoading) {
        return <PacmanLoader className='mx-auto mt-10'></PacmanLoader>
    }
    return (
        <div >
            {products.length !== 0 &&
                <h1 className='text-3xl mt-10 text-center'>Advertised Items</h1>
            }
            <div className='grid my-8 gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                {
                    products.map(product => <React.Fragment key={product._id}>
                        {
                            product.availability === 'available' && product.paid !== true && product.advertise === 'advertise' && < AdvertisedItemCard product={product}
                                setBook={setBook}></AdvertisedItemCard>
                        }
                    </React.Fragment>)
                }

            </div>
        </div >
    );
};

export default AdvertisedItem;