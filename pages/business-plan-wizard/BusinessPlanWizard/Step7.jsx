import React, {useState, useEffect} from 'react';
import {
    Grid,
    Select,
    MenuItem,
    FormControl,
    Typography, Divider, Button, FormHelperText, InputLabel, TextField
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
const Step7 = ({previousStep, nextStep}) => {
    const [step6FormData, setStep6FormData] = useSessionStorage('BusinessPlanStepForm.step6FormData', {
        currency: '',
    });
    const [step7FormData, setStep7FormData] = useSessionStorage('BusinessPlanStepForm.step7FormData', {
        language: '',
        expectedRevenue: '',
        growthRate: '',
        revenuePercentage1: '',
        revenuePercentage2: '',
        revenuePercentage3: '',
        revenuePercentage4: '',
        revenuePercentage5: '1',
        revenuePercentage6: '2',
        revenuePercentage7: '0',
        revenuePercentage8: '1',
        revenuePercentage9: '0',
        revenuePercentage10: '20',
    });
    const [error, setError] = useState({
        language: false,
        expectedRevenue: false,
        growthRate: false,
    });

    useEffect(() => {
        // Check if the session storage for this form data is empty or not
        const storedData = sessionStorage.getItem('BusinessPlanStepForm.step7FormData');
        if (!storedData) {
            setStep7FormData({
                revenuePercentage1: '40',
                revenuePercentage2: '6',
                revenuePercentage3: '5',
                revenuePercentage4: '0',
                revenuePercentage5: '1',
                revenuePercentage6: '2',
                revenuePercentage7: '0',
                revenuePercentage8: '1',
                revenuePercentage9: '0',
                revenuePercentage10: '20',
            });
        }
    }, [setStep7FormData]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setStep7FormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setError(prev => ({...prev, [name]: false}));
    };

    const validateForm = () => {
        const newErrors = {...error};
        newErrors.language = !step7FormData.language;
        newErrors.expectedRevenue = !step7FormData.expectedRevenue;
        newErrors.growthRate = !step7FormData.growthRate;
        setError(newErrors);
        return !newErrors.language && !newErrors.expectedRevenue && !newErrors.growthRate;
    };

    const calculateTotalCost = (percentage) => {
        return (parseFloat(percentage) / 100 * (parseFloat(step7FormData.expectedRevenue) || 0)).toFixed(2);
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
            <Grid container direction="column" spacing={2} sx={{mt: 2}}>
                <Grid item>
                    <FormControl fullWidth required error={error.expectedRevenue}>
                        <Typography variant="h6" component="legend" sx={{mb: 1,}}>
                            {requiredLabel('Expected First Year Revenue', true)}
                        </Typography>
                        <TextField
                            id="expectedRevenue"
                            label={currencySymbols[step6FormData.currency] || ""}
                            name="expectedRevenue"
                            type="number"
                            value={step7FormData.expectedRevenue}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            sx={{width: '350px'}}
                        />
                        {error.expectedRevenue &&
                            <FormHelperText>Please input a Expected First Year Revenue.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth required error={error.growthRate}>
                        <Typography variant="h6" component="legend" sx={{mb: 1,}}>
                            {requiredLabel('How much do you expect your revenue to grow each year?', true)}
                        </Typography>
                        <TextField
                            id="growthRate"
                            label="%"
                            name="growthRate"
                            type="number"
                            value={step7FormData.growthRate}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            sx={{width: '250px'}}
                        />
                        {error.growthRate && <FormHelperText>Please input a Growth Rate.</FormHelperText>}
                    </FormControl>
                </Grid>

                <Grid item sx={{mb: 2}}>
                    <Typography variant="h6" component="legend">
                        Enter Yearly Business Operations Cost
                    </Typography>
                </Grid>
                <Divider/>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            % of Revenue
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{mb: 1, fontWeight: 'bold'}}>
                            Total Cost
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            1. Cost of Goods Sold
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage1"
                            label="%"
                            name="revenuePercentage1"
                            type="number"
                            value={step7FormData.revenuePercentage1}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage1)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            2. Wages and Benefits
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage2"
                            label="%"
                            name="revenuePercentage2"
                            type="number"
                            value={step7FormData.revenuePercentage2}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage2)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            3. Marketing
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage3"
                            label="%"
                            name="revenuePercentage3"
                            type="number"
                            value={step7FormData.revenuePercentage3}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage3)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            4. Rent
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage4"
                            label="%"
                            name="revenuePercentage4"
                            type="number"
                            value={step7FormData.revenuePercentage4}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage4)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            5. General & Administrative
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage5"
                            label="%"
                            name="revenuePercentage5"
                            type="number"
                            value={step7FormData.revenuePercentage5}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage5)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            6. Depreciation
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage6"
                            label="%"
                            name="revenuePercentage6"
                            type="number"
                            value={step7FormData.revenuePercentage6}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage6)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            7. Utilities
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage7"
                            label="%"
                            name="revenuePercentage7"
                            type="number"
                            value={step7FormData.revenuePercentage7}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage7)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            8. Other Expenses
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage8"
                            label="%"
                            name="revenuePercentage8"
                            type="number"
                            value={step7FormData.revenuePercentage8}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage8)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            9. Interest Expense
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage9"
                            label="%"
                            name="revenuePercentage9"
                            type="number"
                            value={step7FormData.revenuePercentage9}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage9)}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container alignItems="center" spacing={2} sx={{mt: 0, mb: 2}}>
                    <Grid item xs={4} container justifyContent="center" alignItems="center">
                        <Typography variant="subtitle1" component="legend"
                                    sx={{fontWeight: 'bold', ml: 2}}>
                            10. Income Taxes (from EBT)
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="revenuePercentage10"
                            label="%"
                            name="revenuePercentage10"
                            type="number"
                            value={step7FormData.revenuePercentage10}
                            onChange={handleChange}
                            variant="outlined"
                            autoComplete="on"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                            {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage10)}
                        </Typography>
                    </Grid>
                </Grid>

                <Divider/>
                <Grid item>
                    <Typography variant="h6" component="legend">
                        {'Your First Year Total Cost is:'}
                    </Typography>

                    <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                        {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage10)}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h6" component="legend">
                        {'Your First Year Net Profit is:'}
                    </Typography>

                    <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                        {currencySymbols[step6FormData.currency] || ""} {calculateTotalCost(step7FormData.revenuePercentage10)}
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h6" component="legend">
                        {'Your Net Profit Margin is:'}
                    </Typography>

                    <Typography variant="subtitle1" component="legend" sx={{fontWeight: 'bold'}}>
                        {"%"} {calculateTotalCost(step7FormData.revenuePercentage10)}
                    </Typography>
                </Grid>
                <Divider/>

                <Grid container alignItems="center" sx={{mt: 4}}>
                    <Grid item sx={{ml: 2}}>
                        <Typography variant="h6" component="legend">
                            {requiredLabel('Business Plan Language', true)}
                        </Typography>
                    </Grid>
                    <Grid item sx={{ml: 2}}>
                        <FormControl fullWidth required error={error.language}>
                            <InputLabel id="language-select-label" sx={{
                                color: 'primary.main', fontWeight: 'bold'
                            }}>Language</InputLabel>
                            <Select
                                labelId="language-select-label"
                                id="language-select"
                                name="language"
                                value={step7FormData.language}
                                onChange={handleChange}
                                label="Language"
                                sx={{
                                    width: '250px', color: 'primary.main', fontWeight: 'bold'
                                }}
                            >
                                <MenuItem value="en-US">English (US)</MenuItem>
                                <MenuItem value="en-UK">English (UK)</MenuItem>
                                <MenuItem value="de">German</MenuItem>
                                <MenuItem value="fr">French</MenuItem>
                                <MenuItem value="es">Spanish</MenuItem>
                                <MenuItem value="it">Italian</MenuItem>
                                <MenuItem value="nl">Dutch</MenuItem>
                                <MenuItem value="ja">Japanese</MenuItem>
                                <MenuItem value="ar">Arabic</MenuItem>
                                <MenuItem value="sv">Swedish</MenuItem>
                                <MenuItem value="fi">Finnish</MenuItem>
                                <MenuItem value="no">Norwegian</MenuItem>
                                <MenuItem value="da">Danish</MenuItem>
                            </Select>
                            {error.language && <FormHelperText>Please input a Language.</FormHelperText>}
                        </FormControl>
                    </Grid>
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

export default Step7;