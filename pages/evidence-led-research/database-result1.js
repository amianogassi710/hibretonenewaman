import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import GrantFinderSearchBox from "../../components/elements/GrantFinderSearchBox";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Button, Grid, MenuItem, MenuList, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axiosFetchWithRetry from "../../components/elements/fetchWithRetry";
import ClosingDateDisplay from "../../components/elements/ClosingDateDisplay";
import axios from "axios";


function useLockBodyScroll(open) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [open]);
}

export default function GrantsList() {
    const [filters, setFilters] = useState({
        category: [],
        location: [],
    });
    const router = useRouter();

    const [results, setResults] = useState([]);

    const [sortMethod, setSortMethod] = useState(1);


    const handleSearch = () => {
        const filterParams = new URLSearchParams();

        filters.location.forEach((locationId) => {
            filterParams.append("location", locationId);
        });
        filterParams.append("page", 1);
        filterParams.append("limit", 10);
        filterParams.append("sort", sortMethod);
        router.push(`/grant-finder/search/?${filterParams.toString()}`);
    };


    const handleMenuItemClick = (index) => {
        setSortMethod(index);
        const filterParams = new URLSearchParams();

        filters.location.forEach((locationId) => {
            filterParams.append("location", locationId);
        });
        router.push(`/grant-finder/search/?${filterParams.toString()}`);
    };

    const fetchData = async (updatedQueryParameters) => {
        try {
            // Make the API call
            const response = await axios.post('http://localhost:8000/businessidea', {
                number_of_business_ideas: formData.number_of_business_ideas,
                location: formData.location
            });
    
            // Log the API response to see what data is received
            console.log('API Response:', response.data);
    
            // Update the responseData state with the received data
            setResponseData(response.data);
    
        } catch (error) {
            // Handle errors gracefully
            console.error('Error fetching data:', error);
            // You can set an error state or display an error message to the user
        }
    };
    
    // Update useEffect to fetch data when router is ready
    useEffect(() => {
        if (router.isReady) {
            const { location = [] } = router.query;
            console.log("router.query " + JSON.stringify(router.query));
            const updatedQueryParameters = {
                location: Array.isArray(location) ? location : location ? [location] : [],
            };
            console.log("updatedQueryParameters " + JSON.stringify(updatedQueryParameters));
            fetchData(updatedQueryParameters);
        }
    }, [router.isReady, router.query]);


    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        number_of_business_ideas: "",
        location: "",
    });
    const [responseData, setResponseData] = useState(null);
    useEffect(() => {
        const { number_of_business_ideas, location } = router.query;
        setFormData({
            number_of_business_ideas: number_of_business_ideas || "",
            location: location || "",
        });
    }, [router.query]);



    const [showDialog, setShowDialog] = useState(false);

    const handleClick = (event) => {
        setShowDialog(true);
    };

    const handleClose = () => {
        setShowDialog(false);
    };

    useLockBodyScroll(isOpen);

    return (
        <>
           <Layout>
    <div>
        <section className="section-box mt-30">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                        <div className="content-page">
                        {responseData && (
    <ul>
        {responseData.extracted_text_1
            .split("<h3>")
            .filter((section, index) => index !== 0)
            .map((section, index) => {
                const [title, description] = section.split("</h3>");
                const cleanTitle = title.replace(/^\d+\.\s*/, "");
                const cleanDescription = description ? description.replace(/<[^>]+>/g, "") : "";
                return (
                    <li key={index} className="descriptionoftitle">
                        <h4>{cleanTitle}</h4>
                        <p>{cleanDescription}</p>
                    </li>
                );
            })}
    </ul>
)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</Layout>

        </>
    );
}