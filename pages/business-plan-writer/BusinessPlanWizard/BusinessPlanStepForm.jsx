import React, {useState, useEffect} from 'react';
import {Box, Typography, Stepper, Step, StepLabel} from '@mui/material';
import Step1 from "./Step1";
import Step2 from "./Step2";

const BusinessPlanStepForm = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep(currentStep + 1);
    const previousStep = () => setCurrentStep(currentStep - 1);

    const stepsItems = [
        'Plan Purpose',
        'Business Details',
        'Step 3',
        'Step 4',
        'Step 5',
    ];

    return (
        <Box sx={{width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography variant="h6" sx={{textAlign: 'center', mb: 4}}>Business Plan Writer</Typography>
            <Box sx={{width: '75%'}}>
                <Stepper activeStep={currentStep - 1} alternativeLabel>
                    {stepsItems.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
            <Box sx={{width: '50%', mt: 4}}>
                {currentStep === 1 && <Step1 nextStep={nextStep}/>}
                {currentStep === 2 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 3 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 4 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 5 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
            </Box>
        </Box>
    );
};

export default BusinessPlanStepForm;
