import AboutSection from "../../components/AboutSection"
import Form from "../../components/Form"

import { contactImgs } from "../../assets/assets"
import ContactBtns from "./ContactBtns"

const Contact = () => {
  return (
    <section id="contact">
      <AboutSection image={contactImgs.contact_welcome_img} title="Contact Us" description="Get in touch with us today and let us help you with any questions or inquiries you may have." />
      <ContactBtns />
      <Form />
    </section>
  )
}

export default Contact