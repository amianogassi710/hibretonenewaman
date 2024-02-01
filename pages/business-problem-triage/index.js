/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useCallback, useRef } from 'react'
import Layout from "../../components/Layout/Layout";
import PieGraph from '../../components/elements/PieGraph';
import BarGraph from '../../components/elements/BarGraph';
import axios from 'axios';

export default function Index() {
  const [data,setData] = useState({})
  const formRef = useRef(null)

  const numToPercent = (num) => {
    return Math.round((num/298) * 10000)/100
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const failure_reason = document.getElementById("failure_reason").value
    const country_of_origin = document.getElementById("country_of_origin").value
    const company_sector = document.getElementById("company_sector").value
    const failure_stage = document.getElementById("failure_stage").value
    const query = {
      "country_of_origin": country_of_origin,
      "company_sector": company_sector,
      "failure_reason": failure_reason,
      "failure_stage": failure_stage
    }

    try {
      const response = await axios.post("/business-problem-triage/get-data", query);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately (e.g., show an error message)
    }
  }


  const categoryData = [
    {"name":"Strategic","value":152},
    {"name":"Environment","value":43},
    {"name":"Finance","value":23},
    {"name":"People","value":12},
    {"name":"Product","value":60},
    {"name":"Customer/User","value":8}
  ]

  const reasonData = [
    {"name":"No Market Need","Percentage":numToPercent(65),"category": "Strategic"},
    {"name":"Competition","Percentage":numToPercent(34),"category": "Environment"},
    {"name":"Acquisition Flu","Percentage":numToPercent(33),"category": "Product"},
    {"name":"Poor Product","Percentage":numToPercent(26),"category": "Product"},
    {"name":"Bad Business Model","Percentage":numToPercent(24),"category": "Strategic"},
    {"name":"Obsolete","Percentage":numToPercent(18),"category": "Strategic"},
    {"name":"Lack of Funds","Percentage":numToPercent(10),"category": "Finance"},
    {"name":"Unprofitable","Percentage":numToPercent(9),"category": "Finance"},
    {"name":"Legal Challenges","Percentage":numToPercent(9),"category": "Environment"},
    {"name":"Failure to Pivot","Percentage":numToPercent(8),"category": "Strategic"}
  ]

  const Results = ({results}) => {
    if (Object.keys(results).length > 0) {
      console.log(results)
      return (
        <section className="section-box mt-30">
         <div className="container">
            <div className="row mt-20 text-center">
              <div className="col">
                <h4>Issue:</h4>
                <strong>{results.closest_reason}</strong>
              </div>
              <div className="col">
                <h4>Category:</h4>
                <strong>{results.failure_category}</strong>
              </div>
            </div>
            <div className="row mt-30 text-center">
              <h3>Company Failure Reason Analysis</h3>
            </div>
            <div className="row mt-20 text-center">
              <div className="col">
                <h4>Problem Overview</h4>
                <p>{Object.values(results.feedback["Problem Overview"])}</p>
              </div>
            </div>
            <div className="row mt-20 text-center">
              <div className="col">
                <h4>Pivots you could use</h4>
                <p>{Object.values(results.feedback["Problem Pivots"])}</p>
              </div>
            </div>
            <div className="row mt-20 text-center">
              <div className="col">
                <h4>Resources</h4>
                <p>{Object.values(results.feedback["Resources"])}</p>
              </div>
            </div>
            <div className="row mt-20 text-center">
              <div className="col">
                <h6>Examples of Businesses that suceeded in pivoting</h6>
                <p>{Object.values(results.feedback["Pivot Successes"])}</p>
              </div>
              <div className="col">
                <h6>Examples of Businesses that failed in pivoting</h6>
                <p>{Object.values(results.feedback["Failures"])}</p>
              </div>
            </div>
         </div>
        </section>
      )
    } else {
      return null;
    }
  }

    return (
        <>
            <Layout>
                <div>
                    <section className="section-box">
                        <div className="banner-hero hero-3">
                            <div className="banner-inner">
                                <div className="block-banner text-start">
                                    <h2 className="text-42 color-white wow animate__animated animate__fadeInRight">
                                        Business Problem <span className="color-brand-2 fw-bolder">Triage</span>
                                    </h2>
                                    <p className="font-lg font-regular color-white mt-20 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                                        Tried and tested options for your business problems,<br />empowering and informing your decision making
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box mt-50">
                      <div className="container">
                        <div className="row d-flex justify-content-center">
                          <div className=" col-lg-8 col-md-12 text-center">
                            <h2>Proven Choices to Business Problems</h2>
                            <form className="mt-20" onSubmit={handleOnSubmit}>
                              <div className="row mb-20">
                                <div className="col">
                                  <div className="box-industry">
                                      <select id="country_of_origin" className="form-input select-active input-location dropdown">
                                          <option value>Country of Origin</option>
                                          <option value="Aland Islands">Aland Islands</option>
                                          <option value="Afghanistan">Afghanistan</option>
                                          <option value="Albania">Albania</option>
                                          <option value="Algeria">Algeria</option>
                                          <option value="Andorra">Andorra</option>
                                          <option value="Angola">Angola</option>
                                          <option value="Anguilla">Anguilla</option>
                                          <option value="Antarctica">Antarctica</option>
                                          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                          <option value="Argentina">Argentina</option>
                                          <option value="Armenia">Armenia</option>
                                          <option value="Aruba">Aruba</option>
                                          <option value="Australia">Australia</option>
                                          <option value="Austria">Austria</option>
                                          <option value="Azerbaijan">Azerbaijan</option>
                                          <option value="Bahamas">Bahamas</option>
                                          <option value="Bahrain">Bahrain</option>
                                          <option value="Bangladesh">Bangladesh</option>
                                          <option value="Barbados">Barbados</option>
                                          <option value="Belarus">Belarus</option>
                                          <option value="Belau">Belau</option>
                                          <option value="Belgium">Belgium</option>
                                          <option value="Belize">Belize</option>
                                          <option value="Benin">Benin</option>
                                          <option value="Bermuda">Bermuda</option>
                                          <option value="Bhutan">Bhutan</option>
                                          <option value="Bolivia">Bolivia</option>
                                          <option value="Bonaire, Saint Eustatius and Saba">Bonaire, Saint Eustatius and Saba</option>
                                          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                          <option value="Botswana">Botswana</option>
                                          <option value="Bouvet Island">Bouvet Island</option>
                                          <option value="Brazil">Brazil</option>
                                          <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                          <option value="British Virgin Islands">British Virgin Islands</option>
                                          <option value="Brunei">Brunei</option>
                                          <option value="Bulgaria">Bulgaria</option>
                                          <option value="Burkina Faso">Burkina Faso</option>
                                          <option value="Burundi">Burundi</option>
                                          <option value="Cambodia">Cambodia</option>
                                          <option value="Cameroon">Cameroon</option>
                                          <option value="Canada">Canada</option>
                                          <option value="Caper Verde">Cape Verde</option>
                                          <option value="Cayman Islands">Cayman Islands</option>
                                          <option value="Central African Republic">Central African Republic</option>
                                          <option value="Chad">Chad</option>
                                          <option value="Chile">Chile</option>
                                          <option value="China">China</option>
                                          <option value="Christmas Island">Christmas Island</option>
                                          <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                          <option value="Colombia">Colombia</option>
                                          <option value="Comoros">Comoros</option>
                                          <option value="Congo (Brazzaville)">Congo (Brazzaville)</option>
                                          <option value="Congo (Kinshasa)">Congo (Kinshasa)</option>
                                          <option value="Cook Islands">Cook Islands</option>
                                          <option value="Costa Rica">Costa Rica</option>
                                          <option value="Croatia">Croatia</option>
                                          <option value="Cuba">Cuba</option>
                                          <option value="CuraÇao">CuraÇao</option>
                                          <option value="Cyprus">Cyprus</option>
                                          <option value="Czech Republic">Czech Republic</option>
                                          <option value="Denmark">Denmark</option>
                                          <option value="Djibouti">Djibouti</option>
                                          <option value="Dominica">Dominica</option>
                                          <option value="Dominican Republic">Dominican Republic</option>
                                          <option value="Ecuador">Ecuador</option>
                                          <option value="Egypt">Egypt</option>
                                          <option value="El Salvador">El Salvador</option>
                                          <option value="Equatorial Guinea">Equatorial Guinea</option>
                                          <option value="Eritrea">Eritrea</option>
                                          <option value="Estonia">Estonia</option>
                                          <option value="Ethiopia">Ethiopia</option>
                                          <option value="Falkland Islands">Falkland Islands</option>
                                          <option value="Faroe Islands">Faroe Islands</option>
                                          <option value="Fiji">Fiji</option>
                                          <option value="Finland">Finland</option>
                                          <option value="France">France</option>
                                          <option value="French Guiana">French Guiana</option>
                                          <option value="French Polynesia">French Polynesia</option>
                                          <option value="French Southern Territories">French Southern Territories</option>
                                          <option value="Gabon">Gabon</option>
                                          <option value="Gambia">Gambia</option>
                                          <option value="Georgia">Georgia</option>
                                          <option value="Germany">Germany</option>
                                          <option value="Ghana">Ghana</option>
                                          <option value="Gibraltar">Gibraltar</option>
                                          <option value="Greece">Greece</option>
                                          <option value="Greenland">Greenland</option>
                                          <option value="Grenada">Grenada</option>
                                          <option value="Guadeloupe">Guadeloupe</option>
                                          <option value="Guatemala">Guatemala</option>
                                          <option value="Guernsey">Guernsey</option>
                                          <option value="Guinea">Guinea</option>
                                          <option value="Guinea-Bissau">Guinea-Bissau</option>
                                          <option value="Guyana">Guyana</option>
                                          <option value="Haiti">Haiti</option>
                                          <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                          <option value="Honduras">Honduras</option>
                                          <option value="Hong Kong">Hong Kong</option>
                                          <option value="Hungary">Hungary</option>
                                          <option value="Iceland">Iceland</option>
                                          <option value="India">India</option>
                                          <option value="Indonesia">Indonesia</option>
                                          <option value="Iran">Iran</option>
                                          <option value="Iraq">Iraq</option>
                                          <option value="Isle of Man">Isle of Man</option>
                                          <option value="Israel">Israel</option>
                                          <option value="Italy">Italy</option>
                                          <option value="Ivory Coast">Ivory Coast</option>
                                          <option value="Jamaica">Jamaica</option>
                                          <option value="Japan">Japan</option>
                                          <option value="Jersey">Jersey</option>
                                          <option value="Jordan">Jordan</option>
                                          <option value="Kazakhstan">Kazakhstan</option>
                                          <option value="Kenya">Kenya</option>
                                          <option value="Kiribati">Kiribati</option>
                                          <option value="Kuwait">Kuwait</option>
                                          <option value="Kyrgyzstan">Kyrgyzstan</option>
                                          <option value="Laos">Laos</option>
                                          <option value="Latvia">Latvia</option>
                                          <option value="Lebanon">Lebanon</option>
                                          <option value="Lesotho">Lesotho</option>
                                          <option value="Liberia">Liberia</option>
                                          <option value="Libya">Libya</option>
                                          <option value="Liechtenstein">Liechtenstein</option>
                                          <option value="Lithuania">Lithuania</option>
                                          <option value="Luxembourg">Luxembourg</option>
                                          <option value="Macao S.A.R., China">Macao S.A.R., China</option>
                                          <option value="Macedonia">Macedonia</option>
                                          <option value="Madagascar">Madagascar</option>
                                          <option value="Malawi">Malawi</option>
                                          <option value="Malaysia">Malaysia</option>
                                          <option value="Maldives">Maldives</option>
                                          <option value="Mali">Mali</option>
                                          <option value="Malta">Malta</option>
                                          <option value="Marshall Islands">Marshall Islands</option>
                                          <option value="Martinique">Martinique</option>
                                          <option value="Mauritania">Mauritania</option>
                                          <option value="Mauritius">Mauritius</option>
                                          <option value="Mayotte">Mayotte</option>
                                          <option value="Mexico">Mexico</option>
                                          <option value="Micronesia">Micronesia</option>
                                          <option value="Moldova">Moldova</option>
                                          <option value="Monaco">Monaco</option>
                                          <option value="Mongolia">Mongolia</option>
                                          <option value="Montenegro">Montenegro</option>
                                          <option value="Montserrat">Montserrat</option>
                                          <option value="Morocco">Morocco</option>
                                          <option value="Mozambique">Mozambique</option>
                                          <option value="Myanmar">Myanmar</option>
                                          <option value="Namibia">Namibia</option>
                                          <option value="Nauru">Nauru</option>
                                          <option value="Nepal">Nepal</option>
                                          <option value="Netherlands">Netherlands</option>
                                          <option value="Netherlands Antilles">Netherlands Antilles</option>
                                          <option value="New Caledonia">New Caledonia</option>
                                          <option value="New Zealand">New Zealand</option>
                                          <option value="Nicaragua">Nicaragua</option>
                                          <option value="Niger">Niger</option>
                                          <option value="Nigeria">Nigeria</option>
                                          <option value="Niue">Niue</option>
                                          <option value="Norfolk Island">Norfolk Island</option>
                                          <option value="North Korea">North Korea</option>
                                          <option value="Norway">Norway</option>
                                          <option value="Oman">Oman</option>
                                          <option value="Pakistan">Pakistan</option>
                                          <option value="Palestinian Territory">Palestinian Territory</option>
                                          <option value="Panama">Panama</option>
                                          <option value="Papua New Guinea">Papua New Guinea</option>
                                          <option value="Paraguay">Paraguay</option>
                                          <option value="Peru">Peru</option>
                                          <option value="Philippines">Philippines</option>
                                          <option value="Pitcairn">Pitcairn</option>
                                          <option value="Poland">Poland</option>
                                          <option value="Portugal">Portugal</option>
                                          <option value="Qatar">Qatar</option>
                                          <option value="Republic of Ireland">Republic of Ireland</option>
                                          <option value="Reunion">Reunion</option>
                                          <option value="Romania">Romania</option>
                                          <option value="Russia">Russia</option>
                                          <option value="Rwanda">Rwanda</option>
                                          <option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
                                          <option value="Saint Barthélemy">Saint Barthélemy</option>
                                          <option value="Saint Helena">Saint Helena</option>
                                          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                          <option value="Saint Lucia">Saint Lucia</option>
                                          <option value="Saint Martin (Dutch part)">Saint Martin (Dutch part)</option>
                                          <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                                          <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                          <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                          <option value="San Marino">San Marino</option>
                                          <option value="Saudi Arabia">Saudi Arabia</option>
                                          <option value="Senegal">Senegal</option>
                                          <option value="Serbia">Serbia</option>
                                          <option value="Seychelles">Seychelles</option>
                                          <option value="Sierra Leone">Sierra Leone</option>
                                          <option value="Singapore">Singapore</option>
                                          <option value="Slovakia">Slovakia</option>
                                          <option value="Slovenia">Slovenia</option>
                                          <option value="Solomon Islands">Solomon Islands</option>
                                          <option value="Somalia">Somalia</option>
                                          <option value="South Africa">South Africa</option>
                                          <option value="South Georgia/Sandwich Islands">South Georgia/Sandwich Islands</option>
                                          <option value="South Korea">South Korea</option>
                                          <option value="South Sudan">South Sudan</option>
                                          <option value="Spain">Spain</option>
                                          <option value="Sri Lanka">Sri Lanka</option>
                                          <option value="Sudan">Sudan</option>
                                          <option value="Suriname">Suriname</option>
                                          <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                          <option value="Swaziland">Swaziland</option>
                                          <option value="Sweden">Sweden</option>
                                          <option value="Switzerland">Switzerland</option>
                                          <option value="Syria">Syria</option>
                                          <option value="Taiwan">Taiwan</option>
                                          <option value="Tajikistan">Tajikistan</option>
                                          <option value="Tanzania">Tanzania</option>
                                          <option value="Thailand">Thailand</option>
                                          <option value="Timor-Leste">Timor-Leste</option>
                                          <option value="Togo">Togo</option>
                                          <option value="Tokelau">Tokelau</option>
                                          <option value="Tonga">Tonga</option>
                                          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                          <option value="Tunisia">Tunisia</option>
                                          <option value="Turkey">Turkey</option>
                                          <option value="Turkmenistan">Turkmenistan</option>
                                          <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                          <option value="Tuvalu">Tuvalu</option>
                                          <option value="Uganda">Uganda</option>
                                          <option value="Ukraine">Ukraine</option>
                                          <option value="United Arab Emirates">United Arab Emirates</option>
                                          <option value="United Kingdom">United Kingdom</option>
                                          <option value="United States">United States</option>
                                          <option value="Uruguay">Uruguay</option>
                                          <option value="Uzbekistan">Uzbekistan</option>
                                          <option value="Vanuatu">Vanuatu</option>
                                          <option value="Vatican">Vatican</option>
                                          <option value="Venezuela">Venezuela</option>
                                          <option value="Vietnam">Vietnam</option>
                                          <option value="Wallis and Futuna">Wallis and Futuna</option>
                                          <option value="Western Sahara">Western Sahara</option>
                                          <option value="Western Samoa">Western Samoa</option>
                                          <option value="Yemen">Yemen</option>
                                          <option value="Zambia">Zambia</option>
                                          <option value="Zimbabwe">Zimbabwe</option>
                                      </select>
                                  </div>
                                </div>
                                <div className="col">
                                  <select id="company_sector" className="form-input mr-4 select-active input-location dropdown">
                                    <option>Company Sector</option>
                                    <option value="Finances">Finances</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="E-Commerce">E-Commerce</option>
                                    <option value="Social Media">Social Media</option>
                                    <option value="Productivity">Productivity</option>
                                    <option value="Music">Music</option>
                                    <option value="Travel">Travel</option>
                                    <option value="Food & Beverage">Food & Beverage</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Software & Hardware">Software & Hardware</option>
                                    <option value="Design">Design</option>
                                    <option value="Education">Education</option>
                                    <option value="Transportation">Transportation</option>
                                    <option value="Analytics">Analytics</option>
                                    <option value="Health">Health</option>
                                    <option value="Unsure">Unsure</option>
                                  </select>
                                </div>
                                <div className="col">
                                  <select id="failure_stage" className="form-input select-active input-location dropdown">
                                    <option>Failure Stage</option>
                                    <option value="Startup">Startup</option>
                                    <option value="Scaleup">Scaleup</option>
                                    <option value="Maturity">Maturity</option>
                                    <option value="Decline">Decline</option>
                                    <option value="Unsure">Unsure</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <input id="failure_reason" type="text" className="fs-6" ref={formRef} placeholder="Describe your business problem" />
                                </div>
                                <div className="col-2 text-end">
                                  <button type="submit" className="btn btn-default" onClick={handleOnSubmit}>Search</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </section>
                    <Results results={data} />
                    <section className="section-box mt-30 text-center">
                      <div className="row">
                        <div className="text-center col-md-6">
                          <h3 className="mb-10">Failure Categories</h3>
                          <PieGraph data={categoryData} />
                        </div>
                        <div className="text-center col-md-6">
                          <h3>Top 10 Failure Reasons</h3>
                          <BarGraph data={reasonData} />
                        </div>
                      </div>
                    </section>
                </div>
            </Layout>
        </>
    );
};
