/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import Layout from "../../components/Layout/Layout";
import BusinessPlanStepForm from "./BusinessPlanWizard/BusinessPlanStepForm";

export default function Index() {
    // useEffect(() => {
    //     const handleBeforeUnload = (e) => {
    //         e.preventDefault();
    //         e.returnValue = '';
    //     };
    //
    //     window.addEventListener('beforeunload', handleBeforeUnload);
    //
    //     return () => {
    //         window.removeEventListener('beforeunload', handleBeforeUnload);
    //     };
    // }, []);

    return (
        <>
            <Layout>
                <BusinessPlanStepForm/>
            </Layout>
        </>
    );
}
