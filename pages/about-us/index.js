/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Layout from "../../components/Layout/Layout";
import Subscription from '../../components/Layout/Subscription';
import Aboutuscounter from './aboutuscounter';
import Aboutusmeetourteam from './aboutusmeetourteam';
import Aboutusmeetourteamfull from './aboutusmeetourteamfull';
import Aboutusnewsandeventscarousel from './aboutusnewsandeventscarousel';
import Aboutusnewsandeventscarouselfull from './aboutusnewsandeventscarouselfull';
import SubscribeButton from '../../components/elements/SubscribeButton';
import { IoShareSocialOutline } from "react-icons/io5";
import Aboutushibretoneinformation from './aboutushibretoneinformation';

function useLockBodyScroll(open) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "visible";
        }
    }, [open])
}

export default function Index() {
    const [showFullTeam, setShowFullTeam] = useState(false);

    const handleMeetOurTeamClick = () => {
        setShowFullTeam(true);
    };

    const handleShowLessClick = () => {
        setShowFullTeam(false);
    };

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = e => {
        setIsOpen(prevOpen => !prevOpen)
    }

    useLockBodyScroll(isOpen)

    return (
        <>
            <Layout>
                <div className="background-random-aboutus">
                    <section className="section-box">
                        <div className="banner-hero-builder bg-img-aboutus">
                            <div className="container d-flex align-items-center">
                                <div className="row">
                                    <div className="col">
                                        <div className="builder-hero-heading">About Us</div>
                                        <div className="builder-hero-subheading">
                                            hibretOne is a  <span className="color-blue">  not-for-profit </span> Community Interest Company (CIC), using entrepreneurship & education to create  economic impact
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="section-box mt-50 mt-50-30">
                        <div className="container">
                            <div className="flex-container">
                                <div className="share-icon-container-aboutus">
                                    <IoShareSocialOutline className="share-icon-aboutus" />
                                </div>
                                <div className="text-center">
                                <div className="component-title">
                                        Our Impact so far
                                </div>
                                </div>
                                <Aboutuscounter />
                            </div>
                        </div>
                    </section>

                    <Aboutushibretoneinformation />

                    <div>
                        {showFullTeam ? (
                            <Aboutusmeetourteamfull />
                        ) : (
                            <div>
                                <Aboutusmeetourteam />
                                <div className="mt-20 mt-20-0-meetourteam" style={{ textAlign: 'center' }}>
                                    <button onClick={handleMeetOurTeamClick} class="btn btn-default fs-6">Show More</button>
                                </div>
                                <Aboutusnewsandeventscarousel />
                            </div>
                        )}

                        {showFullTeam && (
                            <div>
                                <div className="mt-20 mt-20-0-meetourteam" style={{ textAlign: 'center' }}>
                                    <button onClick={handleShowLessClick} class="btn btn-default fs-6">Show Less</button>
                                </div>
                                <Aboutusnewsandeventscarouselfull />
                            </div>
                        )}
                    </div>

                    <section className="section-box mt-75 mt-75-40 yellowbanner-aboutus">
                        <SubscribeButton />
                    </section>

                        <Subscription />
                </div >
            </Layout >
        </>
    );
}
