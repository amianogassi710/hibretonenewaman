import Link from "next/link";
import React, { useEffect, useState } from "react";
const CategoryTab2 = () => {
    const [active, setActive] = useState(1);
    const [data,setData] = useState([])
    const [grantDetails,setGrantDetails] = useState([])

    useEffect(()=>{
        var grantList = []
        const getGrantDetails= async(i)=>{
            const reqOptions ={
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                },
            }
            var url = "/grants/grant-details/" + i + "/items";
            const response = await fetch(url, reqOptions)

            const data = await response.json()
            if(!response.ok){
                console.log({"error":data.detail})
            }
            else{
                grantList[i] = data
            }
        }
        for (let i = 1; i <= 6; i++) {
            getGrantDetails(i)
        }
        setGrantDetails(grantList)

        const getCategories= async()=>{
            const reqOptions ={
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                },
            }
            const response = await fetch("/grants/grant-categories", reqOptions)
            const data = await response.json()
    
            if(!response.ok){
                console.log({"error":data.detail})
            }
            else{
                setData(data)
            }
        }
        getCategories()
    },[])

    const handleOnClick = (index) => {
        setActive(index); // remove the curly braces
    };
    return (
        <>
            <div className="list-tabs mt-40  text-start">
                <ul className="nav nav-tabs" role="tablist">
                    <li>
                        <a className={active === 1 ? "active" : ""} onClick={() => handleOnClick(1)}><img src="/assets/imgs/page/homepage1/1.svg" alt="jobBox" /> Arts</a>
                        </li>
                    <li>
                        <a className={active === 2 ? "active" : ""} onClick={() => handleOnClick(2)}><img src="/assets/imgs/page/homepage1/2.svg" alt="jobBox" /> International</a>
                        </li>
                    <li>
                        <a className={active === 3 ? "active" : ""} onClick={() => handleOnClick(3)} ><img src="/assets/imgs/page/homepage1/3.svg" alt="jobBox" /> Civil Society</a>
                        </li>
                    <li>
                        <a className={active === 4 ? "active" : ""} onClick={() => handleOnClick(4)} ><img src="/assets/imgs/page/homepage1/4.svg" alt="jobBox" /> Technology</a>
                        </li>
                    <li>
                        <a className={active === 5 ? "active" : ""} onClick={() => handleOnClick(5)} ><img src="/assets/imgs/page/homepage1/5.svg" alt="jobBox" /> Education</a>
                        </li>
                    <li>
                        <a className={active === 6 ? "active" : ""} onClick={() => handleOnClick(6)} ><img src="/assets/imgs/page/homepage1/6.svg" alt="jobBox" /> Other</a>
                        </li>
                </ul>
            </div>
            <div className="tab-content mt-50" id="myTabContent-1">
            {grantDetails.map((item, i) => (
                <div className={`tab-pane fade ${active == i && "show active"}`}>
                        <div className="row">
                            {item.map((grant, j) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="card-grid-2 grid-bd-16 hover-up">
                                    <div className="card-block-info">
                                        <h5>
                                            <Link legacyBehavior href={`/grant-details/${grant.grant_id}`}><a>{grant.title}</a></Link>
                                        </h5>
                                        <div className="mt-5">
                                            <span className="card-location mr-15">{grant.location}</span>
                                        <span className="card-time">closing date: {grant.closing_date}</span></div>
                                        <div className="card-2-bottom mt-20">
                                            <div className="row">
                                                <div className="col-xl-7 col-md-7 mb-2">
                                                    <Link legacyBehavior href="/jobs-grid"><a className="btn btn-tags-sm mr-5">{grant.category_name}</a></Link>
                                                </div>
                                                <div className="col-xl-5 col-md-5 text-lg-end"><span className="card-text-price">£{grant.total_size_of_grant_scheme}</span><span className="text-muted"></span></div>
                                            </div>
                                        </div>
                                        <p className="font-sm color-text-paragraph mt-20">{grant.description}</p>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                </div>
            ))}
            </div>
        </>
    );
};

export default CategoryTab2;