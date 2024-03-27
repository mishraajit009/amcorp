'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
                <div>
                    {/* service-style-two */}
                    <section className="service-section pt_120 pb_90">
                        <div className="bg-layer" style={{ backgroundImage: 'url(assets/images/background/service-bg.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="sec-title centred mb_60">
                            <h6>Our Services</h6>
                            <h2>Online Banking at Your <br />Fingertips</h2>
                            </div>
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="shape"></div>
                                                <div className="icon-box"><i className="icon-12"></i></div>
                                                <h4><Link href="/wm-service">Raw Material Procurement</Link></h4>
                                                <ul className="list-item clearfix">
                                                <li>Decade in wealth, private banking recruitment.</li>
                                                <li>Extensive network, robust database.</li>
                                                <li>Specialise: senior roles, Director levels.</li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-13"></i></div>
                                        <h4><Link href="/private-banking">Supply Chain Optimization</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Database of skilled banking, investment professionals</li>
                                            <li>Personalised financial recruitment services</li>
                                            <li>International network in major financial centres</li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-14"></i></div>
                                        <h4><Link href="/eam">Supplier Hub</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Specialists dedicated to client interests</li>
                                            <li>Optimal investment opportunity expertise</li>
                                            <li>Global footprint</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-16"></i></div>
                                        <h4><Link href="/financial-planning">Construction Hub </Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Comprehensive planning expert network</li>
                                            <li>Proficient in personal finance, retirement, risk.</li>
                                            <li>Ensures financial security, growth.</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* service-style-two end */}
 
                    {/* testimonial-style-two */}
                    
                    {/* testimonial-style-two end */}

                    {/* subscribe-section */}
                    
                    {/* subscribe-section end */}
                </div>

            </Layout>
        </>
    )
}