import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
       <footer className="footer-section">
                <div className="container">
                    <div className="footer-menu-wrap">
                        <div className="row gy-lg-4 gy-5">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="footer-logo-and-addition-info">

                                    <div className="address-area">
                                        <h2 className="text-white">My Ticket Expert</h2>
                                        <a href="https://www.google.com/maps">Skyline Plaza, 5th Floor, 123 Main Street Los
                                            Angeles, CA
                                            90001, USA</a>
                                    </div>
                                    <ul className="social-list">
                                        <li>
                                            <a className="social-facebook" href="https://www.facebook.com/">
                                                <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.54745 14V7.62433H9.62061L9.92877 5.12805H7.54745V3.53802C7.54745 2.81769 7.7409 2.3245 8.73736 2.3245H10V0.098925C9.38565 0.0306183 8.76814 -0.00236327 8.15028 0.000131594C6.3178 0.000131594 5.05966 1.16076 5.05966 3.29143V5.12338H3V7.61966H5.06416V14H7.54745Z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="social-linkedin" href="https://www.linkedin.com/">
                                                <svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2.44006 3.94531C3.26849 3.94531 3.94006 3.27374 3.94006 2.44531C3.94006 1.61689 3.26849 0.945312 2.44006 0.945312C1.61164 0.945312 0.940063 1.61689 0.940063 2.44531C0.940063 3.27374 1.61164 3.94531 2.44006 3.94531Z"></path>
                                                    <path d="M5.05646 5.13824V12.9447H7.58245V9.08422C7.58245 8.06557 7.78217 7.07907 9.09845 7.07907C10.3966 7.07907 10.4127 8.2437 10.4127 9.14853V12.9453H12.9401V8.66428C12.9401 6.56139 12.4682 4.94531 9.90672 4.94531C8.6769 4.94531 7.85255 5.5929 7.51543 6.20576H7.48125V5.13824H5.05646ZM0.940063 5.13824H3.47008V12.9447H0.940063V5.13824Z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="social-youtube" href="https://www.youtube.com/">
                                                <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.04463 1.74902H7.1225C7.84175 1.75165 11.4861 1.7779 12.4688 2.04215C12.7658 2.1228 13.0365 2.27999 13.2538 2.49803C13.471 2.71607 13.6273 2.98731 13.7069 3.28465C13.7953 3.61715 13.8574 4.05727 13.8994 4.5114L13.9081 4.6024L13.9274 4.8299L13.9344 4.9209C13.9913 5.72065 13.9983 6.46965 13.9991 6.63327V6.6989C13.9983 6.86865 13.9904 7.6684 13.9274 8.5014L13.9204 8.59327L13.9125 8.68427C13.8688 9.18477 13.804 9.68177 13.7069 10.0475C13.6273 10.3449 13.471 10.6161 13.2538 10.8341C13.0365 11.0522 12.7658 11.2094 12.4688 11.29C11.4538 11.563 7.59588 11.5823 7.06125 11.5831H6.937C6.66663 11.5831 5.54838 11.5779 4.37588 11.5376L4.22713 11.5324L4.151 11.5289L4.00138 11.5228L3.85175 11.5166C2.8805 11.4738 1.95563 11.4046 1.5295 11.2891C1.23255 11.2086 0.961931 11.0515 0.74467 10.8336C0.527409 10.6158 0.371108 10.3447 0.291375 10.0475C0.19425 9.68265 0.1295 9.18477 0.08575 8.68427L0.07875 8.5924L0.07175 8.5014C0.028318 7.90851 0.0043884 7.31436 0 6.7199L0 6.61227C0.00175 6.42415 0.00875 5.77402 0.056 5.05652L0.062125 4.9664L0.06475 4.9209L0.07175 4.8299L0.091 4.6024L0.09975 4.5114C0.14175 4.05727 0.203875 3.61627 0.29225 3.28465C0.371849 2.98731 0.528091 2.71607 0.74536 2.49803C0.96263 2.27999 1.23332 2.1228 1.53038 2.04215C1.9565 1.9284 2.88138 1.8584 3.85263 1.81465L4.00138 1.80852L4.15188 1.80327L4.22713 1.80065L4.37675 1.79452C5.2095 1.76775 6.04258 1.75287 6.87575 1.7499L7.04463 1.74902ZM5.6 4.55777V8.77352L9.23738 6.66652L5.6 4.55777Z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="social-instagram" href="https://www.instagram.com/">
                                                <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.9614 4.54186C12.9546 4.038 12.8602 3.53916 12.6821 3.06764C12.5278 2.66991 12.292 2.3087 11.9899 2.00709C11.6878 1.70549 11.326 1.47011 10.9276 1.316C10.4614 1.14127 9.9688 1.0468 9.4709 1.03659C8.82985 1.00798 8.62661 1 6.99933 1C5.37206 1 5.16348 1 4.5271 1.03659C4.02943 1.04687 3.5371 1.14135 3.07108 1.316C2.67263 1.47 2.31076 1.70534 2.00864 2.00696C1.70652 2.30858 1.47078 2.66985 1.31653 3.06764C1.14116 3.53274 1.04673 4.02436 1.03732 4.52123C1.00866 5.16188 1 5.36479 1 6.98936C1 8.61393 1 8.82149 1.03732 9.45748C1.04731 9.9551 1.14127 10.4461 1.31653 10.9124C1.47104 11.3101 1.70695 11.6712 2.00918 11.9727C2.3114 12.2742 2.6733 12.5094 3.07175 12.6634C3.5365 12.8451 4.0289 12.9464 4.52777 12.9627C5.16948 12.9914 5.37272 13 7 13C8.62728 13 8.83585 13 9.47223 12.9627C9.97012 12.953 10.4627 12.8587 10.9289 12.684C11.3272 12.5297 11.6889 12.2943 11.991 11.9927C12.2931 11.6911 12.5289 11.33 12.6835 10.9324C12.8587 10.4667 12.9527 9.97572 12.9627 9.47744C12.9913 8.83745 13 8.63455 13 7.00931C12.9987 5.38474 12.9987 5.17851 12.9614 4.54186ZM6.99534 10.0615C5.29343 10.0615 3.9147 8.68511 3.9147 6.98603C3.9147 5.28695 5.29343 3.91052 6.99534 3.91052C7.81237 3.91052 8.59594 4.23455 9.17367 4.81132C9.7514 5.38809 10.076 6.17035 10.076 6.98603C10.076 7.80171 9.7514 8.58397 9.17367 9.16074C8.59594 9.73751 7.81237 10.0615 6.99534 10.0615ZM10.1986 4.51392C10.1042 4.514 10.0108 4.49551 9.92358 4.4595C9.83638 4.42349 9.75716 4.37067 9.69044 4.30406C9.62371 4.23745 9.5708 4.15836 9.53473 4.07131C9.49866 3.98426 9.48014 3.89096 9.48023 3.79676C9.48023 3.70263 9.4988 3.60942 9.53489 3.52245C9.57097 3.43548 9.62386 3.35646 9.69053 3.28989C9.75721 3.22333 9.83636 3.17053 9.92347 3.13451C10.0106 3.09848 10.104 3.07994 10.1982 3.07994C10.2925 3.07994 10.3859 3.09848 10.473 3.13451C10.5601 3.17053 10.6393 3.22333 10.706 3.28989C10.7726 3.35646 10.8255 3.43548 10.8616 3.52245C10.8977 3.60942 10.9163 3.70263 10.9163 3.79676C10.9163 4.19326 10.5951 4.51392 10.1986 4.51392Z"></path>
                                                    <path d="M6.99589 8.73983C7.96336 8.73983 8.74764 7.95554 8.74764 6.98808C8.74764 6.02061 7.96336 5.23633 6.99589 5.23633C6.02843 5.23633 5.24414 6.02061 5.24414 6.98808C5.24414 7.95554 6.02843 8.73983 6.99589 8.73983Z"></path>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="footer-awards">
                                        <a href="#"><img alt="" src="/assets/img/home1/footer-award-img1.png" /></a>
                                        <a href="#"><img alt="" src="/assets/img/home1/footer-award-img2.png" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-sm-6 d-flex justify-content-sm-end">
                                <div className="footer-widget">
                                    <strong className="widget-title">Explore</strong>
                                    <ul className="widget-list">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">About us</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-end">
                                <div className="footer-widget">
                                    <strong className="widget-title">Helpline</strong>
                                    <ul className="widget-list">
                                        <li> <Link to="/privacy">Privacy Policy</Link></li>
                                        <li><a href="">FAQs</a></li>
                                        <li> <Link to="/terms">Terms &amp; Condition</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment-method-area">
                        <strong>We Accept:-</strong>
                        <ul className="payment-method-list">
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img1.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img2.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img3.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img4.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img5.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img6.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img7.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img8.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img9.png" /></a>
                            </li>
                            <li>
                                <a href="#"><img alt="" src="/assets/img/home1/payment-method-img10.png" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="copyright-area">
                        <span>© 2026 Myticketexpert.
                            All Rights Reserved.</span>

                    </div>
                </div>
            </footer>
    </div>
  )
}

export default Footer
