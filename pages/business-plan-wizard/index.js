/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from "../../components/Layout/Layout";
import BusinessPlanStepForm from "./BusinessPlanWizard/BusinessPlanStepForm";


export default function Index() {

    return (
        <>
            <Layout>
                <BusinessPlanStepForm/>
            </Layout>
        </>
    );
}
