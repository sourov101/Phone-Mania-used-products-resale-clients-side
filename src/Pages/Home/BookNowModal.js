import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';

const BookNowModal = ({ book, setBook }) => {
    const { name, resalePrice, image } = book;
    const { user } = useContext(AuthContext);


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const meetingLocation = form.meetingLocation.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const productName = form.productName.value;
        const resalePrice = form.resalePrice.value;
        const booking = {


            user: name,
            meetingLocation,
            email,
            phone,
            productName,
            resalePrice,
            image

        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    setBook(null);
                }
                else {
                    toast.error(data.message);
                }
            })
    }



    return (
        <div>
            <>
                <input type="checkbox" id="booking-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">{name}</h3>
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                            <input type="text" name="productName" disabled value={name} className="input w-full input-bordered " />
                            <input type="text" name="resalePrice" disabled value={resalePrice} className="input w-full input-bordered " />

                            <input name="name" defaultValue={user?.displayName} readOnly disabled type="text" placeholder="Your Name" className="input w-full input-bordered" />
                            <input name="email" defaultValue={user?.email} readOnly disabled type="email" placeholder="Email Address" className="input w-full input-bordered" />
                            <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                            <input name="meetingLocation" type="text" placeholder="meeting location" className="input w-full input-bordered" />
                            <br />
                            <input className='btn btn-accent w-full' type="submit" value="Submit" />
                        </form>

                    </div>
                </div>
            </>
        </div>
    );
};

export default BookNowModal;