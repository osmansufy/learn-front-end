import './App.css'
import viteLogo from '/vite.svg'

function App() {

  return (
    <div className='container mx-auto'>
      <div className="grid  grid-rows-[repeat(6,minmax(120px,1fr))] gap-4">
        {/* Header */}
        <header className="flex justify-between items-center bg-[#D9D9D9] p-4  row-span-1">
          <img src={viteLogo} className="p-2" alt="Vite Logo" />
          {/* menu */}
          <nav className="header-nav">
            <ul className="flex gap-4">
              <li>
                <a href="#" className='text-lg' target="_blank" rel="noopener noreferrer">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className='text-lg' target="_blank" rel="noopener noreferrer">
                  About
                </a>
              </li>
              <li>
                <a href="#" className='text-lg' target="_blank" rel="noopener noreferrer">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className='text-lg' target="_blank" rel="noopener noreferrer">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <button type="button" className="px-6 py-4 bg-[#9B9B9B] text-black rounded-lg">
            Get Started
          </button>
        </header>
        <div className='row-span-4 grid grid-cols-12 gap-4'>
          {/* Sidebar */}
          <aside className="bg-[#D9D9D9] p-4 col-span-3 ">
            Sidebar
          </aside>
          {/* Main */}
          <main className="bg-[#D9D9D9] p-4 col-span-6">
            "Main"
          </main>
          <aside className="bg-[#D9D9D9] p-4 col-span-3">
            Sidebar
          </aside>
        </div>
        {/* Footer */}
        <footer className="bg-[#D9D9D9] p-4  row-span-1">
          Footer
        </footer>
      </div>
    </div>
  )
}

export default App
