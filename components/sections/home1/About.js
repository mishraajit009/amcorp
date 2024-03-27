import Link from "next/link";

export default function About() {
    return (
        <>            
            <section className="about-section pt_120 pb_120">
                <div className="pattern-layer rotate-me"></div>
                <div className="auto-container">
                    <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_one">
                        <div className="image-box pr_90 mr_40">
                            <div className="image-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-3.png)' }}></div>
                            <figure className="image"><img src="assets/images/resource/about-1.jpg" alt="" /></figure>
                            <div className="experience-box">
                            <div className="inner">
                                <h2>10</h2>
                                <h6>Years of Experience</h6>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                        <div className="content-box ml_40">
                            <div className="sec-title mb_20">
                            <h6>About US</h6> 
                            <h2>Financial Guidance for Every Stage of Life.</h2>
                            </div>
                            <div className="text-box mb_40">
                            <p>At A&M Corp, we stand at the intersection of tradition and innovation, offering specialized services across Wealth Management Recruitment, IT Recruitment, Logistics & Procurement, and Group Offerings. Our foundation is built on the expertise and visionary leadership of our co-founders, who bring over a decade of experience to the forefront of each vertical.</p>
                            </div>
                            <div className="inner-box mb_45">
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-10"></i></div>
                                <h3>Solution Focused</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat</p>
                            </div>
                            <div className="single-item">
                                <div className="icon-box"><i className="icon-11"></i></div>
                                <h3>99.99% Success</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis tincidunt feugiat</p>
                            </div>
                            </div>
                            <div className="btn-box">
                            <Link href="/about" className="theme-btn btn-one">Discover More</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
