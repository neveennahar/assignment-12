import React from "react";
import toast from "react-hot-toast";

const OrderdItems = ({ data }) => {
    const { product_image, title, price } = data;
    return (
        <div className="card card-side bg-base-300 shadow-xl m-5 flex flex-col lg:flex-row">
            <figure>
                <img className="w-60 h-60 p-10" src={product_image} alt="Movie" />
            </figure>

            <div className="card-body">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <div className="flex justify-between">
                    <div className="mt-5">
                        <p className="text-xl my-1">Selling Price: {price}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <label
                            className="btn btn-error"
                            onClick={() => {
                                // setDeletingProduct(data);
                                toast.error(`Could Not Do The Payment Part`);
                            }}
                            htmlFor="confirmation-modal"
                        >
                            Pay
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderdItems;
