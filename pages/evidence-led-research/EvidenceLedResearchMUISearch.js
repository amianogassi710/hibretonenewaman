import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { IoSearchSharp } from "react-icons/io5";
import { colourOptions } from '../../pages/evidence-led-research/data';



function EvidenceLedResearchMUISearch() {

    const filterColors = (inputValue) => {
        return colourOptions.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
            callback(filterColors(inputValue));
        }, 1000);
    };


    const [formData, setFormData] = useState({
        selectedOption: null
    });
    const [formErrors, setFormErrors] = useState({
        selectedOption: false
    });

    const router = useRouter();


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.selectedOption) {
            setFormErrors({
                selectedOption: true
            });
            return;
        }

        const selectedValue = formData.selectedOption.label;


        const queryParams = new URLSearchParams(formData);

        const new_url = `/evidence-led-research/search-results?${queryParams}`;
        if (window.location.pathname !== '/evidence-led-research/search-results') {
            router.push(new_url);
        } else {
            router.push({
                pathname: window.location.pathname,
                query: queryParams.toString()
            }, undefined, { shallow: true, replace: true });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));

        setFormErrors(prevFormErrors => ({
            ...prevFormErrors,
            [name]: false
        }));
    };

    const handleOptionClick = (option) => {
        if (option && option.pdfLocation) {
            window.open(option.pdfLocation, '_blank');
        }
    };


    return (
        <>
            <div className="industry-form-find wow animate__animated animate__fadeInUp">
                <form onSubmit={handleSubmit}>
                    <Autocomplete
                        clearOnEscape
                        options={colourOptions}
                        getOptionLabel={(option) => option.label}

                        onChange={handleChange}

                        renderInput={(params) => (
                            <TextField
                                name="selectedOption"
                                id="selectedOption"
                                value={formData.selectedOption}
                                onChange={handleChange}
                                sx={{
                                    border: "none !important",
                                    "&:focus": {
                                        border: "none !important",
                                    },
                                    "& .MuiInputBase-input": {
                                        border: "none !important",
                                        height: "auto",
                                        width: "100% !important",
                                    },
                                }}
                                {...params}
                                label="Enter name of report, article, research or subject"
                                variant="standard"
                                InputProps={{
                                    ...params.InputProps,
                                    disableUnderline: true,
                                }}


                            />
                        )}
                        renderOption={(props, option) => (
                            <li
                                {...props}
                                onClick={() => handleOptionClick(option)}
                                style={{ cursor: option.pdfLocation ? 'pointer' : 'default' }}
                            >
                                <img src={option.image} alt={option.label} style={{ width: '40px', marginRight: '10px' }} />
                                {option.label}
                            </li>
                        )}
                        className="industry-input-top-four"
                    />
                    {formErrors.selectedOption && <p style={{ color: 'red' }}>required*</p>}


                    <button type="submit" className="btn-search-evidence-led-research"><IoSearchSharp style={{ marginRight: '5px' }} />SEARCH</button>
                </form>
            </div>
        </>
    );
}

export default EvidenceLedResearchMUISearch;