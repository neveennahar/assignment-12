import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BooksCard = ({ book, setInformation }) => {
    const { user } = useContext(AuthContext);
    const { product_name,
        posted_time,
        product_image,
        location,
        mobile_number,
        selling_Price,
        original_price,
        seller_name,
        year_of_uses,
        status } = book;
    console.log(book)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={product_image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product_name.slice(0, 20)}</h2>
                {/* <p>Author: {author.name}</p> */}
                {/* <p>{details}.slice(1,100)</p> */}
                <p>Original Price: {original_price} Bdt</p>
                <p>
                    Selling Price:{" "}
                    <span className="text-red-600">{selling_Price}</span> Bdt
                </p>
                <p>
                    Seller Name: <span className="text-primary">{seller_name}</span>
                </p>
                <p>
                    Seller Phone:{" "}
                    <span className="text-primary">{mobile_number}</span>
                </p>
                <p>Posted On , {posted_time}</p>

                <div className="flex flex-col gap-2">
                    {status === "available" && (
                        <label
                            className="btn btn-primary"
                            htmlFor="booking-modal"
                            onClick={() => setInformation(book)}
                        >
                            Book Now
                        </label>
                    )}
                    {status === "booked" && (
                        <label className="btn btn-secondary cursor-not-allowed">
                            Booked
                        </label>
                    )}
                    <button
                        className="btn btn-error mb-6 lg:mb-0"
                    // onClick={handleReportProducts}
                    >
                        Report To Admin
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BooksCard;