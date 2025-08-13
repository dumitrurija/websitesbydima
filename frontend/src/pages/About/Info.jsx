import { aboutImgs } from "../../assets/assets"

const Info = () => {
  return (
    <div className="flex justify-between items-center px-22 pt-22">
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-4xl font-bold">About WebsitesByDima</h1>
        <p>WebsitesByDima is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
      </div>

      <div className="flex-1 flex justify-center">
        <img className="w-2/3" src={ aboutImgs.info_img } alt="" />
      </div>
    </div>
  )
}

export default Info