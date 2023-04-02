import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export const Layout = () => {
  return (
    <div className={'w-full h-screen bg-blue-100 overflow-hidden'}>
      <header>
        <div className={'w-full h-12 bg-blue-500 items-center flex'}>
          <div className={'w-3/4 flex mx-auto'}>
            <div className="text-2xl">
              <span className={'text-red-600'}>T</span>
              <span className={'text-white'}>utoreng</span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={'w-full h-screen flex'}>
          <Sidebar />
          <Outlet />
        </div>
      </main>
    </div>
  )
}
