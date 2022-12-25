import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full " >
                    <img src="https://www.thecuriousreader.in/wp-content/uploads/2018/02/Book-Giving-Day-_Why-You-Should-_Donate-Books-_To-Children-feature-image.png" className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full ">
                    <img src="https://media.istockphoto.com/id/1302961248/vector/book-donation-concept-vector-illustration-on-white-background-people-donate-second-hand.jpg?s=612x612&w=0&k=20&c=01c-jPTUTRYVGTbPb_h2HgHkcADjBBpxyxAxYP8MNbs=" className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full ">
                    <img src="https://media.istockphoto.com/id/1431291532/vector/school-supplies-in-a-cardboard-box-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=2wjbp7l1w37zCvZzM4q6tuYkdPl1nfp3CjXhie61h90=" className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/001/997/952/small/charity-and-donation-box-with-books-vector.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default Banner;