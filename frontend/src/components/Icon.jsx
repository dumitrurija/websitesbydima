const Icon = ({ children }) => {
  return (
    <div className="h-12 w-12 text-4xl bg-gradient-to-t from-zinc-900 to-zinc-800 flex justify-center items-center rounded-md text-lime-400">
      { children }
    </div>
  )
}

export default Icon