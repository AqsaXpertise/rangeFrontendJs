
import "@/public/css/contact-Us-styles.css";

function ContactUs(){
    return (
        <>
           <header>
                <img src="images/banner/banner-2.png" className="headerSimpleImg" />
           </header>
           <section className="section contactSection">
                   <div className="container">
                        <h4 className="sctionMdTitle text-primary text-center ">CONTACT US</h4>
                        <p className="fs-12 text-secondary mxWdtext mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                   </div>
           </section>
           <section className="section contactBoxsSection">
                    <div className="container">
                          <div className="row">
                                 <div className="col-lg-4">
                                       <div className="contactBox">
                                            <h5>Call Us</h5>
                                            <a href="#" className="textFlexBar">
                                                <img src="/images/icons/phone-icon.png" className="contact-icon" />
                                                <p>800 72 888</p>
                                            </a>
                                       </div>
                                 </div>
                                 <div className="col-lg-4">
                                       <div className="contactBox bdr">
                                            <h5>Email</h5>
                                            <a href="#" className="textFlexBar">
                                                <img src="/images/icons/mail-icon.png" className="contact-icon" />
                                                <p>sales@range.ae</p>
                                            </a>
                                       </div>
                                 </div>
                                 <div className="col-lg-4">
                                       <div className="contactBox">
                                            <h5>WhatsApp</h5>
                                            <a href="#" className="textFlexBar">
                                                <img src="/images/icons/whatsapp-icon.png" className="contact-icon" />
                                                <p>+971 56 1234567</p>
                                            </a>
                                       </div>
                                 </div>
                          </div>
                    </div>
           </section>
           <section className="addressSection">
                   <div className="container">
                         <div className="AddressArea">
                              <div className="addressBox">
                                     <div className="addressBoxHead">
                                            <h4>Request a Call back</h4>
                                            <p className=" text-secondary">
                                            Please fill up the form
                                            </p>
                                     </div>
                                     <div className="addressBoxContent">
                                          <div className="row ">
                                                <div className="col-12 mb-2">
                                                    <input type="text" className="form-control cntInptField" placeholder="Name"  />
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <input type="email" className="form-control cntInptField" placeholder="Email Address"  />
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <input type="email" className="form-control cntInptField" placeholder="Contact Number"  />
                                                </div>
                                                <div className="col-12">
                                                   <textarea className="form-control cntInptField textareaField" placeholder="Message"></textarea>
                                                </div>
                                                <input type="submit" className="fillBtn submitBtn" value="Submit"/>
                                           </div>
                                     </div>
                              </div>
                              <div className="addressBox">
                                     <div className="addressBoxHead">
                                        <h4>Location</h4>
                                        <p className=" text-secondary">
                                        2601, Aspect Tower, Business Bay, Dubai, UAE, 114888
                                        </p>
                                     </div>
                                     <div className="addressBoxContent pad-0">
                                            <iframe 
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828361546!2d54.89780997457341!3d25.07628044412959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1699736440138!5m2!1sen!2s"
                                                loading="lazy" 
                                                referrerPolicy="no-referrer-when-downgrade">

                                            </iframe>
                                     </div>
                              </div>
                         </div>
                   </div>
           </section>
           <section className="faqSection">
                    <div className="container">
                          <h4 className="sctionMdTitle text-primary ">FAQS</h4>

                          <div className="accordion" id="FAQAccordion">
                                <div className="accordion-item">
                                
                                    <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#faqCollapse-1" aria-expanded="true" >
                                        Lorem ipsum dolor sit amet?
                                    </button>
                                    <div id="faqCollapse-1" className="accordion-collapse collapse show" data-bs-parent="#FAQAccordion">
                                    <div className="accordion-body">
                                        <p className="fs-14 text-secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse-2" aria-expanded="false">
                                        Lorem ipsum dolor sit amet?
                                    </button>
                                    <div id="faqCollapse-2" className="accordion-collapse collapse" data-bs-parent="#FAQAccordion">
                                    <div className="accordion-body">
                                        <p className="fs-14 text-secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse-3" aria-expanded="false">
                                        Lorem ipsum dolor sit amet?
                                    </button>
                                    <div id="faqCollapse-3" className="accordion-collapse collapse" data-bs-parent="#FAQAccordion">
                                    <div className="accordion-body">
                                        <p className="fs-14 text-secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse-4" aria-expanded="false">
                                        Lorem ipsum dolor sit amet?
                                    </button>
                                    <div id="faqCollapse-4" className="accordion-collapse collapse" data-bs-parent="#FAQAccordion">
                                    <div className="accordion-body">
                                        <p className="fs-14 text-secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                               
                               
                            </div>
                    </div>
           </section>
           <section className="sectionBanner">
                    <div className="container">
                          <div className="row">
                                <div className="col-md-8">
                                     <h2 className="bnrTitle">Still need help?</h2>
                                     <p className="fs-12 text-secondary">
                                       Click on the blue round button at the bottom right corner of this page. 
                                       You can <br/>also email our support team at <a href="#" className="fs-12">info@range.ae</a>
                                     </p>
                                </div>
                                <div className="col-md-4">
                                      <a href="" className="fillBtn contactBtn btn">CONTACT US</a>
                                </div>
                          </div>
                    </div>
           </section>
        </>
    );
}
export default ContactUs;