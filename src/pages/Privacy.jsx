import React, { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Privacy() {
    return (
        <>

            <div id="magic-cursor">
                <div id="ball"></div>
            </div>


            <div id="scroll-percentage">
                <span id="scroll-percentage-value">0%</span>
                <svg className="arrow" fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M7 1.55632L14 10.8896L0 10.8896L7 1.55632Z"></path>
                    </g>
                </svg>
            </div>

            <button className="d-none">

            </button>



            <header className="header-area style-1 mb-2">
                <div className="container d-flex flex-nowrap align-items-center justify-content-between position-relative">
                    <div className="logo-and-menu-area">
                        <a className="header-logo" href="/">
                            <img alt="" src="/assets/img/header-logo.svg" />
                        </a>
                        <div className="main-menu">
                            <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
                                <a className="mobile-logo-wrap" href="/">
                                    <img alt="" src="/assets/img/header-logo.svg" />
                                </a>
                                <div className="menu-close-btn">
                                    <i className="bi bi-x"></i>
                                </div>
                            </div>
                            <ul className="menu-list">
                                <li className="active">
                                    <a className="drop-down" href="/">
                                        Home
                                    </a>
                                </li>

                                <li ><a href="/about">About us</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="nav-right">
                        <div className="btn-grp d-lg-flex d-none">
                            {/* <a className="ai-btn" href="#">
                                <span className="ai-btn-outline">
                                    <span className="ai-btn-outline-sweep"></span>
                                </span>
                                <span className="ai-btn-bg"></span>
                                <span className="ai-btn-content">
                                    <svg height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M3.74977 1.49988C3.74977 1.10209 3.59174 0.720588 3.31046 0.439306C3.02918 0.158023 2.64768 0 2.24988 0C1.85209 0 1.47059 0.158023 1.18931 0.439306C0.908023 0.720588 0.75 1.10209 0.75 1.49988C0.750152 1.7984 0.839458 2.09007 1.00647 2.33749C1.17348 2.58492 1.41058 2.77683 1.68737 2.88861V7.50009H2.8124V2.88861C3.08924 2.7769 3.3264 2.58501 3.49342 2.33757C3.66044 2.09013 3.74971 1.79842 3.74977 1.49988ZM17.2503 1.49988C17.2435 1.10653 17.0824 0.731589 16.8019 0.455824C16.5213 0.180058 16.1436 0.0255328 15.7502 0.0255328C15.3568 0.0255328 14.9791 0.180058 14.6985 0.455824C14.4179 0.731589 14.2569 1.10653 14.2501 1.49988C14.2502 1.79843 14.3396 2.09011 14.5066 2.33754C14.6737 2.58497 14.9108 2.77686 15.1877 2.88861V7.50009H16.3127V2.88906C16.5896 2.77723 16.8267 2.58526 16.9938 2.33775C17.1608 2.09025 17.2502 1.79849 17.2503 1.49988ZM13.5001 8.25003C10.7227 9.21261 7.50285 9.28731 4.49993 8.25003C3.80422 9.40161 3.37491 10.9924 3.37491 12.7504C3.37491 13.5788 5.89226 14.2502 9.00003 14.2502C12.1065 14.2502 14.6252 13.5788 14.6252 12.7504C14.6252 10.9924 14.1961 9.40161 13.5001 8.25003ZM6.18747 12.7504C6.06432 12.7504 5.94236 12.7262 5.82858 12.6791C5.7148 12.632 5.61142 12.5629 5.52436 12.4758C5.4373 12.3887 5.36826 12.2853 5.3212 12.1715C5.27414 12.0577 5.24998 11.9357 5.2501 11.8125C5.2501 11.2948 5.66929 10.8752 6.18747 10.8752C6.70566 10.8752 7.12484 11.2948 7.12484 11.8125C7.12496 11.9357 7.1008 12.0577 7.05374 12.1715C7.00668 12.2853 6.93764 12.3887 6.85058 12.4758C6.76352 12.5629 6.66014 12.632 6.54636 12.6791C6.43258 12.7262 6.31062 12.7504 6.18747 12.7504ZM11.8126 12.7504C11.6894 12.7505 11.5674 12.7263 11.4536 12.6792C11.3398 12.6321 11.2364 12.563 11.1493 12.4759C11.0622 12.3888 10.9931 12.2854 10.9461 12.1716C10.899 12.0577 10.8749 11.9357 10.875 11.8125C10.875 11.2948 11.294 10.8752 11.8126 10.8752C12.3312 10.8752 12.7502 11.2948 12.7502 11.8125C12.7503 11.9357 12.7262 12.0577 12.6791 12.1716C12.6321 12.2854 12.563 12.3888 12.4759 12.4759C12.3888 12.563 12.2854 12.6321 12.1716 12.6792C12.0578 12.7263 11.9358 12.7505 11.8126 12.7504Z"></path>
                                            <path d="M8.99996 2.99999C4.0296 2.99999 -0.000244141 7.36419 -0.000244141 12.7504C-0.000244141 15.6509 4.0296 18.0002 8.99996 18.0002C13.9719 18.0002 18.0002 15.6509 18.0002 12.7504C18.0002 7.36419 13.9719 2.99999 8.99996 2.99999ZM8.99996 16.5003C4.57996 16.5003 1.49964 14.5241 1.49964 12.7504C1.49964 8.20098 4.86414 4.49988 8.99996 4.49988C13.1353 4.49988 16.5 8.20098 16.5 12.7504C16.5 14.5241 13.4204 16.5003 8.99996 16.5003Z"></path>
                                        </g>
                                    </svg>
                                    <span>Plan with AI</span>
                                </span>
                            </a> */}
                            <a className="contact-btn" href="https://wa.me/+917307713497" target='blank'>
                                <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.6713 9.53858L11.6653 9.58858C10.1993 8.85791 10.046 8.76058 9.85664 9.04458C9.7253 9.24124 9.34264 9.68724 9.2273 9.81924C9.11064 9.94924 8.99464 9.95924 8.79664 9.86924C8.59664 9.76924 7.95464 9.55924 7.19464 8.87924C6.60264 8.34924 6.2053 7.69924 6.08797 7.49924C5.89264 7.16191 6.3013 7.11391 6.6733 6.40991C6.73997 6.26991 6.70597 6.15991 6.65664 6.06058C6.60664 5.96058 6.20864 4.98058 6.04197 4.58991C5.88197 4.20058 5.7173 4.24991 5.59397 4.24991C5.20997 4.21658 4.9293 4.22191 4.68197 4.47924C3.60597 5.66191 3.8773 6.88191 4.79797 8.17924C6.6073 10.5472 7.5713 10.9832 9.33397 11.5886C9.80997 11.7399 10.244 11.7186 10.5873 11.6692C10.97 11.6086 11.7653 11.1886 11.9313 10.7186C12.1013 10.2486 12.1013 9.85858 12.0513 9.76858C12.002 9.67858 11.8713 9.62858 11.6713 9.53858Z"></path>
                                    <path d="M13.68 2.29962C8.554 -2.65571 0.0706667 0.938288 0.0673333 7.92896C0.0673333 9.32629 0.433333 10.689 1.13067 11.8923L0 16.0003L4.22333 14.899C9.49333 17.7456 15.9973 13.9656 16 7.93296C16 5.81562 15.1733 3.82296 13.67 2.32562L13.68 2.29962ZM14.668 7.91096C14.664 12.9996 9.078 16.1776 4.66 13.5803L4.42 13.4376L1.92 14.0876L2.59 11.6576L2.43067 11.4076C-0.318667 7.03096 2.84 1.31096 8.048 1.31096C8.91771 1.30877 9.77922 1.4791 10.5827 1.81211C11.3861 2.14511 12.1155 2.63416 12.7287 3.25096C13.3452 3.86001 13.8342 4.58576 14.1671 5.38585C14.5001 6.18594 14.6704 7.04435 14.668 7.91096Z"></path>
                                </svg>
                                +91 73077 13497
                            </a>
                        </div>


                        <div className="sidebar-button mobile-menu-btn">
                            <svg height="18" viewBox="0 0 20 18" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.29445 2.8421H10.5237C11.2389 2.8421 11.8182 2.2062 11.8182 1.42105C11.8182 0.635903 11.2389 0 10.5237 0H1.29445C0.579249 0 0 0.635903 0 1.42105C0 2.2062 0.579249 2.8421 1.29445 2.8421Z">
                                </path>
                                <path d="M1.23002 10.421H18.77C19.4496 10.421 20 9.78506 20 8.99991C20 8.21476 19.4496 7.57886 18.77 7.57886H1.23002C0.550421 7.57886 0 8.21476 0 8.99991C0 9.78506 0.550421 10.421 1.23002 10.421Z">
                                </path>
                                <path d="M18.8052 15.1579H10.2858C9.62563 15.1579 9.09094 15.7938 9.09094 16.5789C9.09094 17.3641 9.62563 18 10.2858 18H18.8052C19.4653 18 20 17.3641 20 16.5789C20 15.7938 19.4653 15.1579 18.8052 15.1579Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </header>
            <div className="home1-breadcrumb-section" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(/assets/img/innerpages/breadcrumb-bg1.jpg)" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="banner-content">
                                <h1>Privacy Policy</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.18836 13.9101L13.8084 8.28506C13.8682 8.23644 13.9165 8.17508 13.9496 8.10545C13.9828 8.03582 14 7.95967 14 7.88256C14 7.80544 13.9828 7.72929 13.9496 7.65966C13.9165 7.59003 13.8682 7.52867 13.8084 7.48005L6.18836 1.85505C5.73036 1.68606 5.46586 1.81472 5.39486 2.24105L12.4934 7.48005C12.5532 7.52867 12.6015 7.59003 12.6346 7.65966C12.6678 7.72929 12.685 7.80544 12.685 7.88256C12.685 7.95967 12.6678 8.03582 12.6346 8.10545C12.6015 8.17508 12.5532 8.23644 12.4934 8.28506L5.39836 13.5216C5.40299 13.6112 5.43147 13.6979 5.48086 13.7729C5.53024 13.8478 5.59874 13.9082 5.67927 13.9478C5.7598 13.9874 5.84945 14.0048 5.93895 13.9981C6.02844 13.9915 6.11455 13.9611 6.18836 13.9101ZM3.18836 1.85555L5.05236 3.23106L6.18236 4.06505L10.8094 7.48005C10.8724 7.52653 10.9237 7.58716 10.959 7.65708C10.9943 7.72699 11.0127 7.80422 11.0127 7.88256C11.0127 7.96089 10.9943 8.03812 10.959 8.10803C10.9237 8.17795 10.8724 8.23858 10.8094 8.28506L6.18186 11.7001L5.05236 12.5341L3.18886 13.9091L3.18786 13.9101C3.09786 13.9725 2.98997 14.0039 2.88052 13.9996C2.77106 13.9953 2.666 13.9554 2.58123 13.886C2.49647 13.8166 2.43663 13.7215 2.41076 13.615C2.38489 13.5086 2.3944 13.3966 2.43786 13.2961L4.96436 7.88256L2.43836 2.46906C2.40738 2.40285 2.39133 2.33065 2.39136 2.25756C2.39291 2.16566 2.41953 2.07594 2.46834 1.99807C2.51716 1.92021 2.58632 1.85715 2.66836 1.81573C2.7504 1.7743 2.84219 1.75606 2.93384 1.76299C3.02548 1.76992 3.11349 1.80226 3.18836 1.85555Z"></path>
                                        </svg>
                                        Privacy Policy
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow-sm mb-5">
            <div className="card-body p-4">
              <h2 className="h4 card-title text-secondary fw-bold mb-3">Introduction</h2>
              <p className="card-text">
                <strong>myticketexpert.com</strong> (“we,” “us,” or “our”) values your trust and wants you to be familiar with how we collect, use, and disclose information.
              </p>
              <p className="card-text">
                This Privacy Policy describes our practices in connection with information that we collect when you visit any of our websites (including, but not limited to, <strong>www.myticketexpert.com</strong>) (collectively, the “Websites”), access or use any of the software applications made available by us for use on mobile devices (the “Apps”), or purchase or use our services provided through our various channels, including, but not limited to, our Websites, Apps, and contact centers (the “Services”).
              </p>
              <p className="card-text mb-0">
                By visiting any of our Websites, accessing and/or using any of our Apps, or purchasing or using our Services, you are agreeing to the terms and conditions of this Privacy Policy and the accompanying Terms and Conditions.
              </p>
            </div>
          </div>

          {/* Personal Information Section */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Personal Information</h2>
            
            <h5 className="fw-bold text-dark mt-4">Personal Information We May Collect</h5>
            <p>
              “Personal Information” is information that identifies you as an individual or relates to an identifiable person, including, for example:
            </p>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">Name</li>
              <li className="list-group-item">Postal address(es)</li>
              <li className="list-group-item">Telephone number</li>
              <li className="list-group-item">Email address</li>
              <li className="list-group-item">Credit and debit card number and related information</li>
              <li className="list-group-item">Social media account ID</li>
              <li className="list-group-item">Passport number</li>
              <li className="list-group-item">Number assigned by a transportation agency, such as a TSA known traveler number</li>
              <li className="list-group-item">
                Any other information you provide when you communicate or book travel with us (e.g., dietary preferences or needs) and booking details (e.g., departure points and destinations)
              </li>
            </ul>
            <p className="small text-muted">
              If you submit any Personal Information relating to other people to us or to our service providers, you represent that you have the authority to do so and permit us to use the information in accordance with this Privacy Policy.
            </p>

            <h5 className="fw-bold text-dark mt-4">How We May Collect Personal Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <div className="p-3 border rounded bg-light h-100">
                  <h6 className="fw-bold text-primary">Through the Services</h6>
                  <p className="small mb-0">When you make a booking, register for a promotion, or interact with our online platform.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border rounded bg-light h-100">
                  <h6 className="fw-bold text-primary">Offline</h6>
                  <p className="small mb-0">When you reach out directly to our customer service channels or telephone agents.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 border rounded bg-light h-100">
                  <h6 className="fw-bold text-primary">From Other Sources</h6>
                  <p className="small mb-0">From public databases, joint marketing partners, social media platforms, and third parties.</p>
                </div>
              </div>
            </div>

            <h5 className="fw-bold text-dark mt-4">How We May Use Personal Information</h5>
            <ul className="list-group list-group-numbered mb-4">
              <li className="list-group-item">To complete and fulfill your booking or purchase, process payments, and provide customer support. Passport information is strictly used for travel bookings.</li>
              <li className="list-group-item">To respond to inquiries and fulfill your requests, such as sending newsletters.</li>
              <li className="list-group-item">To send administrative information regarding the Services, terms, conditions, and policies.</li>
              <li className="list-group-item">To send marketing communications that we believe may be of interest to you, as permitted by law.</li>
              <li className="list-group-item">To personalize your experience on the Services with tailored products and offers.</li>
              <li className="list-group-item">To facilitate sweepstakes, contests, and social sharing functionality.</li>
              <li className="list-group-item">For business operations, data analysis, fraud monitoring, developing new products, and improving our Services.</li>
              <li className="list-group-item">To comply with legal obligations, requests from public/government authorities, and to protect our rights, privacy, safety, or property.</li>
            </ul>

            <h5 className="fw-bold text-dark mt-4">How Personal Information May Be Disclosed</h5>
            <p>Your Personal Information may be disclosed to third parties as follows:</p>
            <div className="accordion mb-4" id="disclosureAccordion">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingAffiliates">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAffiliates">
                    Affiliates &amp; Travel Suppliers
                  </button>
                </h3>
                <div id="collapseAffiliates" className="accordion-collapse collapse" data-bs-parent="#disclosureAccordion">
                  <div className="accordion-body">
                    Disclosed to our corporate affiliates and third-party travel suppliers (airlines, hotels, car rental companies, aggregators, travel insurance providers) to fulfill your requested travel arrangements.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingServiceProviders">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseServiceProviders">
                    Service Providers &amp; Business Partners
                  </button>
                </h3>
                <div id="collapseServiceProviders" className="accordion-collapse collapse" data-bs-parent="#disclosureAccordion">
                  <div className="accordion-body">
                    Shared with vendors providing hosting, payment processing, IT infrastructure, customer support, email delivery, auditing, and contest administration under strict confidentiality agreements.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingCorporate">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCorporate">
                    Corporate Transfers &amp; Legal Obligations
                  </button>
                </h3>
                <div id="collapseCorporate" className="accordion-collapse collapse" data-bs-parent="#disclosureAccordion">
                  <div className="accordion-body">
                    In the event of a merger, acquisition, reorganization, or sale of assets, personal data will be transferred to the acquiring entity. We also disclose information to comply with legal processes or law enforcement.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SMS Specific Privacy Policy */}
          <section className="mb-5">
            <div className="card border-primary bg-light">
              <div className="card-body p-4">
                <h4 className="card-title fw-bold text-primary mb-3">SMS Consent and Data Sharing</h4>
                <p className="card-text">
                  We respect your privacy and are committed to protecting your personal information. When you provide consent to receive SMS communications from <strong>myticketexpert.com</strong>, please be assured that:
                </p>
                <div className="alert alert-success fw-bold text-center my-3" role="alert">
                  SMS consent is not shared with third parties or affiliates for marketing purposes.
                </div>
                <ul className="mb-0">
                  <li>Your mobile number and SMS consent are used solely to send you information related to your bookings, such as confirmations, updates, and important notifications.</li>
                  <li>We do not sell, rent, or disclose your SMS consent to any external parties for their promotional activities.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Other Information */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Other Information</h2>
            <p>
              “Other Information” is any information that does not directly reveal your specific identity or directly relate to an individual, such as browser/device data, app usage data, cookie telemetry, and aggregated data.
            </p>
            
            <div className="row g-4 mt-2">
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-bold">Browser &amp; Device Information</h6>
                    <p className="small mb-0">Automatically collected details like MAC address, OS, resolution, browser type, and device model to ensure the site renders correctly.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-bold">Cookies &amp; Pixel Tags</h6>
                    <p className="small mb-0">Used to collect anonymous traffic data, track marketing efficiency, and optimize browsing experiences.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-bold">IP Address &amp; Location Data</h6>
                    <p className="small mb-0">Automatically logged for server diagnostics, calculating usage levels, and providing tailored location-based content.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h6 className="fw-bold">Aggregated Data</h6>
                    <p className="small mb-0">Compiled data that does not identify individuals (e.g., percentage of users living in a specific region).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Security & Access Rights */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Security &amp; Your Rights</h2>
            <p>
              We seek to use reasonable organizational, technical, and administrative measures to protect Personal Information within our organization. If you believe your interaction with us is no longer secure, please notify us immediately.
            </p>

            <div className="row g-3 my-3">
              <div className="col-md-6">
                <div className="p-3 border rounded">
                  <h6 className="fw-bold text-dark">Opt-Out Options</h6>
                  <p className="small mb-0">
                    You can opt out of marketing emails by clicking the unsubscribe link inside any promotional email or contacting us directly. Push notifications can be disabled via your device settings.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded">
                  <h6 className="fw-bold text-dark">Access, Change, or Suppress</h6>
                  <p className="small mb-0">
                    To review, correct, update, or delete previously provided Personal Information, email us at <a href="mailto:myticketexpert@gmail.com">myticketexpert@gmail.com</a> specifying your request.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Jurisdiction Specific Notices */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">International &amp; Jurisdiction Notices</h2>
            
            <div className="accordion" id="jurisdictionAccordion">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingNonUS">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNonUS">
                    Non-US Residents &amp; Cross-Border Transfers
                  </button>
                </h3>
                <div id="collapseNonUS" className="accordion-collapse collapse" data-bs-parent="#jurisdictionAccordion">
                  <div className="accordion-body small">
                    Our servers are located in the U.S. If you are located outside the U.S., any data provided will be transferred to the U.S. Providing data constitutes your explicit consent to this transfer.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingGDPR">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGDPR">
                    EEA Residents (GDPR)
                  </button>
                </h3>
                <div id="collapseGDPR" className="accordion-collapse collapse" data-bs-parent="#jurisdictionAccordion">
                  <div className="accordion-body small">
                    Persons located in the European Economic Area should review GDPR provisions regarding data processing, access rights, and cross-border transfer mechanisms.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingCCPA">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCCPA">
                    California &amp; Canadian Privacy Rights
                  </button>
                </h3>
                <div id="collapseCCPA" className="accordion-collapse collapse" data-bs-parent="#jurisdictionAccordion">
                  <div className="accordion-body small">
                    Residents of California (CCPA / Shine the Light) and Canada may request details on disclosures to third parties or affiliates for marketing purposes by contacting us. We currently do not respond to Do Not Track (DNT) signals.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sensitive Info & Minors */}
          <section className="mb-5">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card h-100 border-danger">
                  <div className="card-body">
                    <h6 className="fw-bold text-danger">Sensitive Information</h6>
                    <p className="card-text small mb-0">
                      We ask that you do not send us sensitive Personal Information (e.g., Social Security numbers, racial or ethnic origin, political opinions, religion, health, biometrics, or criminal background) through the Services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-secondary">
                  <div className="card-body">
                    <h6 className="fw-bold text-secondary">Minors</h6>
                    <p className="card-text small mb-0">
                      The Services are not directed to individuals under eighteen (18) years of age, and we request that minors do not provide Personal Information through the Services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
          <Footer />
        </>
    );
}
