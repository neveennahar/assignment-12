import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";



const BookModal = ({ information, setInformation }) => {
    const { _id, product_name, selling_Price, product_image } = information;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const phoneNo = form.phone.value;
        const meetupLocation = form.location.value;

        const bookingInfo = {
            product_image: product_image,
            title: product_name,
            price: selling_Price,
            buyer_email: user.email,
            buyer_phoneNo: phoneNo,
            buyer_meetupLocation: meetupLocation,
        };
        fetch(`https://recycled-books-server.vercel.app/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
            },
            body: JSON.stringify(bookingInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.acknowledged) {
                    setInformation(null);
                    toast.success('Booking confirmed');
                    navigate("/");
                    // refetch();
                }
                else {
                    toast.error(data.message);
                }
                // fetch(`https://laptop-bikroy-server.vercel.app/laptops/${_id}`, {
                //     method: "PUT",
                //     headers: {
                //         authorization: `bearer ${localStorage.getItem("accessToken")}`,
                //     },
                // })
                //     .then((res) => res.json())
                //     .then((data) => {
                // if (data.modifiedCount > 0) {
                //     form.reset();
                //     toast.success("Product Booked");
                //     navigate("/");
                // }
                // });
            });
    };
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => {
                            setInformation(null);
                        }}
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">{ }</h3>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 mt-10"
                    >
                        <input
                            name="name"
                            type="text"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Your Name"
                            className="input w-full input-bordered"
                        />
                        <input
                            name="email"
                            type="email"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Email Address"
                            className="input w-full input-bordered"
                        />
                        <input
                            name="Title"
                            type="text"
                            defaultValue={product_name}
                            disabled
                            placeholder="Product Title"
                            className="input w-full input-bordered"
                        />
                        <input
                            name="resale_price"
                            type="text"
                            defaultValue={selling_Price}
                            disabled
                            placeholder="Resale Price"
                            className="input w-full input-bordered"
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            className="input w-full input-bordered"
                            required
                        />
                        <input
                            name="location"
                            type="text"
                            placeholder="Meetup Location"
                            className="input w-full input-bordered"
                        />
                        <br />
                        <input
                            htmlFor="booking-modal"
                            className="btn btn-primary w-full"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookModal;
