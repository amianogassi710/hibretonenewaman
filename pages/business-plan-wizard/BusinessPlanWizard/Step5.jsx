import React, {useEffect, useState} from 'react';
import {useSessionStorage} from 'react-use';
import {
    Grid,
    FormControl,
    Button,
    Typography,
    FormHelperText, Input, Divider
} from '@mui/material';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Step5 = ({previousStep, nextStep}) => {
    const [step5FormData, setStep5FormData] = useSessionStorage('BusinessPlanStepForm.step5FormData', {
        successDriver1: '',
        successDriver2: '',
        weakness1: '',
        weakness2: '',
    });

    const [error, setError] = useState({
        successDriver1: false,
    });

    const [clientSide, setClientSide] = useState(false);

    useEffect(() => {
        setClientSide(true);
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep5FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    if (!clientSide) return null;

    const validateForm = () => {
        const newErrors = {...error};
        newErrors.successDriver1 = !step5FormData.successDriver1;
        setError(newErrors);
        return !newErrors.successDriver1;
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (validateForm()) {
            nextStep();
        }
    };

    const requiredLabel = (label, required) => (
        <>
            {label} {required && <span style={{color: 'red'}}>*</span>}
        </>
    );

    return (
        <form noValidate autoComplete="on" onSubmit={onFinish}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Typography variant="h6" component="legend">
                        Success Drivers
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Success Driver 1 (required)', true)}
                        </Typography>
                        <Input
                            name="successDriver1"
                            placeholder="E.g. Our product is high quality and affordable."
                            value={step5FormData.successDriver1}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                        />
                        {error.successDriver1 && <FormHelperText>Please input a Success Driver.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Success Driver 2 (optional)', false)}
                        </Typography>
                        <Input
                            name="successDriver2"
                            placeholder="E.g. Our marketing team is highly skilled and experienced."
                            value={step5FormData.successDriver2}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                        />
                    </FormControl>
                </Grid>

                <Grid item>
                    <Typography variant="h6" component="legend">
                        Weakness
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Weakness 1 (optional)', false)}
                        </Typography>
                        <Input
                            name="weakness1"
                            placeholder="E.g. We are a new company and have not yet established a customer base."
                            value={step5FormData.weakness1}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                        />
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Weakness 2 (optional)', false)}
                        </Typography>
                        <Input
                            name="weakness2"
                            placeholder="E.g. Our budget is limited and we cannot afford to hire a large team."
                            value={step5FormData.weakness2}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                        />
                    </FormControl>
                </Grid>

                <Grid container justifyContent="flex-start" spacing={2} sx={{mt: 2}}>
                    <Grid item>
                        <Button
                            color="inherit"
                            onClick={previousStep}
                            sx={{mr: 1}}
                        >
                            <KeyboardArrowLeft/> Back
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={onFinish}
                        >
                            Next <KeyboardArrowRight/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default Step5;