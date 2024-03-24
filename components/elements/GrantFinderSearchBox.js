import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; 
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Autocomplete, TextField, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function GrantFinderSearchBox() {
    const router = useRouter(); 
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');

    const handleSearch = () => {
        const searchURL = `/grant-finder/search/?keyword=${encodeURIComponent(keyword)}&category=${encodeURIComponent(category)}&location=${encodeURIComponent(location)}&page=1&limit=10`;
        router.push(searchURL); 
    };

    const categories = [
        "Community",
        "Disability",
        "Education",
        "Environment",
        "Equal Opportunities",
        "People & Families",
        "Health",
        "Arts",
        "Research",
        "Business",
        "Rural",
        "Equality & Diversity",
        "Regeneration",
        "Religion",
        "Social Enterprise",
        "Leisure & Tourism",
        "Technology",
        "Employment",
        "Crime",
        "Young People",
    ];

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

    return (
        <>
            <div
                className="form-find mt-40 mb-10 wow animate__animated animate__fadeInUp"
                data-wow-delay=".2s"
            >
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} lg={4}>
                        <TextField
                            fullWidth
                            label="Keyword"
                            variant="standard"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Autocomplete
                            clearOnEscape
                            options={categories}
                            onChange={(event, newValue) => setCategory(newValue)}
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
                            onChange={(event, newValue) => setLocation(newValue)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Location"
                                    variant="standard"
                                />
                            )}
                        />
                    </Grid>

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
            <div
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
            </div>
        </>
    );
}

export default GrantFinderSearchBox;
