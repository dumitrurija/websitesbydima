import { homeImgs } from "../../assets/assets"
import AboutSection from "../../components/AboutSection"
import { ButtonGreen } from "../../components/Buttons"
import Form from "../../components/Form"

const Contact = () => {
  return (
    <div>
      <AboutSection image={homeImgs.contact_img} title="Thank you for your Interest in SquareUp." description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.">
        <ButtonGreen>Start Project</ButtonGreen>
      </AboutSection>

      <div id="container" className="p-12">
        <Form />
      </div>
    </div>
  )
}

export default Contact