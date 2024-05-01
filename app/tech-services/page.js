'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useEffect, useState } from "react";
import {useSearchParams, useRouter} from "next/navigation";
import Services from "@/components/sections/home2/Services";
export default function Home() {
     // Use get method after destructuring
     const [key,setKey]=useState({})
     const searchParams = useSearchParams();
     const router = useRouter();
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
                title:"",
                services:[]
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
                para:"At A&M Tech, we recognize the transformative power of data analytics in driving informed decision-making and uncovering valuable insights from vast datasets. Our recruitment specialists are dedicated to sourcing and placing highly skilled professionals proficient in various aspects of data analytics, including data engineering, AI/ML, BI/reporting, and big data/data science. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier data analytics experts who can leverage data to drive business growth and innovation.",
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
            bac:{
                title:"Business Applications",
                header:"How we cover Business Applications",
                para:"At A&M Tech, we understand the critical role of business applications in streamlining operations, enhancing productivity, and driving business growth. Our recruitment specialists are dedicated to sourcing and placing highly skilled professionals proficient in various business application platforms, including SAP, Salesforce, Oracle, and boutique solutions. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier experts who can leverage business applications to optimize processes and achieve strategic objectives.",
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
            os:{
                title:"Onshore/Offshore Solution",
                header:"How we cover Onshore/Offshore Solution coverage",
                para:"At A&M Tech, we recognize the importance of onshore and offshore solutions in providing cost-effective and scalable IT services to businesses. Our recruitment specialists are dedicated to sourcing and placing highly skilled professionals proficient in delivering onshore and offshore solutions across various domains, including data centers, sales teams, short/long-term support, and custom solutions. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier experts who can leverage onshore and offshore models to meet their specific business needs and objectives.",
                services:[
                    {
                      "technology": "Data Centers",
                      "description": "Data centers play a crucial role in housing and managing IT infrastructure and resources, whether on-premises or in the cloud. A&M Tech specializes in sourcing data center professionals skilled in designing, building, and managing data center environments. Whether it's deploying and maintaining physical servers and networking equipment in on-premises data centers or provisioning and managing virtual machines and storage resources in cloud-based data centers like AWS, Azure, or Google Cloud, we connect businesses with data center experts who can ensure optimal performance, reliability, and security of their IT infrastructure."
                    },
                    {
                      "technology": "Sales Teams",
                      "description": "Sales teams are essential for driving revenue growth and expanding market reach for businesses. A&M Tech excels in sourcing sales professionals skilled in building and managing onshore and offshore sales teams. Whether it's hiring sales representatives to engage with clients and prospects, sales managers to oversee team performance and strategy execution, or sales operations professionals to optimize sales processes and systems, we connect businesses with sales experts who can drive sales effectiveness and business growth through both onshore and offshore channels."
                    },
                    {
                      "technology": "Short/Long-Term Support",
                      "description": "Short-term and long-term support services are critical for ensuring smooth and uninterrupted operation of IT systems and applications. A&M Tech specializes in sourcing support professionals skilled in providing onshore and offshore support services across various technologies and platforms. Whether it's providing help desk support to end-users, troubleshooting technical issues, or performing system maintenance and upgrades, we connect businesses with support experts who can deliver timely and effective support solutions tailored to their specific needs and requirements."
                    },
                    {
                      "technology": "Custom Solutions",
                      "description": "Custom solutions are essential for addressing unique business challenges and requirements that off-the-shelf software may not fully meet. A&M Tech covers talent acquisition for custom solution development, whether onshore or offshore. Whether it's building custom software applications, developing integrations between disparate systems, or designing and implementing bespoke solutions to automate business processes, we specialize in sourcing professionals with expertise in custom software development. With our tailored approach, we connect businesses with custom solution experts who can deliver innovative and scalable solutions to drive business success."
                    }
                ]
            },
            eslc:{
                title:"Executive Search / Leadership",
                header:"How we cover Executive Search / Leadership coverage",
                para:"At A&M Tech, we understand the critical role of executive leadership in driving organizational strategy, fostering innovation, and achieving business objectives. Our executive search specialists are dedicated to sourcing and placing highly skilled executives proficient in leadership roles, including C-level executives, executive-level leaders, PMO office professionals, and Urgent Fixers. With our tailored approach to talent acquisition, we ensure our clients have access to top-tier leaders who can provide strategic direction, inspire teams, and drive organizational success.",
                services:[
                    {
                      "technology": "C Level",
                      "description": "C-level executives, including CEOs, CTOs, CIOs, and CFOs, play a pivotal role in setting organizational vision, driving growth, and ensuring operational excellence. A&M Tech specializes in sourcing C-level executives with a proven track record of leadership and achievement in their respective domains. Whether it's recruiting visionary CEOs to lead strategic initiatives, innovative CTOs to drive technology innovation, strategic CFOs to manage financial operations, or Urgent Fixers to provide insights and streamline projects, we connect businesses with leaders who can drive organizational success."
                    },
                    {
                      "technology": "Executive Level",
                      "description": "Executive-level leaders, including Vice Presidents and Directors, are instrumental in executing organizational strategy, managing teams, and driving business performance. A&M Tech excels in sourcing executive-level professionals with expertise in various functional areas, including sales, marketing, operations, and human resources. Whether it's hiring sales executives to drive revenue growth, marketing executives to build brand awareness, operations executives to streamline processes, or Urgent Fixers to review projects and provide insights, we connect businesses with leaders who can drive business success and growth."
                    },
                    {
                      "technology": "PMO Office",
                      "description": "The Project Management Office (PMO) plays a crucial role in overseeing project portfolios, managing resources, and ensuring project delivery within scope, budget, and timeline. A&M Tech specializes in sourcing PMO professionals skilled in establishing and managing PMO functions within organizations. Whether it's hiring PMO directors to define project governance frameworks, PMO managers to oversee project portfolios, project coordinators to support project teams, or Urgent Fixers to review project situations and streamline processes, we connect businesses with PMO professionals who can ensure project success and alignment with organizational goals."
                    },
                    {
                      "technology": "Urgent Fixers",
                      "description": "Urgent Fixers are individuals within the Tech/Consulting field who review situations at hand, provide insights into projects, and review solutions to ensure suitability and streamline project processes. A&M Tech specializes in sourcing Urgent Fixers with a wealth of experience and expertise in identifying project bottlenecks, providing strategic recommendations, and implementing solutions to expedite project delivery and improve efficiency. Whether it's assessing project risks, resolving critical issues, or optimizing project workflows, we connect businesses with Urgent Fixers who can provide invaluable guidance and support to ensure project success."
                    }
                ]  
            }
         }
         
        console.log(searchParams.get("techProduct"));
        console.log("My Data",data[searchParams.get("techProduct")]);
        if (!searchParams.get("techProduct") || !data[searchParams.get("techProduct")]) {
          console.log("Router",router);
          router.push('/not-found'); // Redirect to "/not-found" if "techProduct" is not found or invalid
        }else{
          setKey(data[searchParams.get("techProduct")]);
        }

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
                <Services data={key}>
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