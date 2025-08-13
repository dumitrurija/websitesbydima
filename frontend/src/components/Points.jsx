import Title from "./Title"
import AboutSection from "./AboutSection"
import { ButtonGreen } from "./Buttons"
import { workImgs } from "../assets/assets"
import { useEffect } from "react"

const Points = ({ data }) => {  
  return (
    <section>
      <Title data={data} />

      <div className="grid grid-cols-2 border border-zinc-800">
        {data.content.map(item => 
          <div key={ item.id } className={`flex flex-col gap-4 py-12 px-8 border-b ${item.id % 2 === 0 ? 'border-l' : ''} border-zinc-800`}>
            <div className="flex gap-4 items-center border-b border-zinc-800">
              <h1 className="text-lime-200 text-9xl">{ item.id < 10 ? '0' + item.id : item.id }</h1>
              <h3 className="text-xl">{ item.name }</h3>
            </div>

            <p className="text-gray-200">{ item.description }</p>
          </div>
        )}
      </div>

      <AboutSection image={workImgs.work_welcome_img} title="Thank you for your Interest in WebsitesByDima." description="We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.">
        <ButtonGreen>Start Project</ButtonGreen>
      </AboutSection>
    </section>
  )
}

export default Points