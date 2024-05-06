import React, { useState } from "react";
import { TextField } from "@mui/material";
import { useRouter } from 'next/router';

const IndustryIntelligenceTopBusinessIdea = () => {
    const [formData, setFormData] = useState({
        number_of_business_ideas: '',
        location: ''
    });
    const [formErrors, setFormErrors] = useState({
        number_of_business_ideas: false,
        location: false
    });

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!formData.number_of_business_ideas || !formData.location) {
            setFormErrors({
                number_of_business_ideas: !formData.number_of_business_ideas,
                location: !formData.location
            });
            return;
        }
        
        const queryParams = new URLSearchParams(formData);
        
        const url = `/evidence-led-research/database-result?${queryParams}`;
        if (window.location.pathname !== '/evidence-led-research/database-result') {
                router.push(url);
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
    }

    return (
        <>
            <div className="industry-form-find-top  wow animate__animated animate__fadeInUp">
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        label="City, region or country"
                        variant="standard"
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
                        InputProps={{
                            disableUnderline: true,
                        }}
                        className="industry-input-top-one"
                    />
                    {formErrors.location && <p style={{color:'red'}}>required*</p>}
                    <div className="divider"></div>

                    <input
                        className="industry-input-top-two"
                        type="text"
                        name="number_of_business_ideas"
                        id="number_of_business_ideas"
                        value={formData.number_of_business_ideas}
                        onChange={handleChange}
                        placeholder="Number of ideas"
                        style={{ marginTop: "5px" }}
                    />
                    {formErrors.number_of_business_ideas && <p style={{color:'red',marginRight:'15px'}}>required*</p>}
                    <button className="btn-search-one">GENERATE</button>
                </form>
            </div>
        </>
    );
};

export default IndustryIntelligenceTopBusinessIdea;
