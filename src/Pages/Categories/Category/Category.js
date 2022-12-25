import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../BookModal/BookModal';
import BooksCard from '../BooksCard/BooksCard';

const Category = () => {
    const books = useLoaderData();
    const [information, setInformation] = useState(null);
    return (
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    books.map(book => <BooksCard
                        key={book._id}
                        book={book}
                        setInformation={setInformation}
                    ></BooksCard>)
                }
            </div>
            {information && (
                <BookModal
                    information={information}
                    setInformation={setInformation}
                ></BookModal>
            )}

        </div>
    );
};

export default Category;