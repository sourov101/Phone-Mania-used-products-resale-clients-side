import React from 'react';

const AdvertisedItemCard = ({ product }) => {
    const { name, image, resalePrice, originalPrice, yearOfUse, postTime, sellerName, location } = product;
    return (
        <div >


            {
                product.availability === 'available' &&

                <div >

                    <div className='mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                        <div className="card w-96 bg-base-100 shadow-xl ">
                            <figure className="px-10 pt-10">
                                <img src={image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{name}</h2>
                                <p>Resale Price: {resalePrice}</p>
                                <p>Original Price: {originalPrice}</p>
                                <p>Year Of Use: {yearOfUse}</p>
                                <p>Post Time: {postTime}</p>
                                <p>Seller Name: {sellerName}</p>
                                <p>Location: {location}</p>
                            </div>
                            <div className='text-center my-4'>
                                <button className='btn btn-primary'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            }



        </div>
    );
};

export default AdvertisedItemCard;