/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import './style.scss';

const Footer = () => {

    return (
        <div id="contact">
            <div className='container-fluid' style={{color: 'white'}}>
                <div className='row text-center block'>
                    <h4 className="lead">Contact me!</h4>
                    <div className='d-flex flex-row mb-3 justify-content-center'>
                    <a href="https://github.com/stefanylovato" target="_blank" rel='noreferrer'><BsGithub /></a>
                    <a href="https://github.com/stefanylovato" target="_blank" rel='noreferrer'><BsLinkedin /></a>
                    <a  href="https://github.com/stefanylovato" target="_blank" rel='noreferrer'><BsEnvelopeFill /></a>
                    </div>
                </div>
                    

                
            </div>
        </div>










        
    )
}

export default Footer;