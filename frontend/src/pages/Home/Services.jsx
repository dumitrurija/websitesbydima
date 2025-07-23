import AboutSection from '../../components/AboutSection'

import { homeImgs } from '../../assets/assets'

const Services = () => {
  return (
    <div>
      <AboutSection 
        title="Our Services"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam cum consectetur quae quam in?"
        image={homeImgs.services_img}
      />
    </div>
  )
}

export default Services