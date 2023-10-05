import Image from 'next/image'
import { NextFetchEvent } from 'next/server'

export default function Home() {
  return (
    <>
      <header className='h-[15vh] w-full bg-blue-900 top-0 z-10 fixed flex place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded-br-lg'>
        <img src="/logo.svg" alt="" className='w-[15%]' />
        <nav className='text-white flex flex-wrap p-6 items-center justify-between'>
          <ul className='flex gap-10 px-3 py-1  cursor-pointer transition'>
            <li className='px-3 py-1 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
              <a href="" className='text-white text-2xl font-bold'>Fale Conosco</a>
            </li>
            <li className='px-3 py-1 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
              <a href="" className='text-white text-2xl font-bold'>Cadastro</a>
            </li>
            <li className='px-3 py-1 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>
              <a href="" className='text-white text-2xl font-bold'>Sobre</a>
            </li>
          </ul>
          <button className='group/enter flex gap-3 ml-25 rounded-2xl border border-black shadow-lg px-3 py-1 font-light'>
            <span className="text-white font-bold text-2xl">Sign-in</span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-3xl group-hover/enter:text-green-500 group-hover/enter:bg-black rounded-full transition" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path>
            </svg>
          </button>
        </nav>
      </header>

      <section className="flex flex-col  h-[115vh] pt-[8em] bac bg-[url(https://media.istockphoto.com/id/1417857883/photo/person-are-using-laptops-working-or-studying-online-at-home-businessman-using-laptop-work.webp?b=1&s=170667a&w=0&k=20&c=7au5-SpKDgCJHZLA1e8iCX4Fm92IoFsdtCQJvSbvzrQ=)] mt-5 bg-cover w-full">
        <h1 className='text-white text-5xl p-15 font-bold font-style: italic flex place-items-center p-6 justify-between'>BEM VINDO AO NOSSO MUNDO DE TECNOLOGIA!</h1>
        <nav>
          <div className='flex justify-center'>
            <div className='backdrop-blur-lg bg-[rgba(0,0,0,0.1)] z-0'>
              < Image
                src={"/logo.png"}
                width={900}
                height={900}
                alt=''
              />
            </div>
          </div>
        </nav>
      </section>
      <main className='py-6 first:mt-0'>
        <section className='flax mt-5 justify-center'>
          <div className='bg-gradient-to-r gap-10 from-blue-700 to-detail w-[80%] h-[28vw] p-6 shadow-lg flex'>
            <div className='text-white flex w-[100%]'>
              <h1 className='text-white text-5xl font-bold'>HTC by SOLUCTION</h1>
              <ul className='w-[20%] flex-col py-20 pr-20 text-4xl text-white font-bold'>
                <h1 className='py-10 p-15 text-4xl text-white font-bold'>Acesse:</h1>
                <li>
                  <a href="https://www.profissionaisti.com.br/">ProfissionaisTI</a>
                </li>
                <li>
                  <a href="https://www.youtube.com/">You Tube</a>
                </li>
                <li>
                  <a href="https://chat.openai.com/">ChatGPT</a>
                </li>
                <li>
                  <a href="https://github.com/">GitHub</a>
                </li>
              </ul>
              <Image
                src={"/notebook.avif"}
                width={900}
                height={900}
                alt=''
              />
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-black text-white flex justify-evenly py-10'>
        <div className='flex items-center flex-col'>
          <h1 className='font-bold text-3xl'>Contact</h1>
          <ol>
            <li>Website: www.htcbysoluction.com.br</li>
            <li>Fone: (47) 9 9999-1234</li>
            <li>E-mail: htcbysoluction@gmail.com</li>
          </ol>
        </div>
        <div className='flex items-center flex-col'>
          <h1 className='font-bold text-3xl'>My Pannel</h1>
          <ol>
            <li>Developers</li>
            <li>Build for cPanel</li>
            <li>Forums</li>
          </ol>
        </div>
        <div className='flex items-center flex-col'>
          <h1 className='font-bold text-3xl'>More Infomation</h1>
          <ol>
            <li>Corporation</li>
            <li>About</li>
            <li>Blog</li>
          </ol>
        </div>
      </footer>
    </>
  )
}
