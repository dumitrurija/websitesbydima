import AboutSection from '../../components/AboutSection'

import { homeImgs } from '../../assets/assets'
import { ButtonLearnMore } from '../../components/Buttons';

import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

const data = [
  {
    id: 1,
    icon: <BrushIcon fontSize='large' />,
    name: "Design",
    description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    buttonText: "Learn More"
  },
  {
    id: 2,
    icon: <CodeIcon fontSize='large' />,
    name: "Engineering",
    description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    buttonText: "Learn More"
  },
  {
    id: 3,
    icon: <ManageHistoryIcon fontSize='large' />,
    name: "Project Management",
    description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    buttonText: "Learn More"
  },
]

const Services = () => {
  return (
    <div className='flex flex-col gap-6 border border-zinc-800'>
      <AboutSection 
        title="Our Services"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam cum consectetur quae quam in?"
        image={homeImgs.services_img}
      />

      <div id="container" className="flex justify-between gap-6">
        {data.map(el => (
          <div key={el.id} className="flex flex-col flex-1 gap-6 bg-black/10 rounded-lg p-6 justify-between">
            <div className="text-lime-400 text-4xl bg-gradient-to-t from-zinc-900 to-zinc-800 flex justify-center items-center h-16 w-16 rounded-md">
              {el.icon}
            </div>
            <h2 className="font-medium text-2xl">{el.name}</h2>
            <p className="text-sm text-gray-200 flex-1">{el.description}</p>
            <ButtonLearnMore>{el.buttonText}</ButtonLearnMore>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Services