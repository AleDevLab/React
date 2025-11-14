import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Foot() {
return (
<div className="contact-bar" id="contacto">
    <a href="mailto:ale.serranodev@gmail.com" className="contact-item">
    <FaEnvelope className="contact-icon" />
    <span>ale.serranodev@gmail.com</span>
    </a>

    <a
    href="https://www.linkedin.com/in/flavio-alejandro-serrano-s"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
    >
    <FaLinkedin className="contact-icon" />
    <span>linkedin.com/in/flavio-alejandro-serrano-s</span>
    </a>

    <a
    href="https://github.com/AleDevLab"
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
    >
    <FaGithub className="contact-icon" />
    <span>github.com/AleDevLab</span>
    </a>
</div>
);
}