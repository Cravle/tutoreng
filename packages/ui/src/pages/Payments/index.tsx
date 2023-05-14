import { memo } from 'react'

import { Button } from '@mui/material'

import Counter from '../../components/Counter/Counter'
import PaymentStatistics from '../../components/PaymentStatistics/PaymentStatistics'
import Heading from '../../components/Typography/Heading'
import Medium from '../../components/Typography/Medium'
import Small from '../../components/Typography/Small'
import { COLORS } from '../../constatnts/colors'

import { usePayments } from './usePayments'

// const HoursBlock = ({
//   value,
//   title,
//   onClick,
//   active,
// }: {
//   value: number
//   title: string
//   onClick: () => void
//   active: boolean
// }) => {
//   return (
//     <div
//       className={`bg-menuBgHover p-5 rounded-[25px] ${
//         active && 'bg-lightButton'
//       }`}
//       onClick={onClick}
//     >
//       <div className="mb-3 ">
//         <Small color={COLORS.menuFont}> хвилин</Small>
//       </div>
//       <Heading>400 грн</Heading>
//     </div>
//   )
// }

export default memo(function Payments() {
  const { setCounter, setHours, hours, totalPrice } = usePayments()
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-1/3 w-full p-7  flex flex-col">
        <div className="pb-5">
          <Heading>Поповнення рахунку</Heading>
        </div>
        <div className="p-7 bg-white rounded-[25px] w-2/3 flex flex-col flex-grow justify-center">
          <Small color={COLORS.menuFont}>Тариф: стандарт</Small>
          <div className="flex flex-row justify-center gap-5">
            <div
              className={`bg-menuBgHover cursor-pointer  p-5 rounded-[25px] ${
                hours === 1 && 'bg-lightButton'
              } `}
              onClick={() => setHours(1)}
            >
              <div className="mb-3 ">
                <Small color={COLORS.menuFont}>60 хвилин</Small>
              </div>
              <Heading>400 грн</Heading>
            </div>
            <div
              className={`bg-menuBgHover cursor-pointer  p-5 rounded-[25px] ${
                hours === 1.5 && 'bg-lightButton'
              }  `}
              onClick={() => setHours(1.5)}
            >
              <div className="mb-3">
                <Small color={COLORS.menuFont}>90 хвилин</Small>
              </div>
              <Heading>550 грн</Heading>
            </div>
            <div
              className={`bg-menuBgHover  cursor-pointer p-5 rounded-[25px] ${
                hours === 2 && 'bg-lightButton'
              }  `}
              onClick={() => setHours(2)}
            >
              <div className="mb-3">
                <Small color={COLORS.menuFont}>120 хвилин</Small>
              </div>
              <Heading>700 грн</Heading>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className={'mr-4'}>
              <Small color={COLORS.menuFont}>Оберіть кількість занять:</Small>
            </div>

            <Counter onChange={(value: number) => setCounter(value)} />
          </div>
          <div className="flex flex-row items-center">
            <div className={'mr-4'}>
              <Small color={COLORS.menuFont}>До сплати:</Small>
            </div>
            <Medium color={COLORS.button}>{totalPrice} грн</Medium>
          </div>
          <div className="w-full flex content-center justify-center items-center pt-4">
            <div className="w-1/4">
              <Button fullWidth disabled variant="contained">
                Поповнити баланс
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/2 w-full p-7">
        <PaymentStatistics />
      </div>
    </div>
  )
})
