import { memo } from 'react'

import type { Event } from 'react-big-calendar'

import styled from '@emotion/styled'
import { Modal } from '@mui/material'

import { COLORS } from '../../constatnts/colors'
import useEventStore from '../../stores/events.store'
import CloseModal from '../Icons/CloseModal'
import EditIcon from '../Icons/EditIcon'
import Medium from '../Typography/Medium'
import Small from '../Typography/Small'
import Title from '../Typography/Title'

type EventDescriptionProps = {
  data: {
    x: number
    y: number
    event: Event
  }
  handleClose: () => void
  handleOpenForm: () => void
}

export default memo(function EventDescription({
  data,
  handleClose,
  handleOpenForm,
}: EventDescriptionProps) {
  console.log(data, 'data2')
  const setSelectedEvent = useEventStore((store) => store.setSelectedEvent)

  // const ref = useRef<HTMLDivElement>(null)

  // const handleClickOutside = (event: any) => {
  //   console.log(event, 'event')
  //   const dialogDimensions = ref.current.getBoundingClientRect()

  //   console.log(event.target, 'click event')
  //   console.log('clickOutside')
  //   if (
  //     event.clientX < dialogDimensions.left ||
  //     event.clientX > dialogDimensions.right ||
  //     event.clientY < dialogDimensions.top ||
  //     event.clientY > dialogDimensions.bottom
  //   ) {
  //     console.log('close')
  //     handleClose()
  //   }
  //   event.preventDefault()
  //   event.stopPropagation()
  //   event.nativeEvent.stopImmediatePropagation()
  // }

  // useEvent('click', handleClickOutside, document)

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside)
  //   }
  // }, [])

  const handleEdit = () => {
    setSelectedEvent(data.event.resource)
    handleOpenForm()
    handleClose()
  }

  return (
    <Modal
      open
      onClose={() => handleClose()}
      sx={{
        '& > div': {
          outline: 'none',
        },
        '& > .MuiBackdrop-root': {
          outline: 'none',
          backgroundColor: 'transparent',
        },

        '& > .MuiDialog-container': {
          outline: 'none',
          backgroundColor: 'transparent',
        },
      }}
    >
      <Root
        className="bg-white rounded-25px w-80  border border-solid border-mainBorder"
        x={data.x}
        y={data.y}
      >
        <div className="flex flex-row justify-between items-center p-4 border-b border-solid border-mainBorder">
          <Title>{data.event.resource.title}</Title>

          <div className="flex flex-row gap-3 items-center">
            <div className="cursor-pointer" onClick={handleEdit}>
              <EditIcon />
            </div>
            <div onClick={handleClose} className="cursor-pointer">
              <CloseModal />
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="mt-2">
            <Small color={COLORS.menuFont}>Власник</Small>
          </div>
          <div className="mt-2">
            <Medium>
              {data.event.resource.owner.name}{' '}
              {data.event.resource.owner.surname}
            </Medium>
          </div>

          <div className="mt-4">
            <Small color={COLORS.menuFont}>Гість</Small>
          </div>
          <div className="mt-2">
            <Medium>
              {data.event.resource.guests[0].user.name}{' '}
              {data.event.resource.guests[0].user.surname}
            </Medium>
          </div>

          <div className="mt-4">
            <Small color={COLORS.menuFont}>Посилання на зустріч</Small>
          </div>
          <div className="mt-2">
            <Medium color={COLORS.button} wordBreak="break-all">
              <a href={data.event.resource.callUrl}>
                {data.event.resource.callUrl}
              </a>
            </Medium>
          </div>
        </div>
      </Root>
    </Modal>
  )
})

const Root = styled.div<{ x: number; y: number }>`
  position: absolute;

  top: ${({ y }) => y - 30}px;
  left: ${({ x }) => x + 150}px;
`
