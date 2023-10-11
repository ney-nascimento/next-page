import Image from 'next/image'
import Header from "./components/header"
import { NextFetchEvent } from 'next/server'

export default function Home() {
  return (
    <>
      
      <Header/>
      <section className="flex flex-col  h-[115vh] pt-[8em] bac bg-[url(https://media.istockphoto.com/id/1417857883/photo/person-are-using-laptops-working-or-studying-online-at-home-businessman-using-laptop-work.webp?b=1&s=170667a&w=0&k=20&c=7au5-SpKDgCJHZLA1e8iCX4Fm92IoFsdtCQJvSbvzrQ=)] mt-5 bg-cover w-full">
        <h1 className='text-white text-5xl p-15 font-bold italic flex place-items-center p-6 justify-between'>BEM VINDO AO MUNDO DA TECNOLOGIA!</h1>
        <nav>
          <div className='flex justify-center'>
            <div className='backdrop-blur-lg bg-[rgba(0,0,0,0.1)] z-0'>
              <Image
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
        <section className='flex justify-center'>
          <div className='bg-gradient-to-r gap-10 from-blue-700 to-detail w-[100%] h-[28vw] p-6 shadow-lg flex'>
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
