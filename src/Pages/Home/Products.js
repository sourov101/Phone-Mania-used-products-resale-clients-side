
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners';
import { AuthContext } from '../../context/AuthProvider';
import ProductCard from './ProductCard';

const Products = () => {
    const products = useLoaderData();

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <PacmanLoader className='mx-auto mt-10'></PacmanLoader>

    }

    return (
        <div >
            <div className='grid my-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    products.map(product => <React.Fragment key={product._id}>
                        {
                            product.paid !== true && <ProductCard product={product}></ProductCard>
                        }
                    </React.Fragment>
                    )}


            </div>

        </div>
    );
};

export default Products;