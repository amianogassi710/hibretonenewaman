import { useRouter } from "next/navigation"

function Grid({ data }) {

   const router = useRouter()

   const handleOnClick = ({id}) => {
      router.push(`/online-courses/${id}`)
   }

  return (
    <>
      <div className="row">
        {data["data"].map((key) => (
               <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6" data-key={key} onClick={() => handleOnClick(key)}>
                  <div className="grid__item white-bg transition-3 mb-30" data-key={key}>
                     <div className="grid__thumb w-img fix grid_thumb_height grid_thumb" data-key={key}>
                        <img src={key.image} alt="Assessment Image" data-key={key} style={{"width": "100%"}} />
                     </div>
                     <div className="grid__content" data-key={key}>
                        <div className="grid__top d-flex">
                           <div className="grid__tag col-12 mb-20" data-key={key}>
                              {key.categories.map((category) => (
                                 <span className="grid__category mr-10 fw-bold" data-key={key}>{category.code.replaceAll("-"," ").toUpperCase()}</span>
                              ))}
                           </div>
                        </div>
                        <h3 className="grid__title fw-bold pr-5 pl-5" data-key={key}>
                           <a data-key={key}>{key.name}</a>
                        </h3>
                     </div>
                     <div className="grid__bottom d-flex">
                        <div className="col-6 grid__tutor">
                           <a>
                              Provider
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
