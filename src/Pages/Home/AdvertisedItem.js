import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedItemCard from './AdvertisedItemCard';

const AdvertisedItem = () => {
    const { data: products = [], refetch, isLoading } = useQuery({

        queryKey: ['products'],
        queryFn: () => fetch(`http://localhost:5000/products`)
            .then(res => res.json())

    })

    if (isLoading) {
        <div className="radial-progress" style={{ "--value": 100 }}>100%</div>
    }
    return (
        <div>
            <h1 className='text-3xl mt-10'>Available Items</h1>
            <div >
                {
                    products.map(product => <AdvertisedItemCard key={product._id} product={product}></AdvertisedItemCard>)
                }
            </div>
        </div>
    );
};

export default AdvertisedItem;