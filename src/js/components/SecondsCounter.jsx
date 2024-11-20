import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

function SecondsCounter(props) {
    function formatNumber(num) {
        return String(num).padStart(6, "0");
    }

    function getContainerStyle() {
        return {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
            padding: "80px",
            fontSize: "10em",
            fontFamily: "monospace",
        };
    }
    function getDigitStyle() {
        return {
            display: "inline-block",
            margin: "0 5px",
            padding: "10px",
            backgroundColor: "#333",
            borderRadius: "5px",
            minWidth: "40px",
            textAlign: "center",
        };
    }

    return (
        <div style={getContainerStyle()}>
            <FontAwesomeIcon icon={faClock} />
            {formatNumber(props.seconds).split("").map((digit, index) => (
                <div key={index} style={getDigitStyle()}>
                    {digit}
                </div>
            ))}
        </div>
    );
}

export default SecondsCounter;
