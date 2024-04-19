import React, { useState, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from 'next/router';
import { IoSearchSharp } from "react-icons/io5";  
import { CiLocationOn } from "react-icons/ci";


const EvidenceLedResearchSearchBar = () => {

    const router = useRouter();

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission
        router.push("#");
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
            <div className="evidenceled-form-find-top wow animate_animated animate_fadeInUp">
                <form>
                    <div style={{ width: '100%' }}>
                        
                            <input
                                className="blog-one"
                                type="text"
                                placeholder="Enter name of report, article, research or subject"
                                style={{ marginTop: "5px" }}
                            />

                    </div>

                    <div className="divider"></div>
                    <CiLocationOn className="evidenceled-searchbar-searchicon" />
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
                                variant="standard"
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                }}
                            />
                        )}
                        className="blog-two"
                    />
                    
                    <button onClick={handleSearch} className="evidenceled-btn-search">
                        <IoSearchSharp className="searchbox-searchicon-evidenceled"/> SEARCH</button>
                </form>
            </div>
        </>
    );
};

export default EvidenceLedResearchSearchBar;