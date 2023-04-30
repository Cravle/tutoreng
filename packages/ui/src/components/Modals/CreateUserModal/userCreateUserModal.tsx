import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { RoleEnum } from '@tutoreng/db'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  nickname: yup.string().optional(),
  phoneNumber: yup.string().optional(),
  telegram: yup.string().required(),
  // role: yup.mixed().oneOf(Object.keys(RoleEnum)),
})

type FormData = yup.InferType<typeof schema>

type UseCreateUserModal = {
  handleClose: () => void
}

export const useCreateUserModal = ({ handleClose }: UseCreateUserModal) => {
  const { control, handleSubmit } = useForm<
    FormData & {
      role: RoleEnum
    }
  >({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      nickname: '',
      phoneNumber: '',
      telegram: '',
      role: RoleEnum.STUDENT,
    },
  })

  const handleClickOutside = () => {
    handleClose()
  }

  const onSubmit = (data: FormData) => {
    console.log(data)
    handleClose()
  }

  return {
    control,
    handleSubmit,
    handleClickOutside,
    onSubmit,
  }
}
