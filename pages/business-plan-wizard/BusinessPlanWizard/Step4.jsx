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

const Step4 = ({previousStep, nextStep}) => {
    const [step4FormData, setStep4FormData] = useSessionStorage('BusinessPlanStepForm.step4FormData', {
        product1Name: '',
        product1Description: '',
        product2Name: '',
        product2Description: '',
    });

    const [error, setError] = useState({
        product1Name: false,
        product1Description: false,
    });

    const [clientSide, setClientSide] = useState(false);

    useEffect(() => {
        setClientSide(true);
    }, []);

    if (!clientSide) return null;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep4FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const newErrors = {...error};
        newErrors.product1Name = !step4FormData.product1Name;
        newErrors.product1Description = !step4FormData.product1Description;
        setError(newErrors);
        return !newErrors.product1Name && !newErrors.product1Description;
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
                        Product or Service 1 (required)
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl fullWidth required error={error.product1Name}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Product or Service 1 Name', true)}
                        </Typography>
                        <Input
                            id="product1Name"
                            name="product1Name"
                            placeholder="Enter name of product or service 1"
                            value={step4FormData.product1Name}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                        />
                        {error.product1Name && <FormHelperText>Please input a name.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth required error={error.product1Description}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Product or Service 1 Description', true)}
                        </Typography>
                        <Input
                            id="product1Description"
                            name="product1Description"
                            type="text"
                            placeholder="Enter description of product or service 1"
                            value={step4FormData.product1Description}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                        />
                        {error.product1Description && <FormHelperText>Please input the description.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <Typography variant="h6" component="legend">
                        Product or Service 2 (optional)
                    </Typography>
                    <Divider/>
                </Grid>
                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Product or Service 2 Name', false)}
                        </Typography>
                        <Input
                            id="product2Name"
                            name="product2Name"
                            placeholder="Enter name of product or service 2"
                            value={step4FormData.product2Name}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                        />
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            {requiredLabel('Product or Service 2 Description', false)}
                        </Typography>
                        <Input
                            id="product2Description"
                            name="product2Description"
                            placeholder="Enter description of product or service 2"
                            value={step4FormData.product2Description}
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

export default Step4;