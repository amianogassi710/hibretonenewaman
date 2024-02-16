import React, {createContext, useContext, useState} from 'react';

const BusinessPlanContext = createContext();

export const useBusinessPlan = () => useContext(BusinessPlanContext);

export const BusinessPlanProvider = ({children}) => {
    const [step1FormData, setStep1FormData] = useState({
        businessType: '',
        planUsage: '',
    });

    const [step2FormData, setStep2FormData] = useState({
        businessName: '',
        businessDescription: '',
        numberOfEmployees: '',
        productOrService: '',
        productServiceAccess: '',
        serviceArea: ''
    });

    return (
        <BusinessPlanContext.Provider value={{
            step1FormData, setStep1FormData,
            step2FormData, setStep2FormData,
        }}>
            {children}
        </BusinessPlanContext.Provider>
    );
};
