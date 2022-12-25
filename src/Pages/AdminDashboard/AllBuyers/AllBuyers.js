import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";

const AllBuyers = () => {
    const [seller, setSeller] = useState(null);
    const [loading, setLoading] = useState(true);
    axios({
        method: "get",
        url: `https://recycled-books-server.vercel.app/users/buyers`,
        responseType: "stream",
    }).then((data) => {
        const datas = JSON.parse(data.data);
        setSeller(datas);
        setLoading(false);
    });

    if (loading) {
        return <Loading></Loading>;
    }

    const handleDeleteBuyers = (id, name) => {
        fetch(`https://recycled-books-server.vercel.app/users/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem(`accesstoken`)}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    toast.success(`Deleted ${name} successfully`);
                }
            });
    };

    return (
        <div>
            <div className="overflow-x-auto p-2 mx-2 lg:mx-0 lg:p-10">
                <table className="table w-full ">
                    <thead>
                        <tr className="uppercase">
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {seller.map((x) => (
                            <tr key={x._id}>
                                <td>{x.name}</td>
                                <td>{x.email}</td>
                                <td>
                                    <label
                                        className="btn btn-error text-white hover:scale-105"
                                        onClick={() => {
                                            handleDeleteBuyers(x._id, x.name);
                                        }}
                                    >
                                        Delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;
