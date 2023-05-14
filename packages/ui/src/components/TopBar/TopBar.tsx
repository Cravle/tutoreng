import { memo } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import AvatarPlaceholder from '../../assets/AvatarPlaceholder.png'
import { COLORS } from '../../constatnts/colors'
import { ROUTES } from '../../Routes/routes'
import useUserStore from '../../stores/user.store'
import AddIcon from '../Icons/AddIcon'
import Bell from '../Icons/Bell'
import Medium from '../Typography/Medium'

export default memo(function TopBar() {
  const navigate = useNavigate()
  const currentUser = useUserStore((store) => store.user)

  return (
    <div className="w-full pr-9">
      <div className="flex justify-end">
        {currentUser.role === 'STUDENT' && (
          <Link to={ROUTES.PAYMENTS}>
            <div className="p-3 bg-menuBgHover flex items-center rounded-default  mr-12">
              <div>
                <AddIcon className="mr-3" />
              </div>

              {currentUser?.role === 'STUDENT' && (
                <Medium color={COLORS.menuFont} fontWeight="700">
                  0 грн
                </Medium>
              )}
            </div>
          </Link>
        )}

        <div className="mr-12 flex items-center">
          <Bell />
        </div>

        <div
          onClick={() => navigate(ROUTES.PROFILE)}
          className="cursor-pointer"
        >
          <img src={AvatarPlaceholder} />
        </div>
      </div>
    </div>
  )
})
