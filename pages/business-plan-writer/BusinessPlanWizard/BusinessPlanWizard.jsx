import React, { useEffect, useState } from 'react';
import {Steps} from 'antd';
import Step1 from './Step1';
import Step2 from './Step2';
import {useLocalStorage} from 'react-use';

const BusinessPlanWizard = () => {
    const [currentStep, setCurrentStep] = useLocalStorage('BusinessPlanWizard.currentStep', 1);
    const [clientSide, setClientSide] = useState(false);

    const step = parseInt(currentStep || '1', 10);

    useEffect(() => {
        setCurrentStep(step);
        setClientSide(true);
    }, [step, setCurrentStep]);

    const nextStep = () => setCurrentStep(currentStep + 1);
    const previousStep = () => setCurrentStep(currentStep - 1);
    const stepsItems = [
        {
            title: 'Step 1',
            content: <Step1 nextStep={nextStep}/>
        },
        {
            title: 'Step 2',
            content: <Step2 nextStep={nextStep} previousStep={previousStep}/>
        },
        {
            title: 'Step 3',
            content: <Step2 nextStep={nextStep} previousStep={previousStep}/>
        },
    ];

    if (!clientSide) return null;

    return (
        <div>
            <h4 style={{textAlign: 'center'}}>Business Plan Writer</h4>
            <div className="steps" style={{width: '60%', margin: '0 auto'}}>
                <Steps current={currentStep - 1} style={{margin: '20px 0'}} size="small"
                       items={stepsItems.map(item => ({title: item.title}))}/>
            </div>
            <div className="container" style={{width: '50%', margin: '0 auto'}}>
                {stepsItems[currentStep - 1].content}
            </div>
        </div>
    );
};

export default BusinessPlanWizard;
