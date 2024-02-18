import React, {useEffect, useState} from 'react';
import {useSessionStorage} from 'react-use';
import {
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid,
    Typography,
    FormHelperText,
    Button
} from '@mui/material';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Step1 = ({nextStep}) => {
    const [step1FormData, setStep1FormData] = useSessionStorage('BusinessPlanStepForm.step1FormData', {
        businessType: '',
        planUsage: ''
    });
    const [error, setError] = useState({businessType: false, planUsage: false});
    const [clientSide, setClientSide] = useState(false);

    useEffect(() => {
        setClientSide(true);
    }, []);

    if (!clientSide) return null;

    const handleChange = (event) => {
        const {name, value} = event.target;
        setStep1FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const errors = {};
        errors.businessType = !step1FormData.businessType;
        errors.planUsage = !step1FormData.planUsage;
        setError(errors);

        return !errors.businessType && !errors.planUsage;
    };

    const onFinish = () => {
        if (validateForm()) {
            nextStep();
        }
    };

    const requiredLabel = (label) => (
        <>
            {label} <span style={{color: 'red'}}>*</span>
        </>
    );

    return (
        <Grid container direction="column" spacing={2} component="form" noValidate autoComplete="off">
            <Grid item>
                <FormControl component="fieldset" error={error.businessType}>
                    <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                        {requiredLabel('Is this an existing or an upcoming business?')}
                    </Typography>
                    <RadioGroup
                        name="businessType"
                        value={step1FormData.businessType || ''}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="existing" control={<Radio size="small"/>}
                                          label="Existing business"/>
                        <FormControlLabel value="upcoming" control={<Radio size="small"/>}
                                          label="Upcoming unlaunched business"/>
                    </RadioGroup>
                    {error.businessType && <FormHelperText>Please select an option.</FormHelperText>}
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl component="fieldset" error={error.planUsage}>
                    <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                        {requiredLabel('What will you use this business plan for?')}
                    </Typography>
                    <RadioGroup
                        name="planUsage"
                        value={step1FormData.planUsage || ''}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="investors" control={<Radio size="small"/>}
                                          label="To be used to request fund from investors"/>
                        <FormControlLabel value="banks" control={<Radio size="small"/>}
                                          label="To be used to request fund from banks"/>
                        <FormControlLabel value="selfLearning" control={<Radio size="small"/>}
                                          label="For self-learning"/>
                        <FormControlLabel value="schoolProject" control={<Radio size="small"/>}
                                          label="To be used as reference for school/university project"/>
                        <FormControlLabel value="workplaceProject" control={<Radio size="small"/>}
                                          label="To be used as reference for workplace projects"/>
                        <FormControlLabel value="nonFinancial" control={<Radio size="small"/>}
                                          label="To be used to submit to a non-financial institution for approval"/>
                        <FormControlLabel value="other" control={<Radio size="small"/>} label="Other reasons"/>
                    </RadioGroup>
                    {error.planUsage && <FormHelperText>Please select an option.</FormHelperText>}
                </FormControl>
            </Grid>
            <Grid item>
                <br/>
            </Grid>

            <Grid item container justifyContent="flex-end">
                <Button onClick={onFinish}>
                    Next <KeyboardArrowRight/>
                </Button>
            </Grid>
        </Grid>
    );
};

export default Step1;
