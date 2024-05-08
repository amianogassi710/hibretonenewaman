import React from "react";
import { useCloseDateWarning } from "../hooks/useCloseDateWarning";

function ClosingDateDisplay({ closingDate }) {
    const textStyle = useCloseDateWarning(closingDate);

    const backgroundStyle = {
        backgroundImage: `url(/assets/imgs/template/icons/time${textStyle.color === '#F44336' ? '-red' : ''}.svg)`
    };

    return (
        <span className="card-time" style={{...textStyle, ...backgroundStyle}}>
            Closing date: {closingDate}
        </span>
    );
}

export default ClosingDateDisplay;