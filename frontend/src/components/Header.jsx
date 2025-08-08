import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='m-4 flex justify-between items-center'>
      <Link to="/" className='font-bold text-xl flex gap-4'>
        <div>
          &lt;
          <span className='text-lime-400'>/</span>
          &gt;
        </div>
        Websites By Dima
      </Link>

      <nav>
        <ul className='flex gap-4'>
          <Link to="/" className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>Home</Link>
          <Link to="/services" className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>Services</Link>
          <Link to="/work" className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>Work</Link>
          <Link to="/process" className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>Process</Link>
          <Link to="/about" className='hover:bg-neutral-800 p-4 rounded-md transition cursor-pointer'>About</Link>
        </ul>
      </nav>

      <button className='bg-lime-400 px-4 py-4 rounded-md text-black'>
        Contact Us
      </button>
    </header>
  )
}

export default Header