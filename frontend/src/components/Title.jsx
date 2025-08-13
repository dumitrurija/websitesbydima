import { ButtonClassic } from './Buttons'

const Title = ({ data }) => {
  return (
    <div className='flex flex-col gap-6 w-8/12 justify-start p-8'>
      <h1 className='font-medium text-4xl'>{ data.title }</h1>
      {data.description && <p className='text-gray-200'>{ data.description }</p>}
      {data.buttonText && <ButtonClassic className='w-fit'>{ data.buttonText }</ButtonClassic>}
    </div>
  )
}

export default Title