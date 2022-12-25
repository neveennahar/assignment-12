import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
// import BookingModal from "../BookingModal/BookingModal";


const Product = ({ data, refetch }) => {
    const { user } = useContext(AuthContext);
    const {
        _id,
        product_name,
        product_description,
        selling_Price,
        product_image,
        seller_email,
        status,
    } = data;
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    };
    const handleDeleteProduct = (id, name) => {
        fetch(`https://recycled-books-server.vercel.app/booksdetails/${user.email}/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem(`accesstoken`)}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Product ${name} deleted successfully`);
                }
            });
    };
    // const handleDeleteProduct = (product) => {
    //     fetch(
    //         `https://recycled-books-server.vercel.app/booksdetails/${user.email}/${_id}`,
    //         {
    //             method: "DELETE",
    //             headers: {
    //                 // authorization: `bearer ${localStorage.getItem(`accesstoken`)}`,
    //             },
    //         }
    //     )
    //         .then((res) => res.json())
    //         .then((data) => {
    //             if (data.deletedCount > 0) {
    //                 refetch();
    //                 toast.success(`Product ${product_name} deleted successfully`);

    //                 // fetch(
    //                 //     `https://laptop-bikroy-server.vercel.app/allAdvertisedProducts/${product_name}`,
    //                 //     {
    //                 //         method: "DELETE",
    //                 //         headers: {
    //                 //             authorization: `bearer ${localStorage.getItem(`accesstoken`)}`,
    //                 //         },
    //                 //     }
    //                 // )
    //                 //     .then((res) => res.json())
    //                 //     .then((data) => {
    //                 //         if (data.deletedCount > 0) {
    //                 //             console.log("Also Deleted From Advertisement");
    //                 //         }
    //                 //     });
    //             }
    //         });
    // };
    const HandleAdvertiseBtn = () => {

        fetch(`https://recycled-books-server.vercel.app/allAdvertisedProducts`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                // authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Product add in Advertised section");
                // console.log(result);
                // fetch(
                //     `https://laptop-bikroy-server.vercel.app/allProducts/${user.email}/${_id}`,
                //     {
                //         method: "PUT",
                //         headers: {
                //             authorization: `bearer ${localStorage.getItem("accessToken")}`,
                //         },
                //     }
                // )
                //     .then((res) => res.json())
                //     .then((data) => {
                //         if (data.modifiedCount > 0) {
                //             toast.success("Product Advertised");
                //             refetch();
                //         }
                //     });
            });
    };

    // .................................
    return (
        <div className="card card-side bg-base-300 shadow-xl m-5 flex flex-col lg:flex-row">
            <figure>
                <img className="w-60 h-60 p-10" src={product_image} alt="Movie" />
            </figure>

            <div className="card-body">
                <h2 className="text-3xl font-semibold">{product_name}</h2>
                <div className="flex justify-between flex-col lg:flex-row">
                    <div className="mt-5">
                        <p className="text-xl my-1">Description :{product_description}</p>
                        <p className="text-xl my-1">Selling Price: {selling_Price}</p>
                        <p className="text-xl my-1">Selling Status: {status}</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        {status === `available` && (
                            <button className="btn btn-primary" onClick={HandleAdvertiseBtn}>
                                Advertise
                            </button>
                        )}
                        {status === `advertised` && (
                            <button className="btn btn-bg-primary-content disabled">
                                Advertised
                            </button>
                        )}
                        <label
                            className="btn btn-error text-white hover:scale-105"
                            onClick={() => {
                                handleDeleteProduct(data._id, data.name);
                            }}
                        >
                            Delete
                        </label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;
