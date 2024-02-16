/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from "../../components/Layout/Layout";
import BusinessPlanWizard from './BusinessPlanWizard/BusinessPlanWizard';

export default function Index() {
    return (
        <>
            <Layout>
                <BusinessPlanWizard/>
            </Layout>
        </>
    );
}
