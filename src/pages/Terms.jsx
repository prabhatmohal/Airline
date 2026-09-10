import React, { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Terms() {
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
                                <h1>Terms & Conditions
</h1>
                                <ul className="breadcrumb-list">
                                    <li><a href="/">Home</a></li>
                                    <li>
                                        <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.18836 13.9101L13.8084 8.28506C13.8682 8.23644 13.9165 8.17508 13.9496 8.10545C13.9828 8.03582 14 7.95967 14 7.88256C14 7.80544 13.9828 7.72929 13.9496 7.65966C13.9165 7.59003 13.8682 7.52867 13.8084 7.48005L6.18836 1.85505C5.73036 1.68606 5.46586 1.81472 5.39486 2.24105L12.4934 7.48005C12.5532 7.52867 12.6015 7.59003 12.6346 7.65966C12.6678 7.72929 12.685 7.80544 12.685 7.88256C12.685 7.95967 12.6678 8.03582 12.6346 8.10545C12.6015 8.17508 12.5532 8.23644 12.4934 8.28506L5.39836 13.5216C5.40299 13.6112 5.43147 13.6979 5.48086 13.7729C5.53024 13.8478 5.59874 13.9082 5.67927 13.9478C5.7598 13.9874 5.84945 14.0048 5.93895 13.9981C6.02844 13.9915 6.11455 13.9611 6.18836 13.9101ZM3.18836 1.85555L5.05236 3.23106L6.18236 4.06505L10.8094 7.48005C10.8724 7.52653 10.9237 7.58716 10.959 7.65708C10.9943 7.72699 11.0127 7.80422 11.0127 7.88256C11.0127 7.96089 10.9943 8.03812 10.959 8.10803C10.9237 8.17795 10.8724 8.23858 10.8094 8.28506L6.18186 11.7001L5.05236 12.5341L3.18886 13.9091L3.18786 13.9101C3.09786 13.9725 2.98997 14.0039 2.88052 13.9996C2.77106 13.9953 2.666 13.9554 2.58123 13.886C2.49647 13.8166 2.43663 13.7215 2.41076 13.615C2.38489 13.5086 2.3944 13.3966 2.43786 13.2961L4.96436 7.88256L2.43836 2.46906C2.40738 2.40285 2.39133 2.33065 2.39136 2.25756C2.39291 2.16566 2.41953 2.07594 2.46834 1.99807C2.51716 1.92021 2.58632 1.85715 2.66836 1.81573C2.7504 1.7743 2.84219 1.75606 2.93384 1.76299C3.02548 1.76992 3.11349 1.80226 3.18836 1.85555Z"></path>
                                        </svg>
                                        Terms & Conditions
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
          {/* Header Section */}
         

          {/* Introduction */}
          <div className="card shadow-sm mb-4">
            <div className="card-body p-4">
              <p className="card-text">
                We invite and welcome visitors on <strong>www.myticketexpert.com</strong> website. Aim of this website is to assist customers to gather travel information, post reviews/opinions on their travel related experiences/issues, engage them in travel related forums so that they gather maximum information on the travel industry/countries/cities around the world.
              </p>
              <p className="card-text">
                By accessing or using www.myticketexpert.com in any manner, it is considered that you have agreed to be bound by the agreement, as if you had signed this agreement.
              </p>
              <p className="card-text">
                Please read the agreement carefully. If you do not accept all of these terms and conditions, please do not use this website. We suggest visitors of myticketexpert.com to return to this page periodically to review the most current version of the agreement.
              </p>
              <p className="card-text mb-0">
                Myticketexpert.com reserves the right at any time, at our sole discretion, to change or otherwise modify the agreement without prior notice, and your continued access or use of this website signifies your acceptance of the updated or modified agreement.
              </p>
            </div>
          </div>

          {/* Prices */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Prices</h2>
            <p>
              All prices displayed for the products and services on www.myticketexpert.com are subject to change without prior information or notice and prices you see while making the booking may not be final until the full payment for the product or service is made at the end of the booking process.
            </p>
            <p>
              Prices on www.myticketexpert.com shall be inclusive or exclusive of booking fee, hotel taxes, airport taxes, port taxes or any other applicable government taxes (GST and VAT), etc.
            </p>
            <p>
              Availability of any product or service is subject to change at any point in time even while finalizing the booking, which can lead to price variation, depending upon the basis of available room type in the hotel, flight booking class, cruise cabin etc. at that point in time.
            </p>
          </section>

          {/* Booking and Payments */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Booking and Payments</h2>
            <p>
              All online payments that happen for any of the products or services booked on www.myticketexpert.com are secure. Myticketexpert.com does not store the credit/debit or any other payment card details of any customer in the database or in any data backup system. Once you are ready to transact, you are transferred directly to the bank website. The card details are captured on the bank website and not in myticketexpert.com. Myticketexpert.com takes no responsibility in case of any misuse of the credit card by whomsoever.
            </p>
            <p>
              Myticketexpert.com acts as an agent for its third-party providers and distributors for all products and services purchased by you on this website. You may place bookings for or may make purchases of products and services online at this site.
            </p>
            <p>
              A contract for the sale and purchase of products and services may be made online at this site by your acceptance of the products and services offered on the site (the "contract") by third party providers and/or distributors and/or where stated, myticketexpert.com, and you hereby agree to waive any rights to challenge the validity or enforceability of contracts entered into on this site on the grounds that it was made in electronic form instead of by paper and/or signed or sealed.
            </p>
            <p>
              Please note that by indicating your acceptance to purchase any product or service offered on the website, you are obligated to complete such transactions. You are prohibited from indicating your acceptance to purchase products and services where you do not intend to complete such transactions. You may not purchase goods or services that you are prohibited from purchasing or possessing by any applicable Indian or local laws.
            </p>
            <p>
              The responsibility for ensuring compliance with all applicable laws shall be yours alone. By submitting an order to purchase goods or services, you represent and warrant that you have the legal right to purchase, utilize and/or possess such goods or services.
            </p>
            <p>
              In case any user is booking a ticket/hotel or any other online services via a credit/debit/gift card which is not directly in the name of the person availing these services, myticketexpert.com reserves the right to cancel/hold the said service till the time proper verification is provided.
            </p>

            <div className="alert alert-warning my-4" role="alert">
              <h5 className="alert-heading fw-bold">Third-Party Card Payment Verification</h5>
              <p className="mb-2">
                In case you are booking using someone else's credit/debit/gift card, you are requested to send us:
              </p>
              <ul className="mb-2">
                <li>A copy of the card used</li>
                <li>Photo identification card of the person in whose name the card is</li>
                <li>Photo identification card of the person in whose name the services are being provided</li>
                <li>An authority letter from the credit/debit/gift card holder</li>
              </ul>
              <p className="mb-0">
                Please send these details to: <a href="mailto:myticketexpert@gmail.com" className="alert-link">myticketexpert@gmail.com</a>
              </p>
            </div>

            <p>
              In case any of the above-mentioned conditions are not met, myticketexpert.com reserves the right to declare such transactions as fraudulent and cancel/hold the service provided. It also holds the right to charge the requisite cancellation charges that may be applicable before refunding any such amount.
            </p>
          </section>

          {/* Amendment to Booking */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Amendment to Booking &amp; Purchase</h2>
            <p>
              Kindly read and note the terms &amp; conditions for amendment in bookings and purchases, while making the booking or purchase, which may vary for each product and service. If you don't find any terms and conditions regarding the amendment policy, you may not change your booking or purchase online. Kindly call our customer care team to know the amendment policy and make the necessary amendments.
            </p>
          </section>

          {/* Cancellation & Refunds */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Cancellation &amp; Refunds</h2>
            <p>
              Cancellation of bookings and cancellation policy differ for each product or service. When you make a booking, kindly view the terms &amp; conditions of each product or service, which reflect the cancellation and refund terms of that booking.
            </p>
            <p>
              You can cancel the purchased product or service online on our website — www.myticketexpert.com. If you find difficulty in cancelling, you can get the same cancelled by calling our customer care team. Cancellation at your request may require a minimum processing time, subject to specific terms and conditions applicable to the type of product or service booked &amp; purchased.
            </p>
            <p>
              There may be a full cancellation penalty on the products or services booked and purchased, which are non-utilized or cancelled after the cancellation deadline mentioned in the terms and conditions, while making the purchase.
            </p>
            <p>
              You agree to bear the full cost of any booking, cancellation, and administration fees for any products or services booked but not utilized for any reason. In some cases, myticketexpert.com may charge cancellation or amendment fees in addition to those imposed by travel services providers.
            </p>
            <p>
              Myticketexpert.com reserves the right to decline any booking or purchase for any reason and shall not be held liable for any resulting claims of losses, damages or compensation. In such an event, myticketexpert.com shall refund to you all unutilized money collected from you for that purchase.
            </p>
            <p>
              For bookings and purchases which have already been paid for by you, when cancelled, refunds will be made based on the refund policy mentioned in the terms and conditions at the time of booking or purchase. For an air ticket, it may take between 30–45 working days, and for hotels, it may take between 10–15 working days for the amount to get credited into your account. Refund policy may vary for every product and service.
            </p>
            <p className="text-muted fst-italic">
              The preceding refund timeline is a guide for your reference only and shall not be binding upon myticketexpert.com.
            </p>

            <div className="card bg-light border-danger my-3">
              <div className="card-body">
                <h5 className="card-title text-danger">Duplicate Bookings</h5>
                <p className="card-text mb-0">
                  You agree that multiple duplicate bookings for the same traveller(s) are not allowed and may result in damage and loss to myticketexpert.com, which you will bear in full.
                </p>
              </div>
            </div>
          </section>

          {/* SMS Communications */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">SMS Communications Terms</h2>
            <p>By opting in to receive SMS communications from myticketexpert.com, you agree to the following terms:</p>
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item">
                <strong>Types of Messages:</strong> You may receive SMS messages about your travel bookings, including booking confirmations, flight schedule changes, check-in reminders, travel advisories, and customer service updates.
              </li>
              <li className="list-group-item">
                <strong>Message Frequency:</strong> The number of messages you receive will vary based on your travel activities and interactions with our services.
              </li>
              <li className="list-group-item">
                <strong>Message and Data Rates:</strong> Standard message and data rates may apply as per your mobile carrier's terms.
              </li>
              <li className="list-group-item">
                <strong>Opt-Out Instructions:</strong> You can opt out of receiving SMS messages at any time by replying with the word <code>STOP</code> to any message received.
              </li>
              <li className="list-group-item">
                <strong>Assistance:</strong> For help or more information, reply with the word <code>HELP</code> to any of our messages or visit our website at www.myticketexpert.com.
              </li>
            </ul>
          </section>

          {/* Products & Services */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Products &amp; Services</h2>
            <p>
              Product &amp; service statements on this website are for general description purposes only, and not all products or services are available in every state or country. You can send us an enquiry via our Contact Us or Send Query section, and we will provide you with the details regarding terms &amp; conditions, exclusions, products, and services applicable to you.
            </p>
            
            <div className="row g-4 mt-2">
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Hotels</h5>
                    <p className="card-text">
                      When you make a hotel booking, kindly go through the fact sheet carefully. Myticketexpert.com updates fact sheets regularly; however, it is dependent on hotels for updated information. Renovations are undertaken at the sole discretion of hotels.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Sightseeing Tours</h5>
                    <p className="card-text">
                      Choice of seat-in-coach and private tours. Seat-in-coach may have waiting times and follow fixed timings. Entrance fees at monuments are not included unless specified.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Airlines</h5>
                    <p className="card-text">
                      Choice between low-cost and full-service airlines. Original identity photo card is mandatory for e-tickets at check-in. Myticketexpert.com is an intermediary and takes no responsibility for delays or cancellations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Holidays</h5>
                    <p className="card-text">
                      Read inclusions and itineraries before purchasing. Customization is available via the "Send Query" section.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Car Rental</h5>
                    <p className="card-text">
                      Available as self-drive or chauffeur drive. Myticketexpert.com is not responsible for breakdowns, quality issues, traffic delays, or speeding penalties.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card h-100 border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Travel Insurance</h5>
                    <p className="card-text">
                      Strongly recommended for all domestic and international travellers. Myticketexpert.com holds no responsibility for claims or disputes with the provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Delivery Section */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Delivery of Products &amp; Services</h2>
            <div className="accordion" id="deliveryAccordion">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingHotels">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHotels">
                    Hotels &amp; Sightseeing Delivery
                  </button>
                </h3>
                <div id="collapseHotels" className="accordion-collapse collapse" data-bs-parent="#deliveryAccordion">
                  <div className="accordion-body">
                    Instant confirmation is issued after full payment, and you receive the voucher by email with full details. Vouchers must be presented at check-in/pick-up.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingAirlines">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAirlines">
                    Airlines &amp; Paper Tickets
                  </button>
                </h3>
                <div id="collapseAirlines" className="accordion-collapse collapse" data-bs-parent="#deliveryAccordion">
                  <div className="accordion-body">
                    E-tickets with unique PNR are emailed instantly. Paper tickets (where applicable) are dispatched to your delivery address within 3 working days.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingHolidays">
                  <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHolidays">
                    Holidays, Rail, Cruise &amp; Car Rental
                  </button>
                </h3>
                <div id="collapseHolidays" className="accordion-collapse collapse" data-bs-parent="#deliveryAccordion">
                  <div className="accordion-body">
                    Holiday packages take a minimum of 24 hours for confirmation. Car rentals take 4–5 hours. Cruise and rail confirmations are instant upon full payment.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Third Party & Terms */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Third-Party Travel Service Providers</h2>
            <p>
              You may be bound by terms and conditions imposed by the travel service providers for whom myticketexpert.com acts as an agent, including conditions of carriage, refund, and cancellation policies of airlines, cruise lines, car rental companies, hotels, vacation rentals, etc.
            </p>
            <p>
              Myticketexpert.com is not liable for any claims against non-fulfilment or unsatisfactory fulfilment of products and services purchased on your behalf from these third-party providers. In cases of overbooking or flight rescheduling, myticketexpert.com takes no responsibility for resulting losses.
            </p>
          </section>

          {/* Legal & Regulatory */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Passport, Visa &amp; Health Requirements</h2>
            <p>
              It is a mandatory requirement for most countries that foreign nationals hold a passport with a minimum validity of 6 months. Visa and health regulations differ from country to country. It is the sole responsibility of an individual traveller to submit complete documentation to the relevant embassy/consulate. Myticketexpert.com takes no responsibility for visa rejections.
            </p>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Prohibited Activities on the Site</h2>
            <p>All content and infrastructure on this website are proprietary rights of myticketexpert.com. You agree not to:</p>
            <ul className="list-group list-group-numbered mb-3">
              <li className="list-group-item">Use this website or its contents for any commercial purpose.</li>
              <li className="list-group-item">Access, monitor, or copy content using robots, spiders, scrapers, or automated means.</li>
              <li className="list-group-item">Violate robot exclusion headers or bypass access prevention measures.</li>
              <li className="list-group-item">Take any action that imposes an unreasonable load on our infrastructure.</li>
              <li className="list-group-item">Deep-link, frame, or mirror any portion of this website.</li>
              <li className="list-group-item">Modify, translate, adapt, edit, decompile, disassemble, or reverse engineer any software.</li>
            </ul>
          </section>

          {/* Liability Disclaimer */}
          <section className="mb-5">
            <div className="card border-warning">
              <div className="card-header bg-warning text-dark fw-bold">
                Liability Disclaimer
              </div>
              <div className="card-body">
                <p className="card-text small">
                  Content, information, software, products, and services published on this website may include inaccuracies or errors. Myticketexpert.com and its affiliates do not guarantee accuracy and disclaim all liability for errors relating to product information, pricing, photographs, and general descriptions.
                </p>
                <p className="card-text small mb-0">
                  All information, software, products, and services are provided "as is" without warranty of any kind. Myticketexpert.com disclaims all warranties that this website, its servers, or emails sent are free of viruses or other harmful components.
                </p>
              </div>
            </div>
          </section>

          {/* Coupon Offers Table */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Coupon Offers — Terms &amp; Conditions</h2>
            <div className="table-responsive">
              <table className="table table-striped table-hover table-bordered align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">Cabin / Trip</th>
                    <th scope="col">Coupon Code</th>
                    <th scope="col">Savings</th>
                    <th scope="col">Description</th>
                    <th scope="col">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>One Way Economy</td>
                    <td><code>MTE-GO2INDIA</code></td>
                    <td><span className="badge bg-success">$5</span></td>
                    <td>Applies to one-way economy flights for affordable travel.</td>
                    <td>One-way economy bookings only.</td>
                  </tr>
                  <tr>
                    <td>Round Trip Economy</td>
                    <td><code>MTE-2WAYHOME</code></td>
                    <td><span className="badge bg-success">$10</span></td>
                    <td>Applicable for round-trip economy bookings.</td>
                    <td>Round-trip economy only.</td>
                  </tr>
                  <tr>
                    <td>Premium Economy</td>
                    <td><code>MTE-PREMFIRST</code></td>
                    <td><span className="badge bg-success">$15</span></td>
                    <td>Provides savings on premium economy bookings.</td>
                    <td>Premium economy bookings only.</td>
                  </tr>
                  <tr>
                    <td>Premium Round Trip</td>
                    <td><code>MTE-LUXEROUND</code></td>
                    <td><span className="badge bg-success">$30</span></td>
                    <td>Discount for enhanced comfort on both legs.</td>
                    <td>Premium round-trip bookings.</td>
                  </tr>
                  <tr>
                    <td>Business Class One Way</td>
                    <td><code>MTE-BUSINESSGO</code></td>
                    <td><span className="badge bg-success">$35</span></td>
                    <td>Discount on business class one-way flights.</td>
                    <td>One-way business class only.</td>
                  </tr>
                  <tr>
                    <td>Business Class Round Trip</td>
                    <td><code>MTE-BIZROUND</code></td>
                    <td><span className="badge bg-success">$50</span></td>
                    <td>Discount on business-class round-trip flights.</td>
                    <td>Round-trip business class only.</td>
                  </tr>
                  <tr>
                    <td>First Class One Way</td>
                    <td><code>MTE-VIPINDIA</code></td>
                    <td><span className="badge bg-success">$75</span></td>
                    <td>Discount on first class one-way bookings.</td>
                    <td>One-way first class only.</td>
                  </tr>
                  <tr>
                    <td>First Class Round Trip</td>
                    <td><code>MTE-FIRST2WAY</code></td>
                    <td><span className="badge bg-success">$135</span></td>
                    <td>Maximum value for luxury travelers.</td>
                    <td>First class round-trip bookings.</td>
                  </tr>
                  <tr>
                    <td>Referral Bonus</td>
                    <td><code>MTE-Referral</code></td>
                    <td><span className="badge bg-success">$10</span></td>
                    <td>Both referrer and referred user receive savings.</td>
                    <td>Both parties receive $10 reward.</td>
                  </tr>
                  <tr>
                    <td>Sign-Up Bonus</td>
                    <td><code>MTE-Welcome</code></td>
                    <td><span className="badge bg-success">$5</span></td>
                    <td>New users receive savings upon registration.</td>
                    <td>One-time use for new users only.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Group Holiday Packages */}
          <section className="mb-5">
            <h2 className="h3 text-secondary mb-3 border-bottom pb-2">Group Holiday Package Discount</h2>
            <div className="card mb-4 border-info">
              <div className="card-body">
                <h5 className="card-title fw-bold text-info-emphasis">1. Eligibility Criteria</h5>
                <ul className="card-text mb-0">
                  <li>Applies only to Holiday Package group bookings.</li>
                  <li>Minimum group size: 4 adults.</li>
                  <li>Children and infants are excluded from discount calculations.</li>
                </ul>
              </div>
            </div>

            <h5 className="fw-bold mb-3">2. Discount Structure</h5>
            <div className="table-responsive mb-4">
              <table className="table table-bordered table-striped align-middle">
                <thead className="table-secondary">
                  <tr>
                    <th scope="col">Group Size</th>
                    <th scope="col">Discount Per Person</th>
                    <th scope="col">Inclusions / Add-ons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>4–6 Pax</td>
                    <td>$25 × 4 = $100</td>
                    <td>Complimentary welcome drink at one hotel</td>
                  </tr>
                  <tr>
                    <td>7–10 Pax</td>
                    <td>$40 × 7 = $280</td>
                    <td>Free dinner on one night</td>
                  </tr>
                  <tr>
                    <td>11–15 Pax</td>
                    <td>$45 × 11 = $495</td>
                    <td>Complimentary tour guide for half-day</td>
                  </tr>
                  <tr>
                    <td>16+ Pax</td>
                    <td>$60 × 16 = $960</td>
                    <td>Soft drink &amp; free dinner on one night</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="p-3 border rounded bg-light h-100">
                  <h6 className="fw-bold">3. Travel Duration</h6>
                  <p className="mb-0 small">Valid only on holiday bookings with a minimum duration of 5 nights and 6 days.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 border rounded bg-light h-100">
                  <h6 className="fw-bold">4. Booking &amp; Payment</h6>
                  <p className="mb-0 small">Discounts are applied at confirmation. Full payment or deposit is required to activate.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Contact Note */}
          <footer className="text-center pt-4 border-top">
            <p className="text-muted">
              For questions, copyright notices, or legal inquiries, email us at{' '}
              <a href="mailto:myticketexpert@gmail.com" className="fw-bold text-decoration-none">
                myticketexpert@gmail.com
              </a>
            </p>
            <p className="small text-muted mb-0">© myticketexpert.com — All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
           <Footer />

        </>
    );
}
