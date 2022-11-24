import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();


    return (
        <div className='grid my-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;