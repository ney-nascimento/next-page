import Image from 'next/image'

export default function Home() {
  return (
    <header className=' bg-blue-500  w-screen flex place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded-br-lg fixed'>
      <h1 className='text-white text-4xl' >HelloWorld</h1>
      <nav className='text-white flex flex-wrap p-6 items-center justify-between'>
        <ul className='flex gap-10 px-3 py-1  cursor-pointer transition'>
          <li className='px-3 py-1 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
            <a href="">exemmplo</a>
          </li>
          <li className='px-3 py-1 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
            <a href="">exemmplo</a>
          </li>
          <li className='px-3 py-1 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
            <a href="">exemmplo</a>
          </li>
        </ul>
        <button className='group/enter flex gap-2 ml-10 rounded-2xl border border-black shadow-lg px-3 py-1 font-light'>login</button>
      </nav>

    </header>
  )


}
