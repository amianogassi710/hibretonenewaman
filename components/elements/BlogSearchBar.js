import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from 'next/router';
import { IoSearchSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";


const BlogSearchBar = () => {

    const router = useRouter();

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission
        router.push("/blog-page/blog-inner-page");
    };

    const locations = [
        "London",
        "Edinburgh",
        "Manchester",
        "Birmingham",
        "Glasgow",
        "Bristol",
        "Liverpool",
        "Oxford",
        "Cambridge",
        "Brighton",
        "Newcastle",
        "Leeds",
        "Sheffield",
        "Portsmouth",
        "Nottingham",
        "Leicester",
        "Southampton",
        "Belfast",
        "Cardiff",
        "Coventry",
    ];

    const [isBelow768px, setIsBelow768px] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsBelow768px(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        // Listen for window resize events
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="blog-form-find-top wow animate_animated animate_fadeInUp">
                <form>
                    <div style={{ width: '100%' }}>
                        {isBelow768px ? (
                            <input
                                className="blog-one"
                                type="text"
                                placeholder="Enter name of blog, article or the insight you require"
                            />
                        ) : (
                            <input
                                className="blog-one"
                                type="text"
                                placeholder="Enter name of blog, article or the insight you require"
                            />
                        )}
                    </div>
                    <div className="divider-blog"></div>
                    <div className="searchbox-location"><CiLocationOn className="blogpage-searchbar-icon" />
                        <Autocomplete
                            clearOnEscape
                            options={locations}
                            renderInput={(params) => (
                                <TextField
                                    sx={{
                                        border: "none !important",
                                        "&:focus": {
                                            border: "none !important",
                                        },
                                        "& .MuiInputBase-input": {
                                            border: "none !important",
                                            height: "auto",
                                            width: "auto !important",
                                        },

                                    }}
                                    {...params}
                                    label="City, region or country"
                                    className="location-blog"
                                    variant="standard"
                                    InputProps={{
                                        ...params.InputProps,
                                        disableUnderline: true,
                                    }}
                                />
                            )}
                            className="blog-two"
                        />
                    </div>
                    <button onClick={handleSearch} className="blog-btn-search"><IoSearchSharp className="blogpage-searchbox-searchicon" /> SEARCH</button>
                </form>
            </div>
        </>
    );
};

export default BlogSearchBar;