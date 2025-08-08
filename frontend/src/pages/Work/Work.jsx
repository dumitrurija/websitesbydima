import { workImgs } from '../../assets/assets'
import AboutSection from '../../components/AboutSection'
import Container from './Container'

const Work = () => {
  return (
    <section id="work" className='flex flex-col border border-zinc-800'>
      <AboutSection image={workImgs.work_welcome_img} title="Our Works" description="Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise." />
      <Container />
    </section>
  )
}

export default Work