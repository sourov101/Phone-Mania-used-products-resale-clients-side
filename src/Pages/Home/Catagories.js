import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Catagories = () => {
    const [brands, setBrands] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/brands')
            .then(data => {

                const brandData = data.data;

                setBrands(brandData);
                setLoading(false);
            })

    }, [])
    if (loading) {
        <div className="radial-progress" style={{ "--value": 100 }}>100%</div>
    }
    return (
        <div>
            <h1 className='text-3xl mt-10'>Catagories </h1>

            <div className='grid my-10 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    brands.map(brand =>

                        <Link to={`/product/${brand.BrandId}`} key={brand._id}>
                            <div className="card bg-base-100 shadow-xl">
                                <figure><img className='w-1/2 h-32' src={brand.image} alt="Shoes" />
                                </figure>

                            </div>
                        </Link>
                    )
                }
            </div>
        </div >
    );
};

export default Catagories;