import React, {useState} from 'react';
import {
    Grid, Select, MenuItem, FormControl, Typography, Divider, Button, FormHelperText, InputLabel, Input, TextField
} from '@mui/material';
import {useSessionStorage} from "react-use";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const currencySymbols = {
    USD: '$', // US Dollar
    EUR: '€', // Euro
    GBP: '£', // British Pound
    CNY: '¥', // Chinese Yuan
    JPY: '¥', // Japanese Yen
    AUD: 'A$', // Australian Dollar
    CAD: 'C$', // Canadian Dollar
};

const Step6 = ({previousStep, nextStep}) => {
    const [step6FormData, setStep6FormData] = useSessionStorage('BusinessPlanStepForm.step6FormData', {
        currency: '',
        totalInitialInvestment: '',
        investmentItem1: '',
        investmentAmount1: '',
        investmentItem2: '',
        investmentAmount2: '',
        investmentItem3: '',
        investmentAmount3: '',
        investmentItem4: '',
        investmentAmount4: '',
        investmentItem5: '',
        investmentAmount5: '',
    });

    const [error, setError] = useState({
        currency: false,
    });
    const [formError, setFormError] = useState('');  // Add a state to hold form level errors

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep6FormData(prevState => ({
            ...prevState, [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {...error};
        newErrors.currency = !step6FormData.currency;
        setError(newErrors);

        const totalInvestment = ['investmentAmount1', 'investmentAmount2', 'investmentAmount3', 'investmentAmount4', 'investmentAmount5']
            .reduce((sum, fieldName) => sum + (parseFloat(step6FormData[fieldName]) || 0), 0);

        // Compare the sum with the total initial investment
        const totalInitialInvestment = parseFloat(step6FormData.totalInitialInvestment) || 0;
        const difference = totalInvestment - totalInitialInvestment;

        if (difference !== 0) {
            isValid = false;
            setFormError(`Total Initial Investment must be equal to what you inputted in Investment Amount field, currently there is a difference of ${difference.toFixed(2)}`);
        } else {
            setFormError('');
        }

        setError(newErrors);
        return isValid && !newErrors.currency && difference === 0;
    };

    const onFinish = (e) => {
        e.preventDefault();
        if (validateForm()) {
            nextStep();
        }
    };

    const requiredLabel = (label, required) => (<>
        {label} {required && <span style={{color: 'red'}}>*</span>}
    </>);
    return (<form noValidate autoComplete="on" onSubmit={onFinish}>
        <Grid container direction="column" spacing={2} sx={{mt: 2}}>
            <Grid container alignItems="center" sx={{mb: 2}}>
                <Grid item sx={{ml: 2}}>
                    <Typography variant="h6" component="legend">
                        {requiredLabel('Business Plan Currency', true)}
                    </Typography>
                </Grid>
                <Grid item sx={{ml: 2}}>
                    <FormControl fullWidth required error={error.currency}>
                        <InputLabel id="currency-select-label" sx={{
                            color: 'primary.main', fontWeight: 'bold'
                        }}>Currency</InputLabel>
                        <Select
                            labelId="currency-select-label"
                            id="currency-select"
                            name="currency"
                            value={step6FormData.currency}
                            onChange={handleChange}
                            label="Currency"
                            sx={{
                                width: '150px', color: 'primary.main', fontWeight: 'bold'
                            }}
                        >
                            <MenuItem value="USD">USD ($)</MenuItem>
                            <MenuItem value="EUR">EUR (€)</MenuItem>
                            <MenuItem value="GBP">GBP (£)</MenuItem>
                            <MenuItem value="CNY">CNY (¥)</MenuItem>
                            <MenuItem value="JPY">JPY (¥)</MenuItem>
                            <MenuItem value="AUD">AUD (A$)</MenuItem>
                            <MenuItem value="CAD">CAD (C$)</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                        {error.currency && <FormHelperText>Please input a Currency.</FormHelperText>}
                    </FormControl>
                </Grid>
            </Grid>
            <Divider/>

            <Grid item sx={{ml: 2, mr: 2}}>
                <Typography variant="body2" color="text.secondary">
                    Note: If your business sells a physical product, don't include the cost of making or buying the
                    first batch of product in your initial investment. You should list this expense under "Cost of
                    Goods Sold (COGS)" on the next page.
                </Typography>
            </Grid>

            <Grid item>
                <FormControl fullWidth>
                    <Typography variant="h6" component="legend" sx={{mb: 1}}>
                        Total Initial Investment
                    </Typography>
                    <TextField
                        id="totalInitialInvestment"
                        label={currencySymbols[step6FormData.currency] || ""}
                        name="totalInitialInvestment"
                        type="number"
                        value={step6FormData.totalInitialInvestment}
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        sx={{width: '250px'}}
                    />
                </FormControl>
            </Grid>

            <Grid item sx={{mb: 2}}>
                <Typography variant="h6" component="legend">
                    What will you spend your initial investment on?
                </Typography>
            </Grid>
            <Divider/>


            <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                <Grid item xs={1} container justifyContent="center" alignItems="center">
                    <Typography variant="subtitle1" component="legend"
                                sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                        Investment Item
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                        Investment Amount
                    </Typography>
                </Grid>
            </Grid>

            <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                <Grid item xs={1} container justifyContent="center" alignItems="center">
                    <Typography variant="subtitle1" component="legend"
                                sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                        1.
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Input
                        id="investmentItem1"
                        name="investmentItem1"
                        value={step6FormData.investmentItem1}
                        onChange={handleChange}
                        type="text"
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        id="investmentAmount1"
                        label={currencySymbols[step6FormData.currency] || ""}
                        name="investmentAmount1"
                        type="number"
                        value={step6FormData.investmentAmount1}
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                <Grid item xs={1} container justifyContent="center" alignItems="center">
                    <Typography variant="subtitle1" component="legend"
                                sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                        2.
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Input
                        id="investmentItem2"
                        name="investmentItem2"
                        value={step6FormData.investmentItem2}
                        type="text"
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        id="investmentAmount2"
                        label={currencySymbols[step6FormData.currency] || ""}
                        name="investmentAmount2"
                        type="number"
                        value={step6FormData.investmentAmount2}
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                <Grid item xs={1} container justifyContent="center" alignItems="center">
                    <Typography variant="subtitle1" component="legend"
                                sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                        3.
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Input
                        id="investmentItem3"
                        name="investmentItem3"
                        value={step6FormData.investmentItem3}
                        type="text"
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        id="investmentAmount3"
                        label={currencySymbols[step6FormData.currency] || ""}
                        name="investmentAmount3"
                        type="number"
                        value={step6FormData.investmentAmount3}
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                <Grid item xs={1} container justifyContent="center" alignItems="center">
                    <Typography variant="subtitle1" component="legend"
                                sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                        4.
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Input
                        id="investmentItem4"
                        name="investmentItem4"
                        value={step6FormData.investmentItem4}
                        type="text"
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        id="investmentAmount4"
                        label={currencySymbols[step6FormData.currency] || ""}
                        name="investmentAmount4"
                        type="number"
                        value={step6FormData.investmentAmount4}
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
            </Grid>

            <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                <Grid item xs={1} container justifyContent="center" alignItems="center">
                    <Typography variant="subtitle1" component="legend"
                                sx={{ml: 2, fontWeight: 'bold', textAlign: 'center'}}>
                        5.
                    </Typography>
                </Grid>

                <Grid item xs={6}>
                    <Input
                        id="investmentItem5"
                        name="investmentItem5"
                        value={step6FormData.investmentItem5}
                        type="text"
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        id="investmentAmount5"
                        label={currencySymbols[step6FormData.currency] || ""}
                        name="investmentAmount5"
                        type="number"
                        value={step6FormData.investmentAmount5}
                        onChange={handleChange}
                        variant="outlined"
                        autoComplete="on"
                        fullWidth
                    />
                </Grid>
            </Grid>

            {formError && (
                <Grid item>
                    <FormHelperText error={true}>{formError}</FormHelperText>
                </Grid>
            )}

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
    </form>);
};

export default Step6;
