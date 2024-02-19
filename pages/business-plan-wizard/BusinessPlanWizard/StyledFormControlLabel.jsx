import { FormControlLabel, Radio, useTheme } from "@mui/material";

const StyledFormControlLabel = ({ label, value, selectedValue }) => {
    const theme = useTheme(); // Hook to access the theme
    const isSelected = value === selectedValue;

    return (
        <FormControlLabel
            value={value}
            control={<Radio size="small" />}
            label={label}
            sx={{
                border: `1px solid ${isSelected ? theme.palette.primary.main : '#ccc'}`,
                borderRadius: '10px',
                marginY: '3px',
                width: '100%',
                backgroundColor: isSelected ? theme.palette.action.selected : '',
                '&:hover': {
                    borderColor: theme.palette.primary.main, // Border color on hover
                    backgroundColor: theme.palette.action.hover,
                },
                '.Mui-checked &': {
                    borderColor: theme.palette.primary.main, // Maintain border color for selected item
                }
            }}
        />
    );
};
export default StyledFormControlLabel;
