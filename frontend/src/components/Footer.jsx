// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationPinIcon from '@mui/icons-material/LocationPin';

// components
import Icon from './Icon';

const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 my-12'>
      <div className='flex justify-between items-center'>
        <div className='font-bold text-xl flex gap-4'>
          <div>
            &lt;
            <span className='text-lime-400'>/</span>
            &gt;
          </div>
          Websites By Dima
        </div>

        <nav>
          <ul className='flex gap-8 text-sm'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Work</li>
            <li className='cursor-pointer'>Process</li>
            <li className='cursor-pointer'>About</li>
          </ul>
        </nav>

        <div className='flex items-center border border-zinc-800 rounded-md gap-8 p-2'>
          Stay Connected

          <div className='flex gap-2'>
            <Icon>
              <FacebookIcon />
            </Icon>
            <Icon>
              <InstagramIcon />
            </Icon>
            <Icon>
              <LinkedInIcon />
            </Icon>
          </div>
        </div>
      </div>

      <hr className='border-zinc-700' />

      <div className='flex justify-between py-2'>
        <div className='flex items-center gap-6 text-sm'>
          <div className='flex items-center gap-1'>
            <EmailIcon className='text-lime-400' />
            dumitrurija@gmail.com
          </div>
          <div className='flex items-center gap-1'>
            <LocalPhoneIcon className='text-lime-400' />
            +373-60663220
          </div>
          <div className='flex items-center  gap-1'>
            <LocationPinIcon className='text-lime-400' />
            Valea Crucii 4
          </div>
        </div>

        <div className='text-sm text-zinc-400'>
          &copy; Made By Dima. 2025.
        </div>
      </div>
    </footer>
  )
}

export default Footer