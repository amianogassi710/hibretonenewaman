import { useMemo } from "react";

export const useCloseDateWarning = (closingDate) => {
    return useMemo(() => {
        const closingDateObj = new Date(closingDate);
        const currentDate = new Date();
        const timeDiff = closingDateObj - currentDate;
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

        return {
            color: daysDiff >= 0 && daysDiff <= 30 ? "#F44336" : "",
        };
    }, [closingDate]);
};