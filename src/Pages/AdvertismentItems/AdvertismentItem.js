import React from "react";

const AdvertismentItem = ({ data }) => {
    const {
        product_name,
        product_image,
        selling_Price,
        product_condition,
        product_description,
    } = data;
    return (
        <div className="card w-60 lg:w-96 bg-base-100 mx-auto shadow-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-base-100 dark:hover:bg-base-200 transition-colors duration-300 cursor-pointer">
            <figure>
                <img className="h-80 p-10" src={product_image} alt="ProductImg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {product_name}
                    {/* <div className="badge badge-error animate-bounce text-white absolute ml-80 mb-96 -mt-80">
            NEW
          </div> */}
                </h2>
                <p>{product_description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{selling_Price} bdt</div>
                    <div className="badge badge-outline">
                        {product_condition} Condition
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertismentItem;
