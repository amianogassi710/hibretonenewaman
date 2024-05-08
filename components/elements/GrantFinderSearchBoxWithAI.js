import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Autocomplete, TextField, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function GrantFinderSearchBoxWithAI() {
    const router = useRouter();
    const [prompt, setPrompt] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = () => {
        const queryParams = new URLSearchParams();
        const promptValue = prompt || "I am an entrepreneur, please recommend me some grants";
        queryParams.append("prompt", promptValue);

        router.push(`/grant-finder/search-ai/?${queryParams.toString()}`);
        
    };


    return (
        <>
            <div
                className="form-find mt-40 mb-30 wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
            >
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} lg={10}>
                        <TextField
                            fullWidth
                            label="You can ask me questions, e.g., 'I am an entrepreneur, please recommend me some grants'"
                            variant="standard"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                    </Grid>
                    {/* <Grid item xs={12} lg={3}>
                        <Autocomplete
                            clearOnEscape
                            options={categories} 
                            getOptionLabel={(option) => option.category_name} 
                            onChange={(event, newValue) => {
                                setCategory(
                                    newValue ? newValue.category_id : ""
                                ); 
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Category"
                                    variant="standard"
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} lg={3}>
                        <Autocomplete
                            clearOnEscape
                            options={locations} 
                            getOptionLabel={(option) => option.label} 
                            onChange={(event, newValue) => {
                                setLocation(newValue ? newValue.label_id : ""); 
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Location"
                                    variant="standard"
                                />
                            )}
                        />
                    </Grid> */}

                    <Grid item xs={12} lg={2}>
                        <Button
                            variant="contained"
                            fullWidth
                            size="large"
                            startIcon={<SearchIcon />}
                            sx={{
                                backgroundColor: "rgb(58, 171, 103)",
                                "&:hover": {
                                    backgroundColor: "#339e5c",
                                },
                                height: "45px",
                            }}
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </div>
            {/* <div
                className="list-tags-banner mt-10 mb-30 ml-20 wow animate__animated animate__fadeInUp"
                data-wow-delay=".3s"
            >
                <strong>Popular Searches:</strong>
                <Link legacyBehavior href="#">
                    <a>Education </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Small Business </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Research </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Nonprofit </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Healthcare </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Technology </a>
                </Link>
                <Link legacyBehavior href="#">
                    <a>Environmental </a>
                </Link>
            </div> */}
        </>
    );
}

export default GrantFinderSearchBoxWithAI;