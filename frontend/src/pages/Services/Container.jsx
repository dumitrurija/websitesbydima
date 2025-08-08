import Icon from '../../components/Icon';
import Title from '../../components/Title';

const Container = ({ data }) => {
  return (
    <>
      <Title data={data} />

      <div>
        {
          data.content.map(el => <div key={el.id}>
            <h2 className='p-6 py-8 text-lg text-gray-400 border-y border-zinc-800'>
              {el.title}
            </h2>
            <div className='grid grid-cols-4'>
              {
                el.children.map(item => {
                  const IconComponent = item.icon
                  return (
                    <div key={item.id} className={`flex flex-col gap-6 p-6 border-zinc-800 ${item.id !== 1 ? 'border-l' : ''}`}>
                      <Icon>{ <IconComponent /> }</Icon>
                      <h2 className='text-md text-zinc-200'>{item.name}</h2>
                    </div>
                  )
                })
              }
            </div>
          </div>)
        }
      </div>
    </>
  )
}

export default Container