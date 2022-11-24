import React from 'react';

const ProductCard = ({ product }) => {
    const { name, image, resalePrice, originalPrice, yearOfUse, postTime, sellerName, location } = product;
    return (
        <div className='mx-auto '>
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
            </div>
        </div>
    );
};

export default ProductCard;