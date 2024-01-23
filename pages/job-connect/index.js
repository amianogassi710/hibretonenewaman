/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import { FaMicrophone } from "react-icons/fa"
export default function Index() {
    const titles = ["Job Connect", "Find Job Opportunities", "Find Higher-Paid Employment", "Jobs For Entrepreneurs"]
    const [currentTitleIndex,setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
        },5000)

        return () => clearInterval(intervalId)
    },[])

    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero hero-2 hero-3">
                            <div className="banner-inner">
                                <div className="block-banner text-start">
                                    <h1 className="text-42 color-white wow animate__animated animate__fadeInRight" style={{"display": currentTitleIndex === 0 ? "block": "none"}}>
                                        <span className="color-brand-2 fw-bolder">Job Connect</span>
                                    </h1>
                                    <h1 className="text-42 color-white wow animate__animated animate__fadeInRight" style={{"display": currentTitleIndex === 1 ? "block": "none"}}>
                                        Find <span className="color-brand-2 fw-bolder">Job Opportunities</span>
                                    </h1>
                                    <h1 className="text-42 color-white wow animate__animated animate__fadeInRight" style={{"display": currentTitleIndex === 2 ? "block": "none"}}>
                                        Find <span className="color-brand-2 fw-bolder">Higher-Paid Employment</span>
                                    </h1>
                                    <h1 className="text-42 color-white wow animate__animated animate__fadeInRight" style={{"display": currentTitleIndex === 3 ? "block": "none"}}>
                                        Find <span className="color-brand-2 fw-bolder">Jobs For Entrepreneurs</span>
                                    </h1>
                                    <div className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                        We believe there’s no such thing as a failing entrepreneur, only a not-yet-ready one.
                                    </div>
                                    <div className="form-find mt-20 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <form>
                                            <input className="form-input input-keysearch mr-10" type="text" placeholder="What are you looking for? " />
                                            <div className="box-industry">
                                                <select className="form-input mr-5 select-active input-location">
                                                    <option value>Location</option>
                                                    <option value="AX">Aland Islands</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua and Barbuda</option>
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AW">Aruba</option>
                                                    <option value="AU">Australia</option>
                                                    <option value="AT">Austria</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BS">Bahamas</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BB">Barbados</option>
                                                    <option value="BY">Belarus</option>
                                                    <option value="PW">Belau</option>
                                                    <option value="BE">Belgium</option>
                                                    <option value="BZ">Belize</option>
                                                    <option value="BJ">Benin</option>
                                                    <option value="BM">Bermuda</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="BO">Bolivia</option>
                                                    <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                    <option value="BW">Botswana</option>
                                                    <option value="BV">Bouvet Island</option>
                                                    <option value="BR">Brazil</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="VG">British Virgin Islands</option>
                                                    <option value="BN">Brunei</option>
                                                    <option value="BG">Bulgaria</option>
                                                    <option value="BF">Burkina Faso</option>
                                                    <option value="BI">Burundi</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CM">Cameroon</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="CV">Cape Verde</option>
                                                    <option value="KY">Cayman Islands</option>
                                                    <option value="CF">Central African Republic</option>
                                                    <option value="TD">Chad</option>
                                                    <option value="CL">Chile</option>
                                                    <option value="CN">China</option>
                                                    <option value="CX">Christmas Island</option>
                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                    <option value="CO">Colombia</option>
                                                    <option value="KM">Comoros</option>
                                                    <option value="CG">Congo (Brazzaville)</option>
                                                    <option value="CD">Congo (Kinshasa)</option>
                                                    <option value="CK">Cook Islands</option>
                                                    <option value="CR">Costa Rica</option>
                                                    <option value="HR">Croatia</option>
                                                    <option value="CU">Cuba</option>
                                                    <option value="CW">CuraÇao</option>
                                                    <option value="CY">Cyprus</option>
                                                    <option value="CZ">Czech Republic</option>
                                                    <option value="DK">Denmark</option>
                                                    <option value="DJ">Djibouti</option>
                                                    <option value="DM">Dominica</option>
                                                    <option value="DO">Dominican Republic</option>
                                                    <option value="EC">Ecuador</option>
                                                    <option value="EG">Egypt</option>
                                                    <option value="SV">El Salvador</option>
                                                    <option value="GQ">Equatorial Guinea</option>
                                                    <option value="ER">Eritrea</option>
                                                    <option value="EE">Estonia</option>
                                                    <option value="ET">Ethiopia</option>
                                                    <option value="FK">Falkland Islands</option>
                                                    <option value="FO">Faroe Islands</option>
                                                    <option value="FJ">Fiji</option>
                                                    <option value="FI">Finland</option>
                                                    <option value="FR">France</option>
                                                    <option value="GF">French Guiana</option>
                                                    <option value="PF">French Polynesia</option>
                                                    <option value="TF">French Southern Territories</option>
                                                    <option value="GA">Gabon</option>
                                                    <option value="GM">Gambia</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="DE">Germany</option>
                                                    <option value="GH">Ghana</option>
                                                    <option value="GI">Gibraltar</option>
                                                    <option value="GR">Greece</option>
                                                    <option value="GL">Greenland</option>
                                                    <option value="GD">Grenada</option>
                                                    <option value="GP">Guadeloupe</option>
                                                    <option value="GT">Guatemala</option>
                                                    <option value="GG">Guernsey</option>
                                                    <option value="GN">Guinea</option>
                                                    <option value="GW">Guinea-Bissau</option>
                                                    <option value="GY">Guyana</option>
                                                    <option value="HT">Haiti</option>
                                                    <option value="HM">Heard Island and McDonald Islands</option>
                                                    <option value="HN">Honduras</option>
                                                    <option value="HK">Hong Kong</option>
                                                    <option value="HU">Hungary</option>
                                                    <option value="IS">Iceland</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IM">Isle of Man</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="IT">Italy</option>
                                                    <option value="CI">Ivory Coast</option>
                                                    <option value="JM">Jamaica</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="JE">Jersey</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KE">Kenya</option>
                                                    <option value="KI">Kiribati</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Laos</option>
                                                    <option value="LV">Latvia</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="LS">Lesotho</option>
                                                    <option value="LR">Liberia</option>
                                                    <option value="LY">Libya</option>
                                                    <option value="LI">Liechtenstein</option>
                                                    <option value="LT">Lithuania</option>
                                                    <option value="LU">Luxembourg</option>
                                                    <option value="MO">Macao S.A.R., China</option>
                                                    <option value="MK">Macedonia</option>
                                                    <option value="MG">Madagascar</option>
                                                    <option value="MW">Malawi</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="ML">Mali</option>
                                                    <option value="MT">Malta</option>
                                                    <option value="MH">Marshall Islands</option>
                                                    <option value="MQ">Martinique</option>
                                                    <option value="MR">Mauritania</option>
                                                    <option value="MU">Mauritius</option>
                                                    <option value="YT">Mayotte</option>
                                                    <option value="MX">Mexico</option>
                                                    <option value="FM">Micronesia</option>
                                                    <option value="MD">Moldova</option>
                                                    <option value="MC">Monaco</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="ME">Montenegro</option>
                                                    <option value="MS">Montserrat</option>
                                                    <option value="MA">Morocco</option>
                                                    <option value="MZ">Mozambique</option>
                                                    <option value="MM">Myanmar</option>
                                                    <option value="NA">Namibia</option>
                                                    <option value="NR">Nauru</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="NL">Netherlands</option>
                                                    <option value="AN">Netherlands Antilles</option>
                                                    <option value="NC">New Caledonia</option>
                                                    <option value="NZ">New Zealand</option>
                                                    <option value="NI">Nicaragua</option>
                                                    <option value="NE">Niger</option>
                                                    <option value="NG">Nigeria</option>
                                                    <option value="NU">Niue</option>
                                                    <option value="NF">Norfolk Island</option>
                                                    <option value="KP">North Korea</option>
                                                    <option value="NO">Norway</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PS">Palestinian Territory</option>
                                                    <option value="PA">Panama</option>
                                                    <option value="PG">Papua New Guinea</option>
                                                    <option value="PY">Paraguay</option>
                                                    <option value="PE">Peru</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="PN">Pitcairn</option>
                                                    <option value="PL">Poland</option>
                                                    <option value="PT">Portugal</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="IE">Republic of Ireland</option>
                                                    <option value="RE">Reunion</option>
                                                    <option value="RO">Romania</option>
                                                    <option value="RU">Russia</option>
                                                    <option value="RW">Rwanda</option>
                                                    <option value="ST">São Tomé and Príncipe</option>
                                                    <option value="BL">Saint Barthélemy</option>
                                                    <option value="SH">Saint Helena</option>
                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                    <option value="LC">Saint Lucia</option>
                                                    <option value="SX">Saint Martin (Dutch part)</option>
                                                    <option value="MF">Saint Martin (French part)</option>
                                                    <option value="PM">Saint Pierre and Miquelon</option>
                                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                                    <option value="SM">San Marino</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SN">Senegal</option>
                                                    <option value="RS">Serbia</option>
                                                    <option value="SC">Seychelles</option>
                                                    <option value="SL">Sierra Leone</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="SK">Slovakia</option>
                                                    <option value="SI">Slovenia</option>
                                                    <option value="SB">Solomon Islands</option>
                                                    <option value="SO">Somalia</option>
                                                    <option value="ZA">South Africa</option>
                                                    <option value="GS">South Georgia/Sandwich Islands</option>
                                                    <option value="KR">South Korea</option>
                                                    <option value="SS">South Sudan</option>
                                                    <option value="ES">Spain</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SD">Sudan</option>
                                                    <option value="SR">Suriname</option>
                                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                                    <option value="SZ">Swaziland</option>
                                                    <option value="SE">Sweden</option>
                                                    <option value="CH">Switzerland</option>
                                                    <option value="SY">Syria</option>
                                                    <option value="TW">Taiwan</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TZ">Tanzania</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="TL">Timor-Leste</option>
                                                    <option value="TG">Togo</option>
                                                    <option value="TK">Tokelau</option>
                                                    <option value="TO">Tonga</option>
                                                    <option value="TT">Trinidad and Tobago</option>
                                                    <option value="TN">Tunisia</option>
                                                    <option value="TR">Turkey</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="TC">Turks and Caicos Islands</option>
                                                    <option value="TV">Tuvalu</option>
                                                    <option value="UG">Uganda</option>
                                                    <option value="UA">Ukraine</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="GB">United Kingdom (UK)</option>
                                                    <option value="US">USA (US)</option>
                                                    <option value="UY">Uruguay</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VU">Vanuatu</option>
                                                    <option value="VA">Vatican</option>
                                                    <option value="VE">Venezuela</option>
                                                    <option value="VN">Vietnam</option>
                                                    <option value="WF">Wallis and Futuna</option>
                                                    <option value="EH">Western Sahara</option>
                                                    <option value="WS">Western Samoa</option>
                                                    <option value="YE">Yemen</option>
                                                    <option value="ZM">Zambia</option>
                                                    <option value="ZW">Zimbabwe</option>
                                                </select>
                                            </div>
                                            <div className="box-industry mr-20">
                                                <select className="form-input mr-5 select-active input-industry">
                                                    <option value={0}>Industry</option>
                                                    <option value={1}>Software</option>
                                                    <option value={2}>Finance</option>
                                                    <option value={3}>Recruting</option>
                                                    <option value={4}>Management</option>
                                                    <option value={5}>Advertising</option>
                                                    <option value={6}>Development</option>
                                                </select>
                                            </div>
                                            <button className="btn btn-default btn-find font-sm">Search</button>
                                        </form>
                                    </div>
                                    <div className="list-tags-banner mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                                    <span className="color-brand-2 fw-bolder">Popular:</span>
                                        <Link legacyBehavior href="#">
                                            <a>Category endpoint1 </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Category endpoint2 </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Category endpoint3 </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Category endpoint4 </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Category endpoint5 </a>
                                        </Link>
                                        <Link legacyBehavior href="#">
                                            <a>Category endpoint6 </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-70">
                        <div className="container pr-50 pl-50 w-50">
                            <div className="text-center mb-40">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Search Jobs</h2>
                                <p className="fs-5">Find jobs which match your skills</p>
                            </div>
                            <form>
                                <div className="row d-flex align-items-center">
                                    <div className="col-5 d-flex">
                                        <input type="text" placeholder="Jobs By Job Description" />
                                        <div className="d-flex justify-content-center align-items-center inner-button pl-5">
                                            <button><FaMicrophone /></button>
                                        </div>
                                    </div>
                                    <div className="col-5 d-flex">
                                        <input type="text" placeholder="Location"></input>
                                        <div className="d-flex justify-content-center align-items-center inner-button pl-5">
                                            <button><FaMicrophone /></button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-primary">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="container pr-50 pl-50 mt-60 w-50">
                            <div className="text-center mb-40">
                                <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp">Salary Stats</h2>
                                <p className="fs-5">Find out the average pay in your chosen job and region</p>
                            </div>
                            <form>
                                <div className="row d-flex align-items-center">
                                    <div className="col-5 d-flex">
                                        <input type="text" placeholder="Jobs By Job Description" />
                                        <div className="d-flex justify-content-center align-items-center inner-button pl-5">
                                            <button><FaMicrophone /></button>
                                        </div>
                                    </div>
                                    <div className="col-5 d-flex">
                                        <input type="text" placeholder="Location" />
                                        <div className="d-flex justify-content-center align-items-center inner-button pl-5">
                                            <button><FaMicrophone /></button>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-primary">Search</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                </section>
                <section className="section-box mt-70">
                    <div className="post-loop-grid">
                        <div className="container">
                            <div className="row mt-50">
                                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-0 text-center pl-50'>
                                    <div className="row mb-10">
                                        <img src="assets/imgs/page/r&d-tax-credits-calculator/Woman.png" alt="joxBox" />
                                    </div>
                                    <div className="row">
                                        <img src="assets/imgs/page/r&d-tax-credits-calculator/Group.png" alt="joxBox" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 text-center pr-60">
                                    <img src="assets/imgs/page/r&d-tax-credits-calculator/HandsTogether.png" alt="joxBox" />
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <h3 className="mt-15">A Home for the 90%</h3>
                                    <div className="mt-20">
                                        <p className="font-lg color-text-paragraph mt-20">Our social, moral and economic replace with 90% of entrepreneurs fail. We deliver opportunities to upskill the not-yet-ready entrepreneur. Using the knowledge learnt from an unsuccessful business venture, to secure a better paying job locally or nationwide. </p>
                                    </div>
                                    <div className="mt-30">
                                        <a className="btn btn-default fs-6" href="#">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="post-loop-grid">
                        <div className="container">
                            <div className="row mt-30">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <h3 className="mt-15">Great Data</h3>
                                    <div className="mt-20">
                                        <p className="font-lg color-text-paragraph mt-20">Using the best tools is a no brainer. Find local salary and hiring trends so you can get ahead.</p>
                                    </div>
                                </div>
                                <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 p-0 text-center pl-50'>
                                    <div className="row mb-10">
                                        <img src="assets/imgs/page/r&d-tax-credits-calculator/Woman.png" alt="joxBox" />
                                    </div>
                                    <div className="row">
                                        <img src="assets/imgs/page/r&d-tax-credits-calculator/Group.png" alt="joxBox" />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 text-center pr-60">
                                    <img src="assets/imgs/page/r&d-tax-credits-calculator/HandsTogether.png" alt="joxBox" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="post-loop-grid">
                        <div className="container">
                            <div className="row mt-30">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-OinRckvals?si=TUyb8vFa2udkyE4S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <h3 className="mt-15">Section 3</h3>
                                    <div className="mt-20">
                                        <h6 className="mt-20"><strong>Video is to be changed to the correct one</strong></h6>
                                        <p className="font-md color-text-paragraph mt-20">Est Lorem Lorem voluptate mollit est aute aliqua.</p>
                                        <p className="font-md color-text-paragraph mt-20 mb-20">Enim veniam dolor ut velit minim excepteur anim elit aliquip.</p>
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
