import React from "react";

function ValidationMessage({ msg }) {
    return <span className="text-red-400 text-sm mt-2">{msg}</span>;
}

export default ValidationMessage;
