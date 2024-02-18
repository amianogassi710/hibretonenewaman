import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout'
import axios from 'axios';
import Loading from '../../components/elements/Loading';
import { useRouter } from 'next/navigation';
import Subscription from '../../components/Layout/Subscription';
import Grid from '../../components/elements/Grid';
import YellowBanner from '../../components/elements/YellowBanner'
import KickstartButton from '../../components/elements/KickstartButton'

export default function Index() {
  const [data,setData] = useState({})
  const [categories,setCategories] = useState({})
  const [selectedCategory,setSelectedCategory] = useState(0)
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();


  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(`/alison-courses/courses`)
        setData(response.data.data)
      } catch (error) {
        console.log("Couldn't retrieve quiz: ", error);
      }
    };
    getCourses();
  },[])

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(`/alison-courses/categories`)
        setCategories(response.data.data)
      } catch (error) {
        console.log("Couldn't retrieve quiz: ", error);
      }
    };
    getCategories();
  },[])

  const handleCategoryFilter = async (id) => {
    setSelectedCategory(id)
    if (id === 0) {
      try {
        const response = await axios.get(`/alison-courses/categories`)
        setCategories(response.data.data)
      } catch (error) {
        console.log("Couldn't retrieve quiz: ", error);
      }
      return
    }
    try {
      const query = {
        "page": 1,
        "category_id": id
      }
      console.log(query)
      const response = await axios.get('alison-courses/courses',{
        params: query
      })
      setData(response.data.data)
    } catch (error) {
      console.log("Couldn't retrieve course: ", error)
    }
  }


  // Render nothing if data is not available yet
  if (Object.keys(data).length === 0 || Object.keys(categories).length === 0) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  // handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    if (!searchValue) {

    }
    else {
      dispatch(searchText(searchValue))
      router.push('/search-courses')
    }
  }

  const filteredCategories = categories.filter(({
    courses_count
  }) => courses_count > 0)

  return (
    <>
    <Layout>
      <section className="course__area pt-115 pb-90 grey-bg-3">
        <div className="container">

          <div className="row">
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="course__sidebar">
                <div className="course__sidebar-widget white-bg">
                  <div className="course__sidebar-search">
                    <form onSubmit={handleSubmit}>
                      <input onChange={(e) => setSearchValue(e.target.value)} type="text"
                        placeholder="Search for courses..." />
                    </form>
                  </div>
                </div>
                <div className="course__sidebar-widget white-bg">
                  <div className="course__sidebar-info">
                    <h3 className="course__sidebar-title">Categories</h3>
                    <ul>
                      <li>
                        <div className="course__sidebar-check mb-10 d-flex align-items-center" onClick={() => handleCategoryFilter(0)}>
                          <input type="radio" readOnly checked={selectedCategory === 0 ? "checked" : ""} />
                          <label>All</label>
                        </div>
                      </li>
                      {filteredCategories.map((category) => (
                        <li>
                          <div className="course__sidebar-check mb-10 d-flex align-items-center" onClick={() => handleCategoryFilter(category.id)}>
                            <input type="radio" readOnly checked={selectedCategory === category.id ? "checked" : ""}/>
                            <label> {category.code.toUpperCase().replaceAll("-"," ")} </label>
                          </div>
                        </li>
                      ))}

                    </ul>

                  </div>
                </div>

              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8">

              <div className="row">
                <div className="col-12">
                  <div className="course__tab-content">
                    <div className="tab-content" id="courseTabContent">
                      <div className="tab-pane fade show active" id="grid" role="tabpanel" aria-labelledby="grid-tab">
                        <div className="row">
                          <Grid data={data} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
}
