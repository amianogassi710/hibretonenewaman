import React, { useState, useEffect } from 'react';

const articles = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/659f692a58c4c92e1ba7dd66767d5d22e36708d9c78aaff8d4b3855bb30441a2?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    title: "11 Tips for Entrepreneur Programme Success",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2809ca4e548c3e7cf7d01e18bb676d51ed69d37522e8a52e94790a199e2754d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    author: "Debbie Lewis",
    date: "25 April 2024"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/12ec7b0bceb254d0bce1a5e8e4dfa2358674a310534fef82a99a9f7c3c363a4a?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    title: "11 Tips for Student Work Placement Success",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/59f4eb8d9bc34f0d6dea5131121a0bff828e6d6b860ac2d900734190fd28ed5d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    author: "David Bond", 
    date: "25 April 2024"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d579b7d7a82a6dc86c7b8f113ddc9b245b842e43245ee7b40bf48c2009dfa85?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    title: "11 Tips to Help and Build Upskill Your Career",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/82f5e1eb030c30ffeb4458f496855f4a21f400c092e9a4a223b6baccfd1eb286?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    author: "Denise Myers",
    date: "27 April 2024"
  }, {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/659f692a58c4c92e1ba7dd66767d5d22e36708d9c78aaff8d4b3855bb30441a2?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    title: "11 Tips for Entrepreneur Programme Success",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2809ca4e548c3e7cf7d01e18bb676d51ed69d37522e8a52e94790a199e2754d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    author: "Debbie Lewis",
    date: "25 April 2024"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/12ec7b0bceb254d0bce1a5e8e4dfa2358674a310534fef82a99a9f7c3c363a4a?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    title: "11 Tips for Student Work Placement Success",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/59f4eb8d9bc34f0d6dea5131121a0bff828e6d6b860ac2d900734190fd28ed5d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    author: "David Bond", 
    date: "25 April 2024"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d579b7d7a82a6dc86c7b8f113ddc9b245b842e43245ee7b40bf48c2009dfa85?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    title: "11 Tips to Help and Build Upskill Your Career",
    authorImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/82f5e1eb030c30ffeb4458f496855f4a21f400c092e9a4a223b6baccfd1eb286?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&",
    author: "Denise Myers",
    date: "27 April 2024"
  },

];

export default function MyComponent() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(articles.length - 3, prevIndex + 1));
  };

  return (

    <>

      <div className="container">
        <style jsx>
          {` 
                    
.container {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
  }
  
  @media (max-width: 991px) {
    .container {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      align-items: stretch;
    }

    .swipertitle1{
      margin-top:274px;
    }
  }
  
  .logo {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 50px;
    align-self: stretch;
    margin: auto 0;
  }
  
  .articles-container {
    align-self: stretch;
    flex-grow: 1;
    flex-basis: auto;
  }
  
  @media (max-width: 991px) {
    .articles-container {
      max-width: 100%;
    }
  }
  
  .articles-grid {
    gap: 20px;
    display: flex;
  }
  
  @media (max-width: 991px) {
    .articles-grid {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }
  }
  
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 0;
  }
  
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  
  .article-card {
    justify-content: center;
    border-radius: 16px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    color: #fff;
  }
  
  @media (max-width: 991px) {
    .article-card {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  
  .article-image-wrapper {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        height: 450px; /* Set the height to 558px */
        width: 100%;
        padding-top: 59px;

          border-radius: 16px;
          border: 1px solid rgba(224, 230, 246, 1);
          /* Ensure each card fills the height of its container */
        }
  }
  
  @media (max-width: 991px) {
    .article-image-wrapper {
      max-width: 100%;
      height: auto; /* Adjust for smaller screens */

    }
  }
  
  .article-image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .article-content {
    position: relative;
    border-radius: 16px;
    background: linear-gradient(181deg, rgba(0, 14, 27, 0) 23.14%, rgba(0, 14, 27, 0.96) 98.94%);
    display: flex;
    flex-direction: column;
    padding: 80px 36px 29px;
  }
  
  @media (max-width: 991px) {
    .article-content {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  
  .article-title {
    margin-top: 259px;
    font: 700 28px Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
  }
  
  @media (max-width: 991px) {
    .article-title {
      margin-top: 40px;
    }
  }
  
  .article-meta {
    display: flex;
    margin-top: 25px;
    gap: 13px;
    font-size: 18px;
    font-weight: 500;
    line-height: 167%;
  }
  
  .author-image {
    aspect-ratio: 1.03;
    object-fit: auto;
    object-position: center;
    width: 37px;
  }
  
  .article-meta-details {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin: auto 0;
  }
  
  .article-author,
  .article-date {
    font-family: Plus Jakarta Sans, -apple-system, Roboto, Helvetica, sans-serif;
  }
  
  .column-2,
  .column-3 {
    margin-left: 20px;
  }
  `}</style>


        <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c658ccb5a89c8b196706d39f3080fe9aec5fca63395c6bacc09940807e1a2dd6?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&" 
        alt="" className="logo" 
        onClick={handlePrevious} 
        />

        <div className="articles-container">
          <div className="articles-grid">
            {/* Render only 3 visible slides */}
            {articles.slice(currentIndex, currentIndex + (isMobile ? 1 : 3)).map((article, index) => (

              <div key={index} className={`column column-${index + 1}`}>
                <article className="article-card">
                  <div className="article-image-wrapper">
                    <img src={article.image} alt={article.title} className="article-image" />
                    <div className="article-content">
                      <a href="blog-page/BlogInnerPage"> <h3 className="swipertitle1">{article.title}</h3> </a>
                      <div className="author-info-container">
                        <img src={article.authorImage} alt={article.author} className="author-image" style={{ marginRight: '10px' }} />
                        <span className="swiperdate-blogpage" style={{ marginRight: '20px' }}>{article.author} </span>
                        <span className="swiperdate-blogpage">{article.date}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
        <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2337491ace933b4787201406e5daad90ed836fd3e530ce3a96946f5557244025?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&" 
        alt="" className="logo" 
        onClick={handleNext} 
        />

      </div>

    </>
  );
}