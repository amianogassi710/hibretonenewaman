import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import GrantFinderSearchBox from "../../components/elements/GrantFinderSearchBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function GrantsList() {
    const router = useRouter();
    const { keyword, category, location, page, limit } = router.query;
    // const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const results = [
        {
            grant_id: 335,
            category_id: 1,
            category_name: ["Community", "Environment"],
            title: "Community and Environment Fund (CEF) and Business and Local Economy Fund (BLEF)",
            description:
                "This funding programme provides grants to local communities and economies that are disrupted by the construction of Phase One and Phase 2a of HS2 between London and Crewe.",
            total_size_of_grant_scheme: "£20 million",
            closing_date: "2025-03-31",
            location: "England, Wales, Scotland",
        },
        {
            grant_id: 343,
            category_id: 1,
            category_name: ["Community", "Environment"],
            title: "Mode Shift Revenue Support",
            description:
                "Mode Shift Revenue Support (MSRS) assists companies with the operating costs associated with running rail or inland water freight transport instead of road, where rail or inland waterway transport is more expensive. Waterborne Freight Grant (WFG) is designed to facilitate and support modal shift to waterborne freight services.",
            total_size_of_grant_scheme: "£115 million",
            closing_date: "2025-01-01",
            location: "England, Wales, Scotland",
        },
        {
            grant_id: 344,
            category_id: 1,
            category_name: ["Community"],
            title: "The Community Ownership Fund",
            description:
                "The Community Ownership Fund is a £150 million fund over 4 years to support community groups across England, Wales, Scotland, and Northern Ireland to take ownership of assets which are at risk of being lost to the community.",
            total_size_of_grant_scheme: "£115 million",
            closing_date: "2025-01-01",
            location: "England",
        },
        {
            grant_id: 345,
            category_id: 1,
            category_name: ["Community"],
            title: "Disabled Facilities Grants",
            description:
                "Disabled Facilities Grants can help meet the cost of making changes to your home so you or someone you live with can live safely and independently. People of all ages and tenures can apply to their local council for a grant.",
            total_size_of_grant_scheme: "£115 million",
            closing_date: "2025-01-01",
            location: "England",
        },
        {
            grant_id: 347,
            category_id: 1,
            category_name: ["Community"],
            title: "Bus Service Operators Grant (BSOG) Guidance for community transport organisations",
            description:
                "The Bus Service Operators Grant (BSOG) is a discretionary grant paid to eligible community transport operators to help them recover some of their fuel costs. The amount each operator receives is based on the amount of fuel they use running eligible services.",
            total_size_of_grant_scheme: "£115 million",
            closing_date: "2025-01-01",
            location: "England",
        },
        {
            grant_id: 348,
            category_id: 1,
            category_name: ["Community"],
            title: "Adoption support fund",
            description:
                "The adoption support fund (ASF) provides funds to local authorities and regional adoption agencies (RAAs) to pay for essential therapeutic services for eligible adoptive and special guardianship order (SGO) families. The ASF will continue to offer support to adoptive and eligible special guardianship families up to March 2025.",
            total_size_of_grant_scheme: "£115 million",
            closing_date: "2025-01-01",
            location: "England",
        },
    ];
    useEffect(() => {
        const fetchResults = async () => {
            const { data, totalPages, totalCount } = await fetchSearchResults({
                keyword,
                category,
                location,
                page,
                limit,
            });
            // setResults(data);
            setTotalPages(totalPages);
            setTotalCount(totalCount);
        };

        if (router.isReady) {
            fetchResults();
        }
    }, [router.isReady, keyword, category, location, page]);

    async function fetchSearchResults({ keyword, category, location, page }) {
        // 实现你的数据获取逻辑，包括处理分页
        // 应该返回获取到的数据和总页数
        return { data: [], totalPages: 0 }; // 模拟返回结果
    }

    return (
        <>
            <Layout>
                <div>
                    <section className="section-box-2">
                        <div className="container">
                            <div className="banner-hero bg-img-calculator">
                                <div className="block-banner text-left">
                                    <h2 className="wow animate__animated animate__fadeInUp">
                                        <span className="color-blue ">
                                            130 Grants
                                        </span>{" "}
                                        Available Now
                                    </h2>
                                    <p className="font-lg color-text-paragraph-2">
                                        Search for the latest personal, public,
                                        private, academic and voluntary sector
                                        grant funding
                                    </p>
                                    {/* <div className="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                    Search for the latest personal, public, private, academic and voluntary sector grant funding
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-0">
                        <div className="container">
                            <div className="banner-hero">
                                <div className="block-banner">
                                    <div className="text-center">
                                        <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">
                                            Funding for Every Type of Enterprise
                                        </h2>
                                        <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
                                            Find the right grants for you.
                                        </p>
                                    </div>
                                    <GrantFinderSearchBox />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-30">
                        <div className="container">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                                    <div className="content-page">
                                        <div className="box-filters-job">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-5">
                                                    <span className="text-small text-showing">
                                                        Showing{" "}
                                                        <strong>41-60 </strong>
                                                        of <strong>944 </strong>
                                                        grants
                                                    </span>
                                                </div>
                                                {/* <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                                    <div className="display-flex2">
                                                        <div className="box-border mr-10">
                                                            <span className="text-sortby">Show:</span>
                                                            <div className="dropdown dropdown-sort">
                                                                <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                                    <span>12</span>
                                                                    <i className="fi-rr-angle-small-down" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">10</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">12</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">20</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="box-border">
                                                            <span className="text-sortby">Sort by:</span>
                                                            <div className="dropdown dropdown-sort">
                                                                <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                                                                    <span>Newest Post</span>
                                                                    <i className="fi-rr-angle-small-down" />
                                                                </button>
                                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item active">Newest Post</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Oldest Post</a>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link legacyBehavior href="#">
                                                                            <a className="dropdown-item">Rating Post</a>
                                                                        </Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="box-view-type">
                                                            <Link legacyBehavior href="/jobs-list">
                                                                <a className="view-type">
                                                                    <img src="assets/imgs/template/icons/icon-list.svg" alt="jobBox" />
                                                                </a>
                                                            </Link>

                                                            <Link legacyBehavior href="/jobs-grid">
                                                                <a className="view-type">
                                                                    <img src="assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox" />
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                        {results.map((grant) => (
                                            <div className="row display-list">
                                                <div className="col-xl-12 col-12">
                                                    <div className="card-grid-2 hover-up">
                                                        <div className="row card-overflow-list">
                                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                                <div className="card-grid-2-image-left">
                                                                    <div className="right-info">
                                                                        <h4>
                                                                            <Link
                                                                                legacyBehavior
                                                                                href="/job-details"
                                                                            >
                                                                                <a>
                                                                                    {
                                                                                        grant.title
                                                                                    }
                                                                                </a>
                                                                            </Link>
                                                                        </h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 text-start pr-60 col-md-12 col-sm-12">
                                                                <div className="pl-15 mb-15 mt-15">
                                                                    {grant.category_name.map(
                                                                        (
                                                                            one_category_name
                                                                        ) => (
                                                                            <Link
                                                                                legacyBehavior
                                                                                href=""
                                                                            >
                                                                                <a className="btn btn-tags-sm mr-5">
                                                                                    {
                                                                                        one_category_name
                                                                                    }
                                                                                </a>
                                                                            </Link>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-block-info card-overflow-list">
                                                            <div className="mt-5">
                                                                <span className="card-location mr-15">
                                                                    {
                                                                        grant.location
                                                                    }
                                                                </span>
                                                                <span className="card-time">
                                                                    closing
                                                                    date:{" "}
                                                                    {
                                                                        grant.closing_date
                                                                    }
                                                                </span>
                                                            </div>
                                                            <p className="font-sm color-text-paragraph mt-10">
                                                                {
                                                                    grant.description
                                                                }
                                                            </p>
                                                            <div className="card-2-bottom mt-20">
                                                                <div className="row">
                                                                    <div className="col-lg-7 col-7">
                                                                        <span className="card-text-price">
                                                                            {
                                                                                grant.total_size_of_grant_scheme
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div
                                                                            className="btn btn-apply-now"
                                                                            data-bs-toggle="modal"
                                                                            data-bs-target="#ModalApplyJobForm"
                                                                        >
                                                                            Read
                                                                            More
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <Stack spacing={2}>
                                        <Pagination count={10} />
                                    </Stack>
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                    <div className="sidebar-shadow none-shadow mb-30">
                                        <div className="sidebar-filters">
                                            <div className="filter-block head-border mb-30">
                                                <h5>
                                                    Advance Filter
                                                    <Link
                                                        legacyBehavior
                                                        href="#"
                                                    >
                                                        <a className="link-reset">
                                                            Reset
                                                        </a>
                                                    </Link>
                                                </h5>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <div className="form-group select-style select-style-icon">
                                                    <select className="form-control form-icons select-active">
                                                        <option>
                                                            New York, US
                                                        </option>
                                                        <option>London</option>
                                                        <option>Paris</option>
                                                        <option>Berlin</option>
                                                    </select>
                                                    <i className="fi-rr-marker" />
                                                </div>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">
                                                    Industry
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="text-small">
                                                                    All
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                180
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Software
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                12
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Finance
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                23
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Recruting
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                43
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Management
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                65
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Advertising
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                76
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-25">
                                                    Salary Range
                                                </h5>
                                                <div className="list-checkbox pb-20">
                                                    <div className="row position-relative mt-10 mb-20">
                                                        <div className="col-sm-12 box-slider-range">
                                                            <div id="slider-range" />
                                                        </div>
                                                        <div className="box-input-money">
                                                            <input
                                                                className="input-disabled form-control min-value-money"
                                                                type="text"
                                                                name="min-value-money"
                                                                disabled="disabled"
                                                                defaultValue
                                                            />
                                                            <input
                                                                className="form-control min-value"
                                                                type="hidden"
                                                                name="min-value"
                                                                defaultValue
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="box-number-money">
                                                        <div className="row mt-30">
                                                            <div className="col-sm-6 col-6">
                                                                <span className="font-sm color-brand-1">
                                                                    $0
                                                                </span>
                                                            </div>
                                                            <div className="col-sm-6 col-6 text-end">
                                                                <span className="font-sm color-brand-1">
                                                                    $500
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-20">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="text-small">
                                                                    All
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                145
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    $0k - $20k
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                56
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    $20k - $40k
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                37
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    $40k - $60k
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                75
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    $60k - $80k
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                98
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    $80k - $100k
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                14
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    $100k -
                                                                    $200k
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                25
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">
                                                    Popular Keyword
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="text-small">
                                                                    Software
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                24
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Developer
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                45
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Web
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                57
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">
                                                    Position
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Senior
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                12
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="text-small">
                                                                    Junior
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                35
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Fresher
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                56
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">
                                                    Experience Level
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Internship
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                56
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Entry Level
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                87
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="text-small">
                                                                    Associate
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                24
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Mid Level
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                45
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Director
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                76
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Executive
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                89
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">
                                                    Onsite/Remote
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    On-site
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                12
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="text-small">
                                                                    Remote
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                65
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Hybrid
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                58
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-30">
                                                <h5 className="medium-heading mb-10">
                                                    Job Posted
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="text-small">
                                                                    All
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                78
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    1 day
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                65
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    7 days
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                24
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    30 days
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                56
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="filter-block mb-20">
                                                <h5 className="medium-heading mb-15">
                                                    Job type
                                                </h5>
                                                <div className="form-group">
                                                    <ul className="list-checkbox">
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Full Time
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                25
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input
                                                                    type="checkbox"
                                                                    defaultChecked="checked"
                                                                />
                                                                <span className="text-small">
                                                                    Part Time
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                64
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Remote Jobs
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                78
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" />
                                                                <span className="text-small">
                                                                    Freelancer
                                                                </span>
                                                                <span className="checkmark" />
                                                            </label>
                                                            <span className="number-item">
                                                                97
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
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
