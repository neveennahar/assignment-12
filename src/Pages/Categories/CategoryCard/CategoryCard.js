import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ cat }) => {

    const { name, _id } = cat;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                {/* <p>{slots.length > 0 ? slots[0] : 'Try Another day'}</p> */}
                {/* <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p> */}
                {/* <p><small>Price: ${price}</small></p> */}
                <div className="card-actions justify-center">
                    <Link to={`/category/${name}`}>
                        <button className="btn btn-primary">Show All </button>
                    </Link>
                </div>
            </div>
        </div>
    );

};

export default CategoryCard;