import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa';
import BookNowModal from './BookNowModal';


const ProductCard = ({ product }) => {
    const { name, image, resalePrice, originalPrice, yearOfUse, postTime, sellerName, location } = product;
    const [book, setBook] = useState(null);


    const handleReport = (productData) => {
        console.log(productData);
        fetch('https://phone-mania-server-sourov101.vercel.app/reported/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {

                    toast.success('report confirmed')
                }
                console.log(data);
            })
    }


    return (
        <div className='mx-auto '>
            <div className="card bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>Resale Price: {resalePrice}</p>
                    <p>Original Price: {originalPrice}</p>
                    <p>Year Of Use: {yearOfUse}</p>
                    <p>Post Time: {postTime}</p>


                    <p className='flex justify-between'>Seller Name: {sellerName}{
                        product.verified === 'true' && <FaCheck className='text-primary mx-2' />
                    }</p>


                    <p>Location: {location}</p>
                </div>
                <div className='text-center my-4'>

                    <label

                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setBook(product)}
                    >Book Now
                    </label>

                </div>
                <div className='text-center my-4'>

                    <label
                        className="btn btn-xs btn-error text-white"
                        onClick={() => handleReport(product)}
                    >Report Product
                    </label>

                </div>
                <div>
                    {book &&


                        <BookNowModal
                            book={book}
                            setBook={setBook}
                        >

                        </BookNowModal>}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;