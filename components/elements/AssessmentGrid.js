import React, { useState } from 'react'

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
    <div className="list-tabs mb-50 text-center">
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
               <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6" key={key} data-key={key} onClick={data[key].available ? () => clickAction(data,key) : null}>
                  <div className="grid__item white-bg transition-3 mb-30" data-key={key}>
                     <div className="grid__thumb w-img fix grid_thumb_height grid_thumb" data-key={key}>
                        <img src={`assets/imgs/page/entrepreneurial-assessments/${key}.jpg`} alt="Assessment Image" data-key={key} />
                     </div>
                     <div className="grid__content" data-key={key}>
                        <div className="grid__top d-flex">
                           <div className="grid__tag col-6" data-key={key}>
                              <a className="grid__category" data-key={key}>{data[key].category}</a>
                           </div>
                           <div className="grid__price col-6 text-end" data-key={key}>
                              <span data-key={key}>{data[key].price ? data[key].price : "Free"}</span>
                           </div>
                        </div>
                        <h3 className="grid__title fw-bold" data-key={key}>
                           <a data-key={key}>{key.replaceAll("-"," ")}</a>
                        </h3>
                        <p data-key={key}>{data[key].description}</p>
                     </div>
                     <div className="grid__bottom d-flex">
                        <div className="col-6 grid__tutor">
                           <a>
                              {data[key].provider}
                           </a>
                        </div>
                        <div className="col-6 text-end">
                           <a className="grid__complete">

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
