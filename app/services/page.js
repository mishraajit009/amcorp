'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
                <section className="service-style-three service-page-2 pt_120 pb_90">
                    <div className="auto-container">
                        <div className="sec-title centred mb_60">
                        <h6>Our Services</h6>
                        <h2>Online Banking at Fingertips</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div
                                className="service-block-one wow fadeInUp animated"
                                data-wow-delay="00ms"
                                data-wow-duration="1500ms"
                                >
                                <figure className="image-box">
                                    <Link href="/wealth-managment">
                                    <img src="assets/images/service/service-5.jpg" alt="" />
                                    </Link>
                                </figure>
                                <div className="inner-box">
                                    <div className="icon-box">
                                    <i className="icon-12"></i>
                                    </div>
                                    <h4>
                                    <Link href="/wealth-managment">Wealth Managment</Link>
                                    </h4>
                                    <ul className="list-item clearfix">
                                    <li>Bank & savings accounts</li>
                                    <li>Credit cards</li>
                                    <li>Personal loans</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div
                                    className="service-block-one wow fadeInUp animated"
                                    data-wow-delay="300ms"
                                    data-wow-duration="1500ms"
                                >
                                    <figure className="image-box">
                                    <Link href="/tech">
                                        <img src="assets/images/service/technology.jpg" alt="" />
                                    </Link>
                                    </figure>
                                    <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="icon-13"></i>
                                    </div>
                                    <h4>
                                        <Link href="/tech">Technology</Link>
                                    </h4>
                                    <ul className="list-item clearfix">
                                        <li>Instant Access</li>
                                        <li>Savings Fixed Term</li>
                                        <li>Savings Instant</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div
                                    className="service-block-one wow fadeInUp animated"
                                    data-wow-delay="600ms"
                                    data-wow-duration="1500ms"
                                >
                                    <figure className="image-box">
                                    <Link href="/logistics">
                                        <img src="assets/images/service/logistics.jpg" alt="" />
                                    </Link>
                                    </figure>
                                    <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="icon-14"></i>
                                    </div>
                                    <h4>
                                        <Link href="/logistics">Logistics</Link>
                                    </h4>
                                    <ul className="list-item clearfix">
                                        <li>Pet insurance</li>
                                        <li>Transport Insurance</li>
                                        <li>Accident insurance</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 service-block">
                                <div
                                    className="service-block-one wow fadeInUp animated"
                                    data-wow-delay="900ms"
                                    data-wow-duration="1500ms"
                                >
                                    <figure className="image-box">
                                    <Link href="/service-details-4">
                                        <img src="assets/images/service/service-8.jpg" alt="" />
                                    </Link>
                                    </figure>
                                    <div className="inner-box">
                                    <div className="icon-box">
                                        <i className="icon-15"></i>
                                    </div>
                                    <h4>
                                        <Link href="/service-details-4">Partners</Link>
                                    </h4>
                                    <ul className="list-item clearfix">
                                        <li>Residential Mortgages</li>
                                        <li>Buy-to-let Mortgages</li>
                                        <li>Building Mortgages</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}