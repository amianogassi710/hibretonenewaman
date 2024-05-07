import React, { useState, useEffect } from 'react'; // Import useEffect from react
import { Autocomplete, TextField } from "@mui/material";
import BlogSearchBar from '../../components/elements/BlogSearchBar';
import { IoShareSocialOutline } from "react-icons/io5";

const DiscoverButton = () => {
    return (
        <>
            <section className="section-box">
                <div className="banner-hero-builder bg-img-blog">
                    <div className="container d-flex align-items-center">
                        <div className="row">
                            <div className="col">
                                <div className="builder-hero-heading">Blog</div>
                                <div className="builder-hero-subheading">Get the latest news, updates and tips</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50 mt-50-30">
                <div className="container">
                    <div className="flex-container">
                        <div className="share-icon-container-blogpage">
                            <IoShareSocialOutline className="share-icon-blogpage" />
                        </div>
                        <div className="text-center">
                            <div className="component-title">
                                News and Blog
                            </div>
                            <div className="component-subtitle">
                                Information provided by hibretOne and our wonderful partners
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-50 mt-50-30">
                <div className="container">
                    <div className="banner-hero-blogpage">
                        <div className="block-banner-blog blogpage-block-banner">
                            <BlogSearchBar />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DiscoverButton;