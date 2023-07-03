import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <>
    
        <div className="d-flex justify-content-center p-3" data-aos="fade-up">
                <div className="mt-1 mb-3">
                    <a href="#projects"  rel="noreferrer">
                        <FontAwesomeIcon icon={faChevronDown} style={{fontSize: "2rem", color: "#363636"}}/>
                    </a>
                </div>
            </div>
        
        </>
    )
}

