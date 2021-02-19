import { useState } from "react";
import "./Email.css";

function validate(address) {
    if (address.includes("@") && (address.slice(-3) == "com" || address.slice(-3) == "edu")) {
        // good
        return "Email succesfully recorded.";
    } else {
        return "Invalid email address.";
        // bad
    }
}

export default function Email() {
    const [email, setEmail] = useState("");
    const [validation, setValidation] = useState("");
    return (
        <form id="email-form" onSubmit={(event) => {event.preventDefault(); setValidation(validate(email));}}>
            <label for="email">Email:</label>
            <input name="email" id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <button type="button">Done</button>
            <div id="validation">{validation}</div>
        </form>
    );
}