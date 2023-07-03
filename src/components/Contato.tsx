import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';


export default function Contato() {
    return (
        <>
            <div className="btn-contato ">
                <div className="icon-container mt-1 mb-3">
                    <a href="https://drive.google.com/file/d/11Eh4354jpDox-G9cBVMtxCWKq-crn8OI/view" target="_blank" rel="noreferrer" className="icon icon-fill me-2" aria-label="Curriculo">
                        <FontAwesomeIcon icon={faFilePdf}  className="icon-contato"/>
                    </a>
                    <a href="https://www.instagram.com/pnsndesign/" target="_blank" rel="noreferrer" className="icon icon-fill me-2" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} className="icon-contato"/>
                    </a>
                    <a href="https://www.linkedin.com/in/pedro-neto-sn/" target="_blank" rel="noreferrer" className="icon icon-fill me-2" aria-label="Linkedin">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon-contato" />
                    </a>
                    <a href="mailto:pedrontsousa@gmail.com" target="_blank" rel="noreferrer" className="icon icon-fill" aria-label="Gmail">
                        <FontAwesomeIcon icon={faEnvelope} className="icon-contato" />
                    </a>
                </div>
            </div>
        </>
    )
}