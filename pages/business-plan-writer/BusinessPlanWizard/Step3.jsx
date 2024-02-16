import React, {useEffect, useState} from 'react';
import {useSessionStorage} from 'react-use';
import {
    Box,
    Grid,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Button,
    Typography,
    FormHelperText, Input
} from '@mui/material';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Step3 = ({previousStep, nextStep}) => {
    const [step3FormData, setStep3FormData] = useSessionStorage('step3FormData', {
        group1Description: '',
        group1IncomeLevel: '',
        group2Description: '',
        group2IncomeLevel: '',
    });

    const [error, setError] = useSessionStorage('step3FormError', {
        group1Description: false,
        group1IncomeLevel: false,
    });

    const [clientSide, setClientSide] = useState(false);

    useEffect(() => {
        setClientSide(true);
    }, []);

    if (!clientSide) return null;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep3FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const newErrors = {...error};
        newErrors.group1Description = !step3FormData.group1Description;
        newErrors.group1IncomeLevel = !step3FormData.group1IncomeLevel;
        // No validation for optional fields
        setError(newErrors);
        return !newErrors.group1Description && !newErrors.group1IncomeLevel;
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Received values of form: ', step3FormData);
            nextStep();
        }
    };

    const requiredLabel = (label, required) => (
        <>
            {label} {required && <span style={{color: 'red'}}>*</span>}
        </>
    );

    return (
        <form noValidate autoComplete="off" onSubmit={onFinish}>
            <Grid container direction="column" spacing={2}>
                {/* Customer Group 1 */}
                <Grid item>
                    <FormControl fullWidth required error={error.group1Description}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Customer Group 1 Description', true)}
                        </Typography>
                        <Input
                            name="group1Description"
                            placeholder="Enter description"
                            value={step3FormData.group1Description}
                            onChange={handleChange}
                            variant="outlined"
                        />
                        {error.group1Description && <FormHelperText>Please input a description.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" required error={error.group1IncomeLevel}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Customer Group 1 Income Level', true)}
                        </Typography>
                        <RadioGroup
                            name="group1IncomeLevel"
                            value={step3FormData.group1IncomeLevel}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="Low-income" control={<Radio/>} label="Low-income"/>
                            <FormControlLabel value="Medium-income" control={<Radio/>} label="Medium-income"/>
                            <FormControlLabel value="High-income" control={<Radio/>} label="High-income"/>
                        </RadioGroup>
                        {error.group1IncomeLevel && <FormHelperText>Please select an income level.</FormHelperText>}
                    </FormControl>
                </Grid>

                {/* Customer Group 2 */}
                <Grid item>
                    <FormControl fullWidth error={error.group2Description}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Customer Group 2 Description', false)}
                        </Typography>
                        <Input
                            name="group2Description"
                            placeholder="Enter description (optional)"
                            value={step3FormData.group2Description}
                            onChange={handleChange}
                            variant="outlined"
                        />
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" required error={error.group1IncomeLevel}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Customer Group 2 Income Level', false)}
                        </Typography>
                        <RadioGroup
                            name="group2IncomeLevel"
                            value={step3FormData.group2IncomeLevel}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="Low-income" control={<Radio/>} label="Low-income"/>
                            <FormControlLabel value="Medium-income" control={<Radio/>} label="Medium-income"/>
                            <FormControlLabel value="High-income" control={<Radio/>} label="High-income"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>

                <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
                    <Button
                        color="inherit"
                        onClick={previousStep}
                        sx={{mr: 1}}
                    >
                        <KeyboardArrowLeft/> Back
                    </Button>
                    <Box sx={{flex: '1 1 auto'}}/>
                    <Button
                        onClick={onFinish}
                    >
                        Next <KeyboardArrowRight/>
                    </Button>
                </Box>
            </Grid>
        </form>
    );
};

export default Step3;
