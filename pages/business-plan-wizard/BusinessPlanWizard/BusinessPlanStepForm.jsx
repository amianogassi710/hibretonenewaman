import React from 'react';
import {useSessionStorage} from 'react-use';
import {Typography, Stepper, Step, StepLabel, Grid, IconButton, Box} from '@mui/material';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Link from "next/link";
import {ArrowBack} from "@mui/icons-material";

const BusinessPlanStepForm = () => {
    const [currentStepStr, setCurrentStepStr] = useSessionStorage('currentStep', '1');
    const currentStep = parseInt(currentStepStr, 10);

    const [clientSide, setClientSide] = React.useState(false);

    const nextStep = () => setCurrentStepStr(String(currentStep + 1));
    const previousStep = () => setCurrentStepStr(String(currentStep - 1));

    const stepsItems = ['Business Plan Objective', 'Basic Business Information', 'Customer Group Details', 'Product or Service Details', 'Success Drivers', 'Initial Investment Details', 'Financial Details and Plan Language',];

    React.useEffect(() => {
        setClientSide(true);
    }, []);

    if (!clientSide) return null;

    return (<Grid container justifyContent="center" alignItems="center" direction="column"
                  sx={{width: '100%', margin: '0 auto'}}>
        <Grid item xs={12} md={12} lg={6}
              sx={{display: 'flex', alignItems: 'center', width: {xs: '100%', md: '55%', lg: '50%'}, margin: '0 auto'}}>
            <Box sx={{width: 100, mb: 3}}>
                <Link legacyBehavior href="/business-plan-writer">
                    <IconButton sx={{
                        transform: 'scale(1.25)',
                        color: 'primary.main',
                    }}>
                        <ArrowBack/>
                    </IconButton>
                </Link>
            </Box>
            <Typography variant="h6" sx={{flexGrow: 2, textAlign: 'center', mb: 3}}>
                Business Plan Writer
            </Typography>
            <Box sx={{width: 100}}/>
        </Grid>
        <Grid item xs={12} md={12} lg={6} sx={{width: {xs: '90%', md: '65%', lg: '50%'}, margin: '0 auto'}}>
            <Stepper activeStep={currentStep - 1} alternativeLabel>
                {stepsItems.map((label) => (<Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>))}
            </Stepper>
        </Grid>
        <Grid item xs={12} md={12} lg={6} sx={{mt: 4, width: {xs: '90%', md: '50%', lg: '50%'}}}>
            {currentStep === 1 && <Step1 nextStep={nextStep}/>}
            {currentStep === 2 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
            {currentStep === 3 && <Step3 nextStep={nextStep} previousStep={previousStep}/>}
            {currentStep === 4 && <Step4 nextStep={nextStep} previousStep={previousStep}/>}
            {currentStep === 5 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
            {currentStep === 6 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
            {currentStep === 7 && <Step2 nextStep={nextStep} previousStep={previousStep}/>}
        </Grid>
    </Grid>);
};

export default BusinessPlanStepForm;
