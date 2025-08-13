import {ButtonGreen} from "./Buttons"

const Form = () => {
  return (
    <form action="" className="flex flex-col gap-6 w-1/2 m-auto">
      <div className="flex gap-6">
        <label htmlFor="" className="w-1/2 flex flex-col gap-2 p-6 bg-zinc-800 rounded-md">
          Full Name
          <input type="text" placeholder="Type here" className="border-b border-b-zinc-600 pb-1" />
        </label>
        <label htmlFor="" className="w-1/2 flex flex-col gap-2 p-6 bg-zinc-800 rounded-md">
          Email
          <input type="email" placeholder="Type here" className="border-b border-b-zinc-600 pb-1" />
        </label>
      </div>

      <div>
        <label htmlFor="" className="flex flex-col gap-2 p-6 bg-zinc-800 rounded-md">
          Why are you contacting us?
          <div className="grid grid-cols-2 gap-2">
            <label htmlFor="" className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 appearance-none checked:bg-lime-400 bg-zinc-600 border border-zinc-400/25" name="" id="" />
              Web Design
            </label>
            <label htmlFor="" className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 appearance-none checked:bg-lime-400 bg-zinc-600 border border-zinc-400/25" name="" id="" />
              Collaboration
            </label>
            <label htmlFor="" className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 appearance-none checked:bg-lime-400 bg-zinc-600 border border-zinc-400/25" name="" id="" />
              Mobile App Design
            </label>
            <label htmlFor="" className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5 appearance-none checked:bg-lime-400 bg-zinc-600 border border-zinc-400/25" name="" id="" />
              Others
            </label>
          </div>
        </label>
      </div>

      <div>
        <label htmlFor="" className="flex flex-col gap-2 p-6 bg-zinc-800 rounded-md">
          Your Budget
          <p className="text-sm text-zinc-400">Slide to indicate your budget range</p>
          <input type="range" name="" id="" />
        </label>
      </div>

      <div>
        <label htmlFor="" className="flex flex-col gap-2 p-6 bg-zinc-800 rounded-md">
          Your Message
          <input type="email" placeholder="Type here" className="border-b border-b-zinc-600 pb-1" />
        </label>
      </div>

      <ButtonGreen>Submit</ButtonGreen>
    </form>
  )
}

export default Form