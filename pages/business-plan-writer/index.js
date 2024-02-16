/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from "../../components/Layout/Layout";
import BusinessPlanStepForm from './BusinessPlanWizard/BusinessPlanStepForm';
import {BusinessPlanProvider} from "./BusinessPlanWizard/BusinessPlanProvider";


export default function Index() {

    return (
        <>
            <Layout>
                <BusinessPlanProvider>
                    <BusinessPlanStepForm/>
                </BusinessPlanProvider>
            </Layout>
        </>
    );
}
