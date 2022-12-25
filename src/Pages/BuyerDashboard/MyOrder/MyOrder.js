import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";
import OrderdItems from "../OrderItems/OrderItems";


const MyOrder = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const { data: products, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const res = await fetch(
                    `https://recycled-books-server.vercel.app/bookings/${user.email}`,
                    {
                        headers: {
                            // authorization: `bearer ${localStorage.getItem(`accessToken`)}`,
                        },
                    }
                );
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        },
    });
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="p-2 lg:p-10">
            <p>This is my order page</p>

            {products.map((x) => (
                <OrderdItems key={x._id} data={x}></OrderdItems>
            ))}
        </div>
    );
};

export default MyOrder;
