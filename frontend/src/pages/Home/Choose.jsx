import AboutSection from '../../components/AboutSection'

import { homeImgs } from '../../assets/assets'

// Icons
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HandshakeIcon from '@mui/icons-material/Handshake';

const data = [
  {
    id: 1,
    icon: <MilitaryTechIcon fontSize='large' />,
    name: "Expertise",
    description: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
  },
  {
    id: 2,
    icon: <SupportAgentIcon fontSize='large' />,
    name: "Client-Centric Approach",
    description: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
  },
  {
    id: 3,
    icon: <EmojiObjectsIcon fontSize='large' />,
    name: "Results-Driven Solutions",
    description: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
  },
  {
    id: 4,
    icon: <HandshakeIcon fontSize='large' />,
    name: "Collaborative Partnership",
    description: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
  },
]

const Choose = () => {
  return (
    <div className='flex flex-col gap-6'>
      <AboutSection 
        title="Why Choose SquareUp?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        image={homeImgs.choose_img}  
      />

      <div id="container" className='grid grid-cols-2'>
        {
          data.map(el => 
            <div key={el.id} className={`p-12 flex flex-col gap-6 border border-zinc-800 ${el.id % 2 === 0 ? 'border-r-0 border-l-0' : 'border-l-0'}`}>
              <div className='flex items-center gap-4'>
                  <div className="text-lime-400 text-4xl bg-gradient-to-t from-zinc-900 to-zinc-800 flex justify-center items-center h-16 w-16 rounded-md">
                    { el.icon }
                  </div>

                  <h2 className='font-medium text-2xl'>{ el.name }</h2>
                </div>

                <p className='text-sm text-gray-200'>{ el.description }</p>
            </div>
          )
        }


      </div>
    </div>
  )
}

export default Choose