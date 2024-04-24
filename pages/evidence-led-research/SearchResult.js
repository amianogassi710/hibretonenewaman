// SearchResult.js
import React from 'react';
import { colourOptions } from './data';

const SearchResult = () => {
    const searchValue = "i";

    // Find the relevant data based on searchValue

    const filteredArticles = colourOptions.filter((option) =>
        option.value && option.value.toLowerCase().includes(searchValue ? searchValue.toLowerCase() : '')
    );

    return (


        <section className="section-box mt-50">
            <div className="container">
                <h1>Search Result</h1>
                <p>You searched for: {searchValue}</p>

                <div className="swiper-container mt-50" style={{ overflow: 'hidden' }}>
                    <div className="swiper-wrapper">
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((article, index) => (
                                <div key={index} className="swiper-slide swiper-slide-searchbar">
                                    <div className="card-content-evidenceled hover-up">
                                        <a href={`${article.pdfLocation}`} target="_blank" rel="noopener noreferrer">
                                            <img
                                                loading="lazy"
                                                src={article.image}
                                                alt="Article featured image"
                                                className="featured-image-evidenceled"
                                            />
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="swiper-slide swiper-slide-searchbar">
                                <p>No results found for: {searchValue}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>




    );
};

export default SearchResult;
