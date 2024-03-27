import TestimonialSlider02 from "@/components/slider/TestimonialSlider02"
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Wealth Managment">
                <div>
                {/* about-style-two */}
                <section className="about-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                            <div className="content-box mr_110">
                                <div className="sec-title mb_20">
                                <h6>For Clients</h6>
                                </div>
                                <div className="text-box mb_40">
                                <p>
                                A&M recruits skilled Financial Planning professionals, focusing on financial analysis, risk assessment, and strategic planning for client prosperity.
                                </p>
                                </div>
                                <div className="sec-title mb_20">
                                <h6>For Candidates</h6>
                                </div>
                                <div className="text-box mb_40">
                                <p>
                                Elevate your Financial Planning career with A&M, connecting you to roles valuing expertise in personalized financial strategies and client guidance.
                                </p>
                                </div>
                                <div className="btn-box">
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_two">
                            <div className="image-box">
                                <div className="image-shape">
                                <div className="shape-3" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
                                <div className="shape-4" style={{ backgroundImage: "url(assets/images/shape/shape-3.png)" }}></div>
                                </div>
                                <figure className="image">
                                <img src="assets/images/resource/about-4.jpg" alt="" />
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* about-style-two */}

                {/* feature-style-three */}
                <section className="feature-style-three pb_90">
                    <div className="auto-container">
                        <div className="sec-title mb_70 centred">
                        <h6>Why US</h6>
                        <h2>Why Choose Us</h2>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-5"></i></div>
                                <h4><Link href="/service">Unrivalled network of financial professionals.</Link></h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-6"></i></div>
                                <h4><Link href="/service">Proven track record of successful placements.</Link></h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h4><Link href="/service">Deep understanding of the wealth management and private banking sectors.</Link></h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-8"></i></div>
                                <h4><Link href="/service">Commitment to building teams that drive success and foster growth
                                </Link></h4>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* feature-style-three end */}

                {/* process-section */}
                <section className="process-section centred pt_120 pb_90">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/process-bg.jpg)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title mb_110">
                        <h6>Our process</h6>
                        <h2>Our 3-Step Client Process</h2>
                        </div>
                        <div className="inner-container">
                        <div className="processing-block-one">
                            <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                            <div className="inner-box">
                            <span className="count-text">01 <br />Step</span>
                            <h3>Market Insight &<br />Needs Analysis</h3>
                            <p>Extensive database for targeted recruitment.</p>
                            </div>
                        </div>
                        <div className="processing-block-one">
                            <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
                            <div className="inner-box">
                            <span className="count-text">02 <br />Step</span>
                            <h3>Candidate Qualification<br /> & Interview </h3>
                            <p>Vetted candidates meet standards, expedited interviews ensure efficient selection.</p>
                            </div>
                        </div>
                        <div className="processing-block-one">
                            <div className="inner-box">
                            <span className="count-text">03 <br />Step</span>
                            <h3>Comprehensive Support & <br />Managed Services</h3>
                            <p>Ongoing support, feedback, 24/7 service for successful talent integration.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* process-section end */}

                {/* requirements-section */}
                <section className="requirements-section centred pt_120 pb_90">
                    <div className="auto-container">
                        <div className="sec-title mb_70">
                        <h6>Requirement</h6>
                        <h2>Our 3 Step Candidate Process </h2>
                        </div>
                        <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Step 1</h4>
                                <ul className="list-item clearfix">
                                <li>Speak to us to discuss your career aspirations, motivations, and what you're seeking in your next role.</li>
                                <li>Gain insights into current hiring trends within the financial services industry, ensuring you're well-informed about the market landscape.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Step 2</h4>
                                <ul className="list-item clearfix">
                                <li>We facilitate meetings between you and potential employers to assess mutual alignment, ensuring both parties' needs and expectations are met.</li>
                                <li>Enjoy 24/7 communication with our team, keeping you fully supported and informed throughout the entire recruitment process.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Step 3</h4>
                                <ul className="list-item clearfix">
                                <li>After placement, we maintain periodic check-ins to see how you're adapting to your new role and environment.</li>
                                <li>This ongoing support ensures a smooth transition and addresses any challenges or further career development needs.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* requirements-section end */}

                {/* subscribe-section */}
                {/* subscribe-section end */}
               
                </div>
            </Layout>
        </>
    )
}