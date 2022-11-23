import React from 'react';
import { Link } from 'react-router-dom';

const Catagories = () => {
    const brands = [
        {
            id: 1,
            image: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png',

        },
        {
            id: 2,
            image: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',

        },
        {
            id: 3,
            image: 'https://www.oneplus.com/content/dam/oasis/page/common/logo/OnePlus_Logo.png',

        },]
    return (
        <div>
            <h1 className='text-5xl mt-10'>Catagories</h1>

            <div className='grid my-10 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    brands.map(brand =>
                        <Link to={`/product/${brand.id}`}><div key={brand.id} className="card bg-base-100 shadow-xl">
                            <figure><img className='w-1/2 h-32' src={brand.image} alt="Shoes" /></figure>

                        </div></Link>
                    )
                }
            </div>
        </div>
    );
};

export default Catagories;