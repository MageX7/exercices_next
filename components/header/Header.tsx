import Nav from "./Nav"


const Header = () => {
  return (
    <header className='h-[10%] bg-gray-800 text-white flex items-center justify-between px-4'>
        <h1 className='text-lg font-bold'>Gestion d'exercice nextjs</h1>
        <Nav></Nav>
    </header>
  )
}

export default Header