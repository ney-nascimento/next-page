export default function Header(){
    return (
        <header className='h-[15vh] w-full bg-blue-900 top-0 z-10  flex place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded-br-lg'>
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
    )
}

