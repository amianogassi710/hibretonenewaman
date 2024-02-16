import React from 'react';
import {
    Box,
    Grid,
    Input,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Button,
    Typography,
    FormHelperText
} from '@mui/material';
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import {useBusinessPlan} from "./BusinessPlanProvider";

const Step2 = ({previousStep, nextStep}) => {
    const {step2FormData, setStep2FormData} = useBusinessPlan();

    const [error, setError] = React.useState({
        businessName: false,
        businessDescription: false,
        numberOfEmployees: false,
        productOrService: false,
        productServiceAccess: false,
        serviceArea: false
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep2FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(step2FormData).forEach(key => {
            newErrors[key] = step2FormData[key] === '';
        });

        setError(newErrors);
        return !Object.values(newErrors).some(val => val === true);
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Received values of form: ', step2FormData);
            nextStep();
        }
    };

    const requiredLabel = (label) => (
        <>
            {label} <span style={{color: 'red'}}>*</span>
        </>
    );

    return (
        <form noValidate autoComplete="off" onSubmit={onFinish}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <FormControl fullWidth required error={error.businessName}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Your business name')}
                        </Typography>
                        <Input
                            name="businessName"
                            placeholder="Enter your business name"
                            value={step2FormData.businessName}
                            onChange={handleChange}
                        />
                        {error.businessName && <FormHelperText>Please input your business name.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth required error={error.businessDescription}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Your business description')}
                        </Typography>
                        <Input
                            id="businessDescription"
                            name="businessDescription"
                            placeholder="e.g. hotel / restaurant / online clothing store / Auto Repair / Real Estate Agent"
                            value={step2FormData.businessDescription}
                            onChange={handleChange}
                            sx={{fontSize: '0.875rem'}}
                        />
                        {error.businessDescription &&
                            <FormHelperText>Please input your business description.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl required error={error.numberOfEmployees}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Number of employees')}
                        </Typography>
                        <Input
                            id="numberOfEmployees"
                            name="numberOfEmployees"
                            type="number"
                            inputProps={{min: 0}}
                            placeholder="0"
                            value={step2FormData.numberOfEmployees}
                            onChange={handleChange}
                            sx={{fontSize: '0.875rem', width: '40%'}}
                        />
                        {error.numberOfEmployees &&
                            <FormHelperText>Please input the number of employees.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" required error={error.productOrService}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Do you offer a product or service?')}
                        </Typography>
                        <RadioGroup
                            row
                            name="productOrService"
                            value={step2FormData.productOrService}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="product" control={<Radio size="small"/>} label="Product"/>
                            <FormControlLabel value="service" control={<Radio size="small"/>}
                                              label="Service (retail businesses are considered service)"/>
                        </RadioGroup>
                        {error.productOrService && <FormHelperText>Please select an option.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl component="fieldset" required error={error.productServiceAccess}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('How can customer get your product or service?')}
                        </Typography>
                        <RadioGroup
                            row
                            name="productServiceAccess"
                            value={step2FormData.productServiceAccess}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="online" control={<Radio size="small"/>} label="Online"/>
                            <FormControlLabel value="physical" control={<Radio size="small"/>}
                                              label="Physical Location"/>
                            <FormControlLabel value="both" control={<Radio size="small"/>}
                                              label="Both online and physical location"/>
                        </RadioGroup>
                        {error.productServiceAccess && <FormHelperText>Please select an option.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth required error={error.serviceArea}>
                        <Typography variant="subtitle2" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Where do you serve your customers?')}
                        </Typography>
                        <Input
                            id="serviceArea"
                            name="serviceArea"
                            placeholder="e.g. New York City, New York/ London, UK / Europe and US"
                            value={step2FormData.serviceArea}
                            onChange={handleChange}
                            sx={{fontSize: '0.875rem'}}
                        />
                        {error.serviceArea && <FormHelperText>Please input your service area.</FormHelperText>}
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

export default Step2;
