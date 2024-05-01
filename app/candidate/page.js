
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="For Candidate">
                <div>
                    {/* contact-info-section */}
                    {/* contact-info-section End */}

                    {/* Google Map Section */}
                    {/* Google Map Section End */}
                    
                    {/* Contact Form Section */}
                    <section className="contact-section pt_120 pb_120">
                        <div className="auto-container">
                            <div className="sec-title centred mb_70">
                            <h6>Contact US</h6>
                            <h2>Contact Details</h2>
                            </div>
                            <div className="form-inner">
                            <form>
                                <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="username" placeholder="Your Name" required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="email" name="email" placeholder="Your email" required />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="phone" required placeholder="Phone" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                    <input type="text" name="subject" required placeholder="Subject" />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <div class="file-upload-wrapper">
                                    <input type="file" name="job-description" id="job-description" required />
                                    <button class="file-upload-button">Upload CV</button>
                                    <span class="file-upload-label" id="file-upload-label"></span>
                                </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                    <textarea name="message" placeholder="Type message"></textarea>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                                    <button className="theme-btn btn-one" type="submit" name="submit-form">
                                    Send Message
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </section>
                    {/* Contact Form Section End */}
                </div>

            </Layout>
        </>
    )
}