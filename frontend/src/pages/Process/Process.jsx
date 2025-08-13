import { workImgs } from "../../assets/assets"
import AboutSection from "../../components/AboutSection"
import Form from "../../components/Form"
import Points from "../../components/Points"

const data = {
  title: "At WebsitesByDima",
  description: "We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.",
  buttonText: "Here's an overview of our typical process:",
  content: [
    {
      id: 1,
      name: "Discovery",
      description: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."
    },
    {
      id: 2,
      name: "Planning and Strategy",
      description: "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision."
    },
    {
      id: 3,
      name: "Design",
      description: "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel."
    },
    {
      id: 4,
      name: "Development",
      description: "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns."
    },
    {
      id: 5,
      name: "Testing and Quality Assurance",
      description: "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for a seamless user experience and a high level of reliability."
    },
    {
      id: 6,
      name: "Deployment and Launch",
      description: "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations."
    },
    {
      id: 7,
      name: "Post-Launch Support",
      description: "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support."
    },
    {
      id: 8,
      name: "Continuous Improvement",
      description: "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve."
    },
  ]
}

const Process = () => {
  return (
    <section id="process" className='flex flex-col gap-6 border border-zinc-800'>
      <AboutSection title="Process of Starting the Project" description="At SquareUp, we value transparency, collaboration, and delivering exceptional results." image={workImgs.work_welcome_img} />
      <Points data={ data } />
      <Form />
    </section>
  )
}

export default Process