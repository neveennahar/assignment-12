import React, { useEffect, useState } from 'react';

import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {

    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://recycled-books-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])

    return (
        <section className='my-16'>
            <h2 className='text-2xl  font-bold text-center'>Categories</h2>
            {/* <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p> */}
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    category.map(cat => <CategoryCard
                        key={cat._id}
                        cat={cat}


                    ></CategoryCard>)
                }
            </div>
            {
                // treatment &&
                // <BookingModal
                //     selectedDate={selectedDate}
                //     treatment={treatment}
                //     setTreatment={setTreatment}
                //     refetch={refetch}
                // ></BookingModal>
            }
        </section>
    );
};

export default Categories;