import Title from '../../components/Title'
import Icon from '../../components/Icon'

import { workImgs } from '../../assets/assets'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AboutSection from '../../components/AboutSection';
import { ButtonGreen } from '../../components/Buttons';

const data = {
  title: "At SquareUp",
  description: "We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.",
  buttonText: "Here are ten examples of our notable works:",
  content: [
    {
      id: 1,
      title: "E-Commerce Platform for Fashion Hub",
      image: workImgs.first_project_img,
      name: "Chic Boutique",
      url: "htttps:/www.chicboutique.com",
      description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency."
    },
    {
      id: 2,
      title: "E-Commerce Platform for Fashion Hub",
      image: workImgs.second_project_img,
      name: "HungryBites",
      url: "htttps:/www.hungrybites.com",
      description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
    },
    {
      id: 3,
      title: "Booking and Reservation System for Event Management",
      image: workImgs.third_project_img,
      name: "EventMasters",
      url: "htttps:/www.eventmasters.com",
      description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences"
    },
    {
      id: 4,
      title: "Custom Software for Workflow Automation",
      image: workImgs.fourth_project_img,
      name: "ProTech Solutions",
      url: "htttps:/www.protechsolutions.com",
      description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily."
    },
    {
      id: 5,
      title: "Web Portal for Real Estate Listings",
      image: workImgs.fifth_project_img,
      name: "Dream Homes Realty",
      url: "htttps:/www.dreamhomesrealty.com",
      description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles."
    },
    {
      id: 6,
      title: "Mobile App for Fitness Tracking",
      image: workImgs.sixth_project_img,
      name: "FitLife Tracker",
      url: "htttps:/www.fitlifetracker.com",
      description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction."
    },
  ]
}

const Container = () => {
  return (
    <section>
      <Title data={data} />

      <div className='grid grid-cols-2'>
        {
          data.content.map(item => 
            <div key={ item.id } className={`flex flex-col ${item.id % 2 === 0 ? '' : 'border-r'} border-zinc-800`}>
              <h2 className={`text-gray-200 text-xl border-y border-zinc-800 p-6`}>{ item.title }</h2>
              <img src={ item.image } className='rounded-xl p-8 w-full max-h-[450px]' alt="" />

              <div className='flex justify-between items-center p-4'>
                <div className='flex flex-col gap-2'>
                  <h3>{ item.name }</h3>
                  <p className='bg-zinc-800 p-2 rounded-xl text-gray-200'>{ item.url }</p>
                </div>

                <Icon><ArrowOutwardIcon /></Icon>
              </div>

              <p className='text-gray-200 p-4'>{ item.description }</p>
            </div>
          )
        }
      </div>

      <AboutSection
        image={workImgs.work_welcome_img}
        title="Let us Bring your Ideas to Life in the Digital World."
        description="No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product."
      >
        <ButtonGreen>Start Project</ButtonGreen>
      </AboutSection>
    </section>
  )
}

export default Container