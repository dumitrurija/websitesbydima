import AboutSection from "../../components/AboutSection"

import { homeImgs } from "../../assets/assets"
import { ButtonClassic } from "../../components/Buttons"

const data = [
  {
    id: 1,
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    userPfp: homeImgs.walter_basico,
    userName: "Walter Basico",
    userRole: "Influencer",
    userWebsiteText: "Open Website",
    userWebsiteUrl: ""
  },
  {
    id: 1,
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    userPfp: homeImgs.walter_basico,
    userName: "Walter Basico",
    userRole: "Influencer",
    userWebsiteText: "Open Website",
    userWebsiteUrl: ""
  },
  {
    id: 1,
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    userPfp: homeImgs.walter_basico,
    userName: "Walter Basico",
    userRole: "Influencer",
    userWebsiteText: "Open Website",
    userWebsiteUrl: ""
  },
  {
    id: 1,
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    userPfp: homeImgs.walter_basico,
    userName: "Walter Basico",
    userRole: "Influencer",
    userWebsiteText: "Open Website",
    userWebsiteUrl: ""
  },
  {
    id: 1,
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    userPfp: homeImgs.walter_basico,
    userName: "Walter Basico",
    userRole: "Influencer",
    userWebsiteText: "Open Website",
    userWebsiteUrl: ""
  },
  {
    id: 1,
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    description: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    userPfp: homeImgs.walter_basico,
    userName: "Walter Basico",
    userRole: "Influencer",
    userWebsiteText: "Open Website",
    userWebsiteUrl: ""
  },
]

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-6">
      <AboutSection title="What our Clients say About us" description="At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us" image={homeImgs.testimonials_img} />

      <div id="container" className="grid grid-cols-2 gap-6">
        {
          data.map(el => <div className="flex flex-col gap-6 p-12">
            <div className="flex flex-col gap-2">
              <h2 className="text-lime-400 text-2xl font-medium"> { el.title } </h2>
              <p className="text-sm text-gray-200">
                { el.description }
              </p>
            </div>

            <div className="flex justify-between border border-zinc-800 p-4 rounded-md">
              <div className="flex items-center gap-2">
                <img className="w-12 object-cover h-full rounded-md" src={ el.userPfp } alt="" />
                <div className="flex flex-col">
                  <h3> { el.userName } </h3>
                  <p className="text-gray-400 text-sm">{ el.userRole }</p>
                </div>
              </div>
              <ButtonClassic>{ el.userWebsiteText }</ButtonClassic>
            </div>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default Testimonials