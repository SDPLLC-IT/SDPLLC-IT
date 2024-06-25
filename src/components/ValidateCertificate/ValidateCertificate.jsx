import { useEffect, useState } from "react";
import './ValidateCertificate.scss'

export const ValidateCertificate = () => {
    const [resultId, setResultId] = useState("");
    const [certificateValue, setCertificateValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const certificates = [
        { id: "aB3cdE5FgHiJkL", company: "Empresa A" },
        { id: "nOp2QrStUvWxYz", company: "Empresa B" },
        { id: "5678AbCdEfGhIj", company: "Empresa C" },
        { id: "LMnopQRsTuVwXy", company: "Empresa D" },
        { id: "1234dEfGh5678i", company: "Empresa E" },
        { id: "kLmNOpQrStUv9W", company: "Empresa F" },
        { id: "xYz012345678Ab", company: "Empresa G" },
        { id: "DfGhIjKlMnOpQr", company: "Empresa H" },
        { id: "tUvWxYzAbCDEfG", company: "Empresa I" },
        { id: "hIjKlM5678nOpQ", company: "Empresa J" },
        { id: "sTuVwXyZ1234Ab", company: "Empresa K" },
        { id: "DfGhIjKlMnOpQr", company: "Empresa L" },
        { id: "StUvWxYzAbCDEf", company: "Empresa M" },
        { id: "GhIjKlM5678nOp", company: "Empresa N" },
        { id: "sTuVwXyZ1234Ab", company: "Empresa O" },
        { id: "aB3cdE5FgHiJkL", company: "Empresa P" },
        { id: "nOp2QrStUvWxYz", company: "Empresa Q" },
        { id: "5678AbCdEfGhIj", company: "Empresa R" },
        { id: "LMnopQRsTuVwXy", company: "Empresa S" },
        { id: "1234dEfGh5678i", company: "Empresa T" },
        { id: "kLmNOpQrStUv9W", company: "Empresa U" },
        { id: "xYz012345678Ab", company: "Empresa V" },
        { id: "DfGhIjKlMnOpQr", company: "Empresa W" },
        { id: "tUvWxYzAbCDEfG", company: "Empresa X" },
        { id: "hIjKlM5678nOpQ", company: "Empresa Y" },
        { id: "sTuVwXyZ1234Ab", company: "Empresa Z" },
        { id: "DfGhIjKlMnOpQr", company: "Empresa AA" },
        { id: "StUvWxYzAbCDEf", company: "Empresa BB" },
        { id: "GhIjKlM5678nOp", company: "Empresa CC" },
        { id: "sTuVwXyZ1234Ab", company: "Empresa DD" },
        { id: "aB3cdE5FgHiJkL", company: "Empresa EE" },
        { id: "nOp2QrStUvWxYz", company: "Empresa FF" },
        { id: "5678AbCdEfGhIj", company: "Empresa GG" },
        { id: "LMnopQRsTuVwXy", company: "Empresa HH" },
        { id: "1234dEfGh5678i", company: "Empresa II" },
        { id: "kLmNOpQrStUv9W", company: "Empresa JJ" },
        { id: "xYz012345678Ab", company: "Empresa KK" },
        { id: "DfGhIjKlMnOpQr", company: "Empresa LL" },
        { id: "tUvWxYzAbCDEfG", company: "Empresa MM" },
        { id: "hIjKlM5678nOpQ", company: "Empresa NN" },
        { id: "sTuVwXyZ1234Ab", company: "Empresa OO" },
        { id: "DfGhIjKlMnOpQr", company: "Empresa PP" },
        { id: "StUvWxYzAbCDEf", company: "Empresa QQ" },
        { id: "GhIjKlM5678nOp", company: "Empresa RR" },
        { id: "sTuVwXyZ1234Ab", company: "Empresa SS" }
      ];

    const handleChange = (event) => {
        setCertificateValue(event.target.value);
    }

    const isCertificateValueValid = (certificateValue) => {
        if(certificateValue.length !== 14) {
            setErrorMessage("El certificado ingresado no es correcto")
            return false;
        } else {
            const certificateId = certificates.findIndex(certificate => certificate.id === certificateValue)
            if(certificateId === -1) {
                return false;
            }
            setResultId(certificateId)
        }
        return true;
    }

    const handleSubmit = (event) => {
        if(isCertificateValueValid(certificateValue)) {
            console.log("submitting valid data")
            setIsSubmitted(true);
        }
        setIsSubmitted(false);
    }

    useEffect(() => {
        if(isSubmitted) {
            setTimeout(() => {
                setSuccessMessage(`El certificado es auténtico, pertenece a ${certificates[resultId].company}`)
            }, 2000)
        }
    }, [isSubmitted])

    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="certificate">Ingrese el id del certificado:</label>
                <input id="certificate"type="text" onChange={handleChange} name="certificate" required placeholder="coloca el id del certificado"/>
            </div>
            {errorMessage && (<p className="message message__error">{errorMessage}</p>)}
            {successMessage && (<p className="message message__success">{successMessage}</p>)}
        </form>
    );
}