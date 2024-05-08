import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import Subscription from '../../components/Layout/Subscription';
import KickstartButton from "../../components/elements/KickstartButton";
import { IoShareSocialOutline } from "react-icons/io5";

export default function BlogInnerPage() {
    return (
        <>
            <Layout>
                <div className="background-random-bloginnerpage">

                    <section className="section-box">
                        <div className="banner-hero-blog bg-img-blog-inner">
                            <div className="col">
                                <div>
                                    <img src="../assets/imgs/page/blog-page/BlogHero1.jpg" />
                                    <div style={{ position: 'absolute', top: '20%', left: '6.7%' }}>
                                        <div className="builder-hero-heading">Blog</div>
                                        <div className="builder-hero-subheading">Get the latest news, updates and tips</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section-box">
                        <div className="archive-header-blogpage pt-50 text-center">
                            <div className="container-blog-innerpage">
                                <div className="box-white">
                                    <div className="max-width-single">
                                        <Link legacyBehavior href="#">
                                            <a className="btn btn-tag" style={{ fontSize: '18px' }}>People</a>
                                        </Link>

                                        <h2 className="mt-20 component-title-blog-innerpage">11 Tips to Help You Get New Clients Through Cold Calling</h2>
                                        <div className="share-icon-container-bloginnerpage">
                                            <IoShareSocialOutline className="share-icon-bloginnerpage" />
                                        </div>
                                        <div className="mt-30 mt-30-20 post-meta text-muted d-flex align-items-center mx-auto justify-content-center">

                                            <div className="author d-flex align-items-center mr-30">
                                                <img alt="jobBox" src="https://cdn.builder.io/api/v1/image/assets/TEMP/59f4eb8d9bc34f0d6dea5131121a0bff828e6d6b860ac2d900734190fd28ed5d?apiKey=f6a6ad117fb14da0acc6aa0c9555a986&"
                                                />
                                                <span style={{ fontSize: '16px' }}>David Bond</span>
                                            </div>
                                            <div className="date">
                                                <span className="font-xs color-text-paragraph-2 mr-20 d-inline-block" style={{ fontSize: '16px !important' }}>
                                                    <img className="img-middle mr-5" src="../assets/imgs/page/blog-page/calendar.svg" /> 25 April 2024
                                                </span>
                                                <span className="font-xs color-text-paragraph-2 d-inline-block" style={{ fontSize: '16px !important' }}>
                                                    <img className="img-middle mr-5" src="../assets/imgs/page/blog-page/time.svg" /> 4 mins to read
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="post-loop-grid mt-50 mt-50-0-blog-innerpage mb-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto">
                                    <div className="max-width-single">
                                        <div className="content-single-bloginnerpage-introduction">
                                            Discover 11 essential tips for entrepreneurs looking to succeed in the UK's competitive business landscape.
                                        </div>
                                        <div className="content-single-bloginnerpage-introduction mt-30">
                                            From networking strategies to financial planning advice, this programme offers valuable insights to help you navigate the challenges of starting and growing a business.
                                        </div>
                                    </div>
                                    <div className="mt-60 mt-60-30">
                                        <img src="../assets/imgs/page/blog-page/BlogInnerPageMidImage.png" className="image-borderradius" />
                                    </div>
                                    <div className="max-width-single mt-50 mt-50-30-30">
                                        <div className="content-single-bloginnerpage">
                                            <div className="title-after-image-blog-innerpage">
                                                Simple advice to ensure you achieve the most at your entrepreneur hub
                                            </div>
                                            <ul>
                                                <div className="ul-title-after-image-blog-innerpage mt-30">
                                                    Simple advice to ensure you make the most of your entrepren
                                                </div>
                                                <li className="mt-30">
                                                    1. Research and Choose the Right Programme <br />
                                                    Before diving into any entrepreneur programme, it is crucial to research and choose the right one that aligns with your business goals and aspirations. Look for programmes that offer mentorship, funding opportunities, and networking events to help you grow your business effectively.
                                                </li>
                                                <li>
                                                    2. Set Clear Goals and Objectives <br />
                                                    Define clear and achievable goals and objectives for your participation in the entrepreneur programme. Whether it is to increase revenue, expand your customer base, or launch a new product, having a clear direction will help you stay focused and motivated throughout the programme.
                                                </li>
                                                <li>
                                                    3. Build a Strong Network <br />
                                                    Networking is key to success in any entrepreneur programme. Connect with fellow entrepreneurs, mentors, investors, and industry experts to expand your network and gain valuable insights and support for your business.
                                                </li>
                                                <li>
                                                    4. Stay Committed and Consistent <br />
                                                    Success in an entrepreneur programme requires commitment and consistency. Stay dedicated to your goals, attend all programme activities, and actively participate in workshops and mentoring sessions to make the most of the opportunities available to you.
                                                </li>
                                                <li>
                                                    5. Seek Feedback and Learn from Mistakes <br />
                                                    Feedback is essential for growth and improvement in any entrepreneur programme. Be open to receiving feedback from mentors, peers, and experts, and use it to identify areas for improvement and make necessary adjustments to your business strategy.
                                                </li>
                                                <li>
                                                    6. Embrace Innovation and Creativity <br />
                                                    Entrepreneur programmes are a great opportunity to showcase your innovation and creativity. Think outside the box, explore new ideas, and experiment with different approaches to solving business challenges and achieving your goals.
                                                </li>
                                                <li>
                                                    7. Stay Updated on Industry Trends <br />
                                                    Stay informed about the latest industry trends, market developments, and competitor activities to stay ahead of the curve in the entrepreneur programme. Knowledge is power, and being up-to-date on industry insights can help you make informed decisions and strategic moves for your business.
                                                </li>
                                                <li>
                                                    8. Manage Your Time Effectively <br />
                                                    Time management is crucial for success in any entrepreneur programme. Prioritize your tasks, set deadlines, and create a schedule that allows you to balance your business responsibilities with programme activities effectively.
                                                </li>
                                                <li>
                                                    9. Be Adaptable and Flexible <br />
                                                    Flexibility is key to navigating the challenges and uncertainties of an entrepreneur programme. Be open to change, adapt to new circumstances, and pivot your business strategy as needed to respond to market dynamics and emerging opportunities.
                                                </li>
                                                <li>
                                                    10. Celebrate Achievements and Milestones <br />
                                                    Recognize and celebrate your achievements and milestones throughout the entrepreneur programme. Acknowledge your progress, reward yourself for reaching goals, and take time to reflect on your successes and lessons learned along the way.
                                                </li>
                                                <li className="mb-0">
                                                    11. Stay Positive and Resilient <br />
                                                    Maintain a positive mindset and resilient attitude in the face of challenges and setbacks in the entrepreneur programme. Entrepreneurship is a journey filled with ups and downs, and staying positive and resilient is essential for overcoming obstacles and staying focused on your goals.
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <div className="slug mt-50 mt-50-30-30">
                                                Slug
                                            </div>
                                            <ul className="show-bullet">
                                                <li>
                                                    11-tips-entrepreneur-programme-success-uk
                                                </li>
                                            </ul>
                                            <div className="slug mt-30">
                                                Keywords
                                            </div>
                                        </div>
                                        <div className="row mt-50 mt-50-30-30">
                                            <div className="col-lg-12" >
                                                <Link legacyBehavior href="#">
                                                    <a className="keywords-bloginnerpage btn mr-15 mb-10 hover-up">
                                                        # Business Growth tips
                                                    </a>
                                                </Link>

                                                <Link legacyBehavior href="#">
                                                    <a className="keywords-bloginnerpage btn mr-15 mb-10 hover-up">
                                                        # Entrepreneurship
                                                    </a>
                                                </Link>

                                                <Link legacyBehavior href="#">
                                                    <a className="keywords-bloginnerpage btn mr-15 mb-10 hover-up">
                                                        # Business Success tips
                                                    </a>
                                                </Link>
                                                <Link legacyBehavior href="#">
                                                    <a className="keywords-bloginnerpage btn mr-15 mb-10 hover-up">
                                                        # Entrepreneur Programme
                                                    </a>
                                                </Link>
                                                <Link legacyBehavior href="#">
                                                    <a className="keywords-bloginnerpage btn mr-15 mb-10 hover-up">
                                                        # Networking
                                                    </a>
                                                </Link>
                                                <Link legacyBehavior href="#">
                                                    <a className="keywords-bloginnerpage btn mr-15 mb-10 hover-up">
                                                        # Mentorship
                                                    </a>
                                                </Link>
                                                <Link legacyBehavior href="#">
                                                    <a className="keywords-bloginnerpage btn mr-15 mb-10 hover-up">
                                                        # Success tips
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="row mt-50 mt-50-30-30">
                                            <div className="col-lg-11" style={{ margin: '0 auto' }} >
                                                <div className="comments-blog-innerpage">Comments</div>
                                                <ul className="list-comments">
                                                    <li>
                                                        <div className="bloginnerpage-author-bio mt-40 bg-white">
                                                            <div style={{ display: 'flex' }}>
                                                                <div className="author-image-blog-innerpage">
                                                                    <img className="avatar" src="../assets/imgs/page/blog-page/user3.png" alt />
                                                                </div>
                                                                <div className="author-information">
                                                                    <div className="comments-author-name">Robert Fox</div>
                                                                    <div className="comments-author-date">August 25, 2022</div>
                                                                </div>
                                                            </div>
                                                            <div className="comments-description">
                                                                <div className="comments-author-blog-innerpage">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies interdum massa nec fermentum. Phasellus interdum dignissim rhoncus. Nam vitae semper magna. Donec massa enim</div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="bloginnerpage-author-bio mt-40 bg-white">
                                                            <div style={{ display: 'flex' }}>
                                                                <div className="author-image-blog-innerpage">
                                                                    <Link legacyBehavior href="/author">
                                                                        <a>
                                                                            <img className="avatar" src="../assets/imgs/page/blog-page/user3.png" alt />
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                                <div className="author-information">
                                                                    <div className="comments-author-name">Jenny Wilson</div>
                                                                    <div className="comments-author-date">August 25, 2022</div>
                                                                </div>
                                                            </div>
                                                            <div className="comments-description">
                                                                <div className="comments-author-blog-innerpage">White white dreamy drama tically place everything although. Place out apartment afternoon , rhoncus a faucibus ac, bibendum et justo.</div>
                                                            </div>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <div className="bloginnerpage-author-bio mt-40 bg-white">
                                                                    <div style={{ display: 'flex' }}>
                                                                        <div className="author-image-blog-innerpage">
                                                                            <Link legacyBehavior href="">
                                                                                <a>
                                                                                    <img className="avatar" src="../assets/imgs/page/blog-page/user3.png" alt />
                                                                                </a>
                                                                            </Link>
                                                                        </div>
                                                                        <div className="author-information">
                                                                            <div className="comments-author-name">Eleanor Pena</div>
                                                                            <div className="comments-author-date">August 25, 2022</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="comments-description">
                                                                        <div className="comments-author-blog-innerpage">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                                <div className="border-bottom mt-30" />
                                                <div className="">
                                                    <div className="leave-comment-blog-innerpage mt-50 mt-50-30-30">Leave a comment</div>
                                                    <div className="bloginnerpage-form-comment mt-40 mt-40-20">
                                                        <form action="#">
                                                            <div className="comment-form-blog-innerpage">
                                                                <textarea className="input-comment" placeholder="Write a comment" defaultValue={""} />
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-lg-7 col-md-7 col-sm-7 mb-30">
                                                                    <div className="box-agree">
                                                                        <input className="chkbox-aggree" type="checkbox" />
                                                                        <span className="bloginnerpage-comment-form-save">Save my name, email, and website in this browser for the next time I comment.</span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-5 col-md-5 col-sm-5 text-end">
                                                                    <button className="btn btn-default font-bold" style={{ lineHeight: '16px !important' }}>Post comment</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <KickstartButton />
                    <Subscription />
                </div>
            </Layout >
        </>
    );
}
