import { ButtonClassic } from "../../components/Buttons"
import { contactImgs } from "../../assets/assets"

const ContactBtns = () => {
  return (
    <div className="flex justify-center gap-6 p-12">
      <ButtonClassic className="flex gap-1 justify-center">
        <div className="text-lime-400"><contactImgs.LinkedInIcon /></div>
        Dumitru Rija
      </ButtonClassic>
      <ButtonClassic className="flex gap-1 justify-center">
        <div className="text-lime-400"><contactImgs.InstagramIcon /></div>
        websitesbydima
      </ButtonClassic>
      <ButtonClassic className="flex gap-1 justify-center">
        <div className="text-lime-400"><contactImgs.LocalPhoneIcon /></div>
        +373 606 63 220
      </ButtonClassic>
    </div>
  )
}

export default ContactBtns