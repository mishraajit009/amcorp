'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState } from "react";
import {useSearchParams} from "next/navigation";
import Services from "@/components/sections/home2/Services";
export default function Home({techProduct}) {
     // Use get method after destructuring
     const [key,setKey]=useState({})
     const searchParams = useSearchParams();
     
    useEffect(() => {
        const data = {
            erp:{
                title:"ERP",
                header:"How we cover ERP Solutions",
                para:"At A&M Tech, we understand the critical importance of ERP systems in driving business success. Our team is committed to sourcing and placing highly skilled professionals in various ERP solutions, ensuring our clients have access to the best talent available in the market. With our extensive network and industry expertise, we guarantee a seamless recruitment process tailored to our client’s specific needs.",
                services:[
                    {
                      "technology": "SAP",
                      "description": "As SAP remains a cornerstone in the ERP landscape, A&M Tech is your go-to partner for sourcing top SAP talent. Our team stays at the forefront of SAP talent acquisition, leveraging our industry expertise and network to connect businesses with professionals proficient in the latest SAP S/4HANA suite. With our proactive approach to talent acquisition, we ensure our clients have access to SAP experts who can leverage the latest advancements to drive business growth."
                    },
                    {
                      "technology": "NetSuite",
                      "description": "A&M Tech specializes in sourcing talent experienced in implementing and optimizing NetSuite's cloud-based ERP solution. With NetSuite's continuous evolution, our team remains vigilant in monitoring updates and enhancements within the platform. We connect businesses with NetSuite professionals who can leverage recent upgrades to streamline operations and enhance business performance."
                    },
                    {
                      "technology": "Oracle",
                      "description": "A&M Tech is committed to delivering top-tier Oracle ERP talent to organizations seeking to maximize their investment in Oracle solutions. Our team specializes in identifying candidates proficient in the latest Oracle Cloud ERP modules and technologies. With Oracle's ongoing enhancements, we ensure our clients have access to professionals who can leverage recent upgrades to drive innovation and efficiency."
                    },
                    {
                      "technology": "Microsoft Dynamics",
                      "description": "With Microsoft Dynamics 365's comprehensive suite of ERP solutions, A&M Tech specializes in sourcing skilled professionals adept at leveraging its latest features. From Dynamics 365 Finance and Supply Chain Management to Business Central, we connect businesses with talent proficient in utilizing recent upgrades to optimize operations and achieve business objectives."
                    }
                ]
                  
            },
            sd:{
                title:"Software Development Coverage",
                header:"How we cover Software Development Coverage",
                para:"At A&M Tech, we recognize the pivotal role of software development in driving innovation and digital transformation across industries. Our recruitment specialists are dedicated to sourcing and placing highly skilled software developers proficient in a wide array of programming languages and frameworks. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier software development professionals who can deliver exceptional results.",
                services:[
                    {
                      "technology": "Java / JavaScript",
                      "description": "Java and JavaScript are foundational languages in software development, and A&M Tech excels in sourcing talent proficient in both. Whether it's backend development with Java or frontend web development with JavaScript frameworks like React or Angular, we connect businesses with skilled developers capable of delivering robust, scalable solutions. With our focus on staying updated with the latest trends and advancements in Java and JavaScript, we ensure our clients have access to developers who can leverage the newest technologies to drive digital innovation."
                    },
                    {
                      "technology": "Python",
                      "description": "Python's versatility and simplicity make it a popular choice for a wide range of software development projects, from web development to data science and machine learning. At A&M Tech, we specialize in sourcing Python developers with expertise in leveraging the language's extensive libraries and frameworks to build powerful applications. Whether it's developing web applications with Django or conducting data analysis with Pandas and NumPy, we connect businesses with Python talent capable of driving business success."
                    },
                    {
                      "technology": "C / C# / C++",
                      "description": "C, C#, and C++ are languages known for their performance and low-level control, making them essential for systems programming, game development, and performance-critical applications. A&M Tech is adept at sourcing talent proficient in these languages, whether it's developing embedded systems with C, building desktop applications with C#, or optimizing software performance with C++. With our focus on understanding the specific requirements of each project, we ensure our clients have access to developers skilled in utilizing C-based languages to deliver efficient and reliable solutions."
                    },
                    {
                      "technology": "Many More",
                      "description": "In addition to the aforementioned languages, A&M Tech covers a broad spectrum of programming languages and frameworks, including but not limited to Ruby, PHP, Swift, Kotlin, Go, TypeScript, and Rust, among others. Our recruitment specialists stay updated with emerging technologies and industry trends, ensuring our clients have access to talent proficient in the latest tools and languages necessary to drive digital innovation and business growth."
                    }
                ]  
            },
            cs:{
                title:""
            },
            cis:{
                title:"Cloud & Infrastructure",
                header:"How we cover Cloud and Infrastructure",
                para:"At A&M Tech, we understand the critical role of cloud and infrastructure technologies in powering digital transformation and enabling scalable and resilient IT infrastructures. Our recruitment specialists are dedicated to sourcing and placing highly skilled professionals proficient in various cloud platforms and infrastructure technologies. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier cloud and infrastructure experts who can architect, deploy, and manage robust IT environments.",
                services:[
                    {
                      "technology": "Identity Access",
                      "description": "Identity access management (IAM) plays a crucial role in ensuring the right individuals have the appropriate access to systems and data within an organization. A&M Tech specializes in sourcing IAM professionals capable of implementing robust identity and access controls, managing user identities, and ensuring compliance with regulatory requirements such as GDPR and HIPAA. Whether it's deploying IAM solutions from vendors like Okta or ForgeRock or developing custom access management systems, we connect businesses with IAM experts who can strengthen their security posture and mitigate unauthorized access risks."
                    },
                    {
                      "technology": "Incident Response",
                      "description": "Incident response is essential for effectively detecting, responding to, and recovering from cybersecurity incidents such as data breaches and cyberattacks. A&M Tech excels in sourcing incident response professionals skilled in developing incident response plans, conducting forensic investigations, and coordinating incident response activities. With our focus on proactive threat detection and rapid incident response, we ensure our clients have access to incident response experts capable of minimizing the impact of security incidents and restoring business operations swiftly."
                    },
                    {
                      "technology": "Threat Management",
                      "description": "Threat management encompasses the proactive identification, assessment, and mitigation of cybersecurity threats and vulnerabilities. A&M Tech specializes in sourcing threat management professionals proficient in threat intelligence analysis, vulnerability management, and security operations. Whether it's leveraging threat intelligence platforms like ThreatConnect or implementing security controls to mitigate emerging threats, we connect businesses with threat management experts who can effectively safeguard their digital assets from evolving cyber threats."
                    },
                    {
                      "technology": "Many More",
                      "description": "In addition to the aforementioned cybersecurity domains, A&M Tech covers a broad spectrum of specialized areas, including but not limited to penetration testing, security architecture, cloud security, encryption, and compliance. Our recruitment specialists stay updated with emerging threats and security trends, ensuring our clients have access to talent proficient in the latest tools and techniques necessary to protect their organizations against cybersecurity risks."
                    }
                ]
                  
            },
            dac:{
                title:"Data Analytics",
                header:"How we cover Data Analytics",
                para:"At A&M Tech, we recognize the transformative power of data analytics in driving informed decision-making and uncovering valuable insights from vast datasets. Our recruitment specialists are dedicated to sourcing and placing highly skilled professionals proficient in various aspects of data analytics, including data engineering, AI/ML, BI/reporting, and big data/data science. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier data analytics experts who can leverage data to drive business growth and innovation."
            },
            bac:{
                title:"Business Applications",
                header:"How we cover Business Applications",
                para:"At A&M Tech, we understand the critical role of business applications in streamlining operations, enhancing productivity, and driving business growth. Our recruitment specialists are dedicated to sourcing and placing highly skilled professionals proficient in various business application platforms, including SAP, Salesforce, Oracle, and boutique solutions. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier experts who can leverage business applications to optimize processes and achieve strategic objectives."
            },
            os:{
                title:"Onshore/Offshore Solution",
                header:"How we cover Onshore/Offshore Solution coverage",
                para:"At A&M Tech, we recognize the importance of onshore and offshore solutions in providing cost-effective and scalable IT services to businesses. Our recruitment specialists are dedicated to sourcing and placing highly skilled professionals proficient in delivering onshore and offshore solutions across various domains, including data centers, sales teams, short/long-term support, and custom solutions. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier experts who can leverage onshore and offshore models to meet their specific business needs and objectives."
            },
            eslc:{
                title:"Executive Search / Leadership",
                header:"How we cover Executive Search / Leadership coverage",
                para:"At A&M Tech, we understand the critical role of executive leadership in driving organizational strategy, fostering innovation, and achieving business objectives. Our executive search specialists are dedicated to sourcing and placing highly skilled executives proficient in leadership roles, including C-level executives, executive-level leaders, PMO office professionals, and Urgent Fixers. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier leaders who can provide strategic direction, inspire teams, and drive organizational success."
            }
         }
        console.log(searchParams.get("techProduct"));
        console.log("My Data",data[searchParams.get("techProduct")]);
        setKey(data[searchParams.get("techProduct")]);

    }, []);
    useEffect(()=>{
        console.log("Loggin key",key);
    },[key])
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={key?.title ? key.title : ''}>
                <div>
                {/* about-style-two */}
                 <section className="about-style-two pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_three">
                            <div className="content-box mr_110">
                                <div className="sec-title mb_20">
                                <h6>About US</h6>
                                <h2> {key?.header ? key.header : ''} </h2>
                                </div>
                                <div className="text-box mb_40">
                                <p>
                                    {key?.para ? key.para : ''}
                                </p>
                                </div>
                                <div className="btn-box">
                                <Link href="/about" className="theme-btn btn-one">
                                    Discover More
                                </Link>
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
                {/* */}
                <Services>
                </Services>        
                {/* */}
                {/* feature-style-three */}
                <section className="feature-style-three pb_90 pt_50">
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