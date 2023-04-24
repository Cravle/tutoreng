import { Outlet } from 'react-router-dom'

import TopBar from './TopBar/TopBar'
import SideBar from './SideBar'

export const Layout = () => {
  return (
    <div className={'flex'}>
      {/*  SideBar */}
      <SideBar />

      <div className={'w-full h-screen bg-main-bg'}>
        <header>
          <div
            className={
              'w-full h-24 bg-white border-solid border-b items-center flex'
            }
          >
            <TopBar />
          </div>
        </header>
        <main>
          <div className={'w-full flex'}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
