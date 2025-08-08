import AboutSection from "../../components/AboutSection"
import Container from "./Container"

import { servicesImg, servicesIcons } from "../../assets/assets"
import { ButtonGreen } from "../../components/Buttons"

const data = {
  design: {
    title: "Design",
    description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. ",
    buttonText: "Our design services include:",
    content: [
      {
        id: 1,
        title: "User Experience (UX) Design",
        children: [
          {
            id: 1,
            icon: servicesIcons.Person3Icon,
            name: "User Research and Persona Development"
          },
          {
            id: 2,
            icon: servicesIcons.HelpCenterIcon,
            name: "Information Architecture and Wireframing"
          },
          {
            id: 3,
            icon: servicesIcons.BugReportIcon,
            name: "Interactive Prototyping and User Testing"
          },
          {
            id: 4,
            icon: servicesIcons.ViewQuiltIcon,
            name: "UI Design and Visual Branding"
          },
        ]
      },
      {
        id: 2,
        title: "User Interface (UI) Design",
        children: [
          {
            id: 1,
            icon: servicesIcons.MarginIcon,
            name: "Intuitive and Visually Appealing Interface Design"
          },
          {
            id: 2,
            icon: servicesIcons.CameraIcon,
            name: "Custom Iconography and Illustration"
          },
          {
            id: 3,
            icon: servicesIcons.DesignServicesIcon,
            name: "Typography and Color Palette Selection"
          },
          {
            id: 4,
            icon: servicesIcons.DesignServicesIcon,
            name: "Responsive Design for Various Devices"
          },
        ]
      },
      {
        id: 3,
        title: "Branding and Identity",
        children: [
          {
            id: 1,
            icon: servicesIcons.LogoDevIcon,
            name: "Logo Design and Visual Identity Development"
          },
          {
            id: 2,
            icon: servicesIcons.BrandingWatermarkIcon,
            name: "Brand Strategy and Positioning"
          },
          {
            id: 3,
            icon: servicesIcons.NearbyErrorIcon,
            name: "Brand Guidelines and Style Guides"
          },
          {
            id: 4,
            icon: servicesIcons.AddCardIcon,
            name: "Marketing Collateral Design (Brochures, Business Cards, etc.)"
          },
        ]
      },
    ]
  },
  engineering: {
    title: "Engineering",
    description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    buttonText: "Our engineering services include:",
    content: [
      {
        id: 1,
        title: "Web Development",
        children: [
          {
            id: 1,
            icon: servicesIcons.Person3Icon,
            name: "Front-End Development (HTML, CSS, JavaScript)"
          },
          {
            id: 2,
            icon: servicesIcons.HelpCenterIcon,
            name: "Back-End Development (PHP, Python, Ruby)"
          },
          {
            id: 3,
            icon: servicesIcons.BugReportIcon,
            name: "Content Management System (CMS) Development (WordPress, Drupal)"
          },
          {
            id: 4,
            icon: servicesIcons.ViewQuiltIcon,
            name: "E-Commerce Platform Development (Magento, Shopify)"
          },
        ]
      },
      {
        id: 2,
        title: "Mobile App Development",
        children: [
          {
            id: 1,
            icon: servicesIcons.MarginIcon,
            name: "Native iOS and Android App Development"
          },
          {
            id: 2,
            icon: servicesIcons.CameraIcon,
            name: "Cross-Platform App Development (React Native, Flutter)"
          },
          {
            id: 3,
            icon: servicesIcons.DesignServicesIcon,
            name: "App Prototyping and UI/UX Design Integration"
          },
          {
            id: 4,
            icon: servicesIcons.DesignServicesIcon,
            name: "App Testing, Deployment, and Maintenance"
          },
        ]
      },
      {
        id: 3,
        title: "Custom Software Development",
        children: [
          {
            id: 1,
            icon: servicesIcons.LogoDevIcon,
            name: "Enterprise Software Development"
          },
          {
            id: 2,
            icon: servicesIcons.BrandingWatermarkIcon,
            name: "Custom Web Application Development"
          },
          {
            id: 3,
            icon: servicesIcons.NearbyErrorIcon,
            name: "Integration with Third-Party APIs and Systems"
          },
          {
            id: 4,
            icon: servicesIcons.AddCardIcon,
            name: "Legacy System Modernization and Migration"
          },
        ]
      },
    ]
  },
  project_management: {
    title: "Project Management",
    description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    buttonText: "Our project management services include:",
    content: [
      {
        id: 1,
        title: "Project Planning and Scoping",
        children: [
          {
            id: 1,
            icon: servicesIcons.Person3Icon,
            name: "Requirements Gathering and Analysis"
          },
          {
            id: 2,
            icon: servicesIcons.HelpCenterIcon,
            name: "Project Roadmap and Timeline Development"
          },
          {
            id: 3,
            icon: servicesIcons.BugReportIcon,
            name: "Resource Allocation and Task Assignment"
          },
          {
            id: 4,
            icon: servicesIcons.ViewQuiltIcon,
            name: "Risk Assessment and Mitigation Strategies"
          },
        ]
      },
      {
        id: 2,
        title: "Agile Development",
        children: [
          {
            id: 1,
            icon: servicesIcons.MarginIcon,
            name: "Iterative Development and Sprints"
          },
          {
            id: 2,
            icon: servicesIcons.CameraIcon,
            name: "Scrum or Kanban Methodology Implementation"
          },
          {
            id: 3,
            icon: servicesIcons.DesignServicesIcon,
            name: "Regular Progress Updates and Demos"
          },
          {
            id: 4,
            icon: servicesIcons.DesignServicesIcon,
            name: "Continuous Improvement and Feedback Incorporation"
          },
        ]
      },
      {
        id: 3,
        title: "Quality Assurance and Testing",
        children: [
          {
            id: 1,
            icon: servicesIcons.LogoDevIcon,
            name: "Test Planning and Execution"
          },
          {
            id: 2,
            icon: servicesIcons.BrandingWatermarkIcon,
            name: "Functional and Usability Testing"
          },
          {
            id: 3,
            icon: servicesIcons.NearbyErrorIcon,
            name: "Performance and Security Testing"
          },
          {
            id: 4,
            icon: servicesIcons.AddCardIcon,
            name: "Bug Tracking and Issue Resolution"
          },
        ]
      },
    ]
  }
}

const Services = () => {
  return (
    <section id="services" className='flex flex-col border border-zinc-800'>
      <AboutSection image={servicesImg.services_welcome_img} title="Our Services" description="Transform your brand with our innovative digital solutions that captivate and engage your audience." />
      <Container data={data.design} />
      <Container data={data.engineering} />
      <Container data={data.project_management} />
      <AboutSection 
        image={servicesImg.services_welcome_img} 
        title="Let us Bring your Ideas to Life in the Digital World." 
        description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product." 
      >
        <ButtonGreen>Start Project</ButtonGreen>
      </AboutSection>
    </section>
  )
}

export default Services