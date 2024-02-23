import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

function Grid({ data, clickAction }) {
   const [active, setActive] = useState(1);
   const [selectedCategory,setSelectedCategory] = useState("All")


   const handleOnClick = (index,category) => {
       setActive(index);
       setSelectedCategory(category)
   };

   const filteredData = selectedCategory === "All" ? data:
   Object.keys(data).reduce((filtered,key) => {
      if (data[key].category === selectedCategory) {
         filtered[key] = data[key]
      }
      return filtered
   },{})

  return (
    <>
    <div className="list-tabs mb-50 d-flex justify-content-center">
        <ul className="nav nav-tabs" role="tablist">
            <li>
                <a className={active === 1 ? "active" : ""} onClick={() => handleOnClick(1,"All")}>All</a>
                </li>
            <li>
                <a className={active === 2 ? "active" : ""} onClick={() => handleOnClick(2,"Strategic")}>Strategic</a>
                </li>
            <li>
                <a className={active === 3 ? "active" : ""}onClick={() => handleOnClick(3,"People")}>People</a>
                </li>
            <li>
                <a className={active === 4 ? "active" : ""} onClick={() => handleOnClick(4,"Environment")} >Environment</a>
                </li>
            <li>
                <a className={active === 5 ? "active" : ""} onClick={() => handleOnClick(5,"Product")} >Product</a>
                </li>
            <li>
                <a className={active === 6 ? "active" : ""} onClick={() => handleOnClick(6,"Users")} >Users</a>
                </li>
            <li>
                <a className={active === 7 ? "active" : ""} onClick={() => handleOnClick(7,"Finance")} >Finance</a>
                </li>
        </ul>
    </div>
      <div className="row">
        {Object.keys(filteredData).map((key) => (
               <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6" key={key} data-key={key} onClick={data[key].available ? () => clickAction(data[key],key) : null}>
                  <div className="grid__item white-bg transition-3 mb-30" data-key={key}>
                     <div className="grid__thumb w-img fix grid_thumb_height grid_thumb" data-key={key}>
                        <div className="grid__tag" data-key={key}>
                           <a className="grid__category" data-key={key}>{data[key].category}</a>
                        </div>
                        <img src={`assets/imgs/page/entrepreneurial-assessments/${key}.jpg`} alt="Assessment Image" data-key={key} />
                     </div>
                     <div className="grid__content" data-key={key}>
                        <div className="grid__top d-flex align-items-center">
                           <h3 className="grid__title fw-bold col-10" data-key={key}>
                              <a data-key={key}>{key.replaceAll("-"," ")}</a>
                           </h3>
                           <div className="col-2 grid__progress_circle mr-10 d-flex justify-content-end">
                              <CircularProgressbar
                                 strokeWidth={15}
                                 value={50}
                                 text={`${50}%`}
                                 styles={buildStyles({
                                    textSize: '25px',
                                    pathColor: '#3AAB67',
                                    textColor: '#000000'
                                 })}
                              />
                           </div>
                        </div>
                        <p data-key={key}>{data[key].description}</p>
                     </div>
                     <div className="grid__bottom">
                        <div className="grid__tutor">
                           <a>
                              {data[key].provider}
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
      </div>

   </>
  )
}

export default Grid
