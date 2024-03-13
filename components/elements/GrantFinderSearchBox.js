import React, { useState } from "react";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Autocomplete, TextField, Button, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function GrantFinderSearchBox() {
    const StyledTextField = styled(TextField)({
        "& .MuiInput-underline:before": {
            // 默认情况下隐藏底部边线
            borderBottom: "none",
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
            // 鼠标悬浮时隐藏底部边线
            borderBottom: "none",
        },
        "& .MuiInput-underline:after": {
            // 输入时隐藏底部边线
            borderBottom: "none",
        },
    });

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
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Autocomplete
                            clearOnEscape
                            options={categories}
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
