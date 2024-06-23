import React from 'react'
import bg2 from '../assets/footer.svg';
import logo from '../assets/logo.svg';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <div style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '80vh',
            display: 'flex',
            color: '#fff',
            fontFamily: 'Mukta-Regular',
            fontSize: '16px',
        }}>
            <div className="container-footer">
                <div className="inner-container">
                    <div>
                        <img src={logo} alt="Логотип" className="logo" />
                    </div>
                    <div>
                        <div className="section-title">Menu</div>
                        <ul className="menu-list">
                            <li className="menu-item"><a href="/menu">Menu</a></li>
                            <li className="menu-item"><a href="/delivery">Delivery</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="section-title">Contacts</div>
                        <div>
                            <ul className="contacts-list">
                                <li className="contact-item"><div>+1 (212) 354-25-54</div></li>
                                <li className="contact-item"><div>+1 (212) 123-45-67</div></li>
                                <li><div>sig-yog@gmail.com</div></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="section-title">Social media</div>
                        <ul className="social-media-list">
                            <li className="social-media-item"><a href="/notFound" className="social-media-link">Facebook</a></li>
                            <li className="social-media-item"><a href="/notFound" className="social-media-link">Twitter</a></li>
                            <li><a href="/notFound" className="social-media-link">Instagram</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className="section-title">Address</div>
                        <div className="address">
                            <p>2nd St, Long Beach,<br /> Los Angeles</p>
                            <p>Every day,<br /> from 11:00 AM to 11:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer