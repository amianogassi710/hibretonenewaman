import React from 'react';
import {useSessionStorage} from 'react-use'; // 确保已经导入 useSessionStorage
import {Box, Typography, Stepper, Step, StepLabel} from '@mui/material';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const BusinessPlanStepForm = () => {
    const [currentStepStr, setCurrentStepStr] = useSessionStorage('currentStep', '1');
    const currentStep = parseInt(currentStepStr, 10);

    const [clientSide, setClientSide] = React.useState(false);

    const nextStep = () => setCurrentStepStr(String(currentStep + 1));
    const previousStep = () => setCurrentStepStr(String(currentStep - 1));

    const stepsItems = [
        'Business Plan Objective',
        'Basic Business Information',
        'Customer Group Details',
        'Step 4',
        'Step 5',
    ];

    React.useEffect(() => {
        setClientSide(true);
    }, []);

    if (!clientSide) return null;

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
                {currentStep === 3 && <Step3 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 4 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
                {currentStep === 5 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
            </Box>
        </Box>
    );
};

export default BusinessPlanStepForm;
