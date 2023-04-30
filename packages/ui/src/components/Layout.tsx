import { Outlet } from 'react-router-dom'

import TopBar from './TopBar/TopBar'
import SideBar from './SideBar'

export const Layout = () => {
  return (
    <div className={'flex h-screen overflow-hidden'}>
      {/*  SideBar */}
      <SideBar />

      <div className={'w-full h-screen bg-main-bg'}>
        <header>
          <div
            className={
              'w-full h-24 bg-white border-b border-solid border-mainBorder items-center flex'
            }
          >
            <TopBar />
          </div>
        </header>
        <main className="h-content ">
          <div className={'w-full flex h-full'}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
