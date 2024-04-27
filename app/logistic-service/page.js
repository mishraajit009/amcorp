'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState } from "react";
import {useSearchParams} from "next/navigation";
import Services from "@/components/sections/home2/Services";
import { useRouter } from 'next/router';
export default function Home() {
     // Use get method after destructuring
     const [key,setKey]=useState({})
     const searchParams = useSearchParams();
     
    useEffect(() => {
        const data = {
            rmp:{
                title:"Raw Material Procurement",
                header:"How we cover Raw Material Procurement ?",
                para:"Raw material procurement is essential for securing the necessary inputs for manufacturing and production processes. A&M Logistics specializes in sourcing procurement professionals skilled in identifying suppliers, negotiating contracts, and managing supplier relationships to ensure timely and cost-effective procurement of raw materials. Whether it's sourcing commodities, components, or specialized materials, we connect businesses with procurement experts who can optimize sourcing strategies and mitigate supply chain risks",
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
            sco:{
                title:"Supply Chain Optimization",
                header:"How we cover Supply Chain Optimization ?",
                para:"Supply chain optimization focuses on enhancing efficiency and reducing costs across the entire supply chain, from sourcing raw materials to delivering finished products to customers. A&M Logistics excels in sourcing supply chain professionals skilled in analyzing supply chain processes, identifying areas for improvement, and implementing strategies to optimize inventory management, transportation, and distribution. Whether it's implementing lean principles, leveraging technology solutions for demand forecasting and inventory optimization, or redesigning distribution networks, we connect businesses with supply chain experts who can drive operational excellence and competitive advantage..",
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
            sh:{
                title:"Supplier Hub",
                header:"How we cover Supplier Hub ?",
                para:"At A&M Logistics we have carefully curated a Supplier Hub that spans through a global network of raw material suppliers ensuring seamless collaboration between suppliers and internal stakeholders. Whether it's implementing supplier performance metrics, optimizing inventory levels, or coordinating inbound shipments, we connect businesses with our supplier hub to create a marketplace for construction projects to have accurate information on raw material costs and ease of procurement.",
                services:[
                    {
                      "technology": "Data Engineering / Development",
                      "description": "Data engineering and development are critical for building robust data pipelines and infrastructure to support analytics initiatives. A&M Tech specializes in sourcing data engineers and developers skilled in designing, building, and optimizing data architectures and ETL processes. Whether it's implementing data warehouses with tools like Amazon Redshift or Google BigQuery, developing data pipelines with Apache Spark or Apache Airflow, or optimizing database performance with SQL and NoSQL technologies, we connect businesses with data engineering professionals who can ensure data quality, reliability, and accessibility."
                    },
                    {
                      "technology": "AI / ML",
                      "description": "Artificial intelligence (AI) and machine learning (ML) play a pivotal role in extracting actionable insights and driving predictive analytics from data. A&M Tech excels in sourcing AI/ML professionals skilled in developing and deploying machine learning models and algorithms. Whether it's leveraging frameworks like TensorFlow or PyTorch for deep learning, implementing predictive analytics with scikit-learn or XGBoost, or deploying AI solutions with tools like Amazon SageMaker or Azure Machine Learning, we connect businesses with AI/ML experts who can harness the power of data to drive innovation and competitive advantage."
                    },
                    {
                      "technology": "BI / Reporting",
                      "description": "Business intelligence (BI) and reporting are essential for transforming raw data into actionable insights and visualizations that facilitate decision-making. A&M Tech specializes in sourcing BI analysts and developers skilled in designing and building interactive dashboards, reports, and data visualizations. Whether it's using tools like Tableau, Power BI, or Looker for data visualization, or SQL and ETL tools for data extraction and transformation, we connect businesses with BI professionals who can empower stakeholders with timely and relevant insights to drive strategic initiatives."
                    },
                    {
                      "technology": "Big Data / Data Science",
                      "description": "Big data and data science encompass advanced analytics techniques for processing and analyzing large and complex datasets. A&M Tech excels in sourcing data scientists and big data engineers skilled in leveraging distributed computing frameworks and advanced analytics tools. Whether it's processing large volumes of data with Apache Hadoop or Apache Spark, performing exploratory data analysis with Python or R, or building predictive models with advanced statistical techniques, we connect businesses with data science and big data professionals who can unlock the value of data to drive innovation and business growth."
                    }
                ]
                  
            },
            ch:{
                title:"Construction Hub",
                header:"How we cover Construction Hub ?",
                para:"Whether it's coordinating material deliveries, managing equipment rentals, or optimizing logistics workflows, we connect businesses with construction hub experts who can drive efficiency and productivity in construction operations. Our Construction hub works seamlessly with our Supplier Hub where construction projects will have the free will to track suppliers of raw material and man power. ",
                services:[
                    {
                      "technology": "SAP",
                      "description": "SAP remains a cornerstone in the enterprise application landscape, offering a comprehensive suite of solutions for various business functions. A&M Tech specializes in sourcing SAP professionals skilled in implementing, customizing, and optimizing SAP ERP, CRM, and industry-specific solutions. Whether it's configuring SAP modules for finance, supply chain, or human resources, or developing custom applications with SAP Fiori or SAP Cloud Platform, we connect businesses with SAP experts who can leverage the power of SAP to drive digital transformation and operational excellence."
                    },
                    {
                      "technology": "Salesforce",
                      "description": "Salesforce is a leading cloud-based CRM platform that helps businesses manage customer relationships, streamline sales processes, and drive marketing campaigns. A&M Tech excels in sourcing Salesforce professionals skilled in implementing, customizing, and integrating Salesforce solutions. Whether it's building custom applications with Salesforce Lightning, automating business processes with Salesforce Workflow and Process Builder, or developing integrations with third-party systems using Salesforce APIs, we connect businesses with Salesforce experts who can maximize the value of their Salesforce investment and drive business growth."
                    },
                    {
                      "technology": "Oracle",
                      "description": "Oracle offers a comprehensive suite of business applications for various industries, including ERP, CRM, and supply chain management. A&M Tech specializes in sourcing Oracle professionals skilled in implementing, upgrading, and optimizing Oracle E-Business Suite, Oracle Cloud Applications, and other Oracle solutions. Whether it's configuring Oracle modules for finance, procurement, or manufacturing, or leveraging Oracle Analytics for business intelligence and reporting, we connect businesses with Oracle experts who can streamline operations and drive innovation using Oracle technologies."
                    },
                    {
                      "technology": "Boutique Solutions",
                      "description": "In addition to enterprise-grade solutions like SAP, Salesforce, and Oracle, A&M Tech covers a broad spectrum of boutique business applications tailored to specific industries and niche requirements. Whether it's industry-specific ERP solutions, niche CRM platforms, or custom-built applications, we specialize in sourcing professionals with expertise in these specialized solutions. With our extensive network and industry expertise, we connect businesses with experts who can implement and customize boutique solutions to meet their unique business needs and objectives."
                    }
                  ]
                  
            },
         }
        console.log(searchParams.get("logistic"));
        console.log("My Data",data[searchParams.get("logistic")]);
        setKey(data[searchParams.get("logistic")]);

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
                                <h4><Link href="/service">Proven expertise in the tech industry, ensuring we understand your specific needs.</Link></h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-6"></i></div>
                                <h4><Link href="/service">An extensive network of highly skilled professionals, providing access to top talent.</Link></h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-7"></i></div>
                                <h4><Link href="/service">Customized recruitment solutions tailored to your unique requirements and preferences.</Link></h4>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                            <div className="feature-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="icon-box"><i className="icon-8"></i></div>
                                <h4><Link href="/service">Committed to your success, delivering exceptional service and support throughout the hiring process
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
                            <h3>First Consultation</h3>
                            <p>Arranging a call / Meeting to discuss the exact requirements</p>
                            </div>
                        </div>
                        <div className="processing-block-one">
                            <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-13.png)" }}></div>
                            <div className="inner-box">
                            <span className="count-text">02 <br />Step</span>
                            <h3>Quality in time</h3>
                            <p>We provide a managed integration of our candidate into your organization  </p>
                            </div>
                        </div>
                        <div className="processing-block-one">
                            <div className="inner-box">
                            <span className="count-text">03 <br />Step</span>
                            <h3>Onboarding</h3>
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
                                <li>Consultation Call </li>
                                <li>Submit your CV </li>
                                <li>Eligibility Check </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Step 2</h4>
                                <ul className="list-item clearfix">
                                <li>Interview Processes </li>
                                <li>Contract Issued </li>
                                <li>Confirmation </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 requirements-block">
                            <div className="requirements-block-one">
                            <div className="inner-box">
                                <h4>Step 3</h4>
                                <ul className="list-item clearfix">
                                <li>Interview Processes </li>
                                <li>Contract Issued </li>
                                <li>Confirmation </li>
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