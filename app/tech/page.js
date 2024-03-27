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
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                            <div className="inner-box">
                                                <div className="shape"></div>
                                                <div className="icon-box"><i className="icon-12"></i></div>
                                                <h4><Link href={{
                                                    pathname:"/tech-services",
                                                    query: {techProduct :"erp"}
                                                }} 
                                                techProducts = "erp"
                                                >ERP’s</Link></h4>
                                                <ul className="list-item clearfix">
                                                <li>SAP </li>
                                                <li>NetSuite </li>
                                                <li>Oracle</li>
                                                <li>MS Dynamics</li>
                                                </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                    <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-13"></i></div>
                                        <h4><Link href={{
                                            pathname:"/tech-services",
                                            query: {techProduct :"sd"}
                                            }}>Software Development</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Java / JavaScript</li>
                                            <li>Python</li>
                                            <li>C / CShap / C++</li>
                                            <li>Many More </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-14"></i></div>
                                        <h4><Link href={{
                                            pathname:"/tech-services",
                                            query: {techProduct :"sd"}
                                            }}>Cyber Security</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Identity Access</li>
                                            <li>Incident Response </li>
                                            <li>Threat Management  </li>
                                            <li>Many More </li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-16"></i></div>
                                        <h4><Link href={{
                                            pathname:"/tech-services",
                                            query: {techProduct :"cis"}
                                            }}>Cloud & Infrastructure</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>GCP</li>
                                            <li>AWS</li>
                                            <li>Azure </li>
                                            <li>DevOps / SecOps</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-17"></i></div>
                                        <h4><Link  href={{
                                            pathname:"/tech-services",
                                            query: {techProduct :"dac"}
                                            }}> Data Analytics  </Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Data Engineering </li>
                                            <li>AI / ML </li>
                                            <li>BI / Reporting</li>
                                            <li>Big Data / Data Science</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-17"></i></div>
                                        <h4><Link href={{
                                            pathname:"/tech-services",
                                            query: {techProduct :"bac"}
                                            }}>Business Applications</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>SAP</li>
                                            <li>Salesforce </li>
                                            <li>Oracle</li>
                                            <li>Boutique Solutions</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-17"></i></div>
                                        <h4><Link href={{
                                            pathname:"/tech-services",
                                            query: {techProduct :"os"}
                                            }}>Onshore / Offshore Solution</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>Data Centres</li>
                                            <li>Sales Teams</li>
                                            <li>Short / Long term Support</li>
                                            <li>Custom Solutions</li>
                                        </ul>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div className="service-block-one wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="shape"></div>
                                        <div className="icon-box"><i className="icon-17"></i></div>
                                        <h4><Link href={{
                                            pathname:"/tech-services",
                                            query: {techProduct :"eslc"}
                                            }}>Executive Search / Leadership</Link></h4>
                                        <ul className="list-item clearfix">
                                            <li>C Level</li>
                                            <li>Executive Level</li>
                                            <li>PMO Office</li>
                                            <li>Urgent Fixers</li>
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