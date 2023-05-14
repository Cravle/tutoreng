import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { RoleEnum, SexEnum } from '@tutoreng/db'
import type { UserCreateDto } from '@tutoreng/shared/src/user'
import * as yup from 'yup'

import { createNewUserModalService } from './CreateNewUserModal.service'

const schema = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().email().required(),
  nickname: yup.string().optional(),
  mobileNumber: yup.string().optional(),
  telegram: yup.string().required(),
  sex: yup.mixed().oneOf(Object.keys(SexEnum)),
  // role: yup.mixed().oneOf(Object.keys(RoleEnum)),
})

type FormData = yup.InferType<typeof schema>

type FullFormData = FormData & {
  role: RoleEnum
  sex: SexEnum
}

type UseCreateUserModal = {
  handleClose: () => void
}

export const useCreateUserModal = ({ handleClose }: UseCreateUserModal) => {
  const { control, handleSubmit } = useForm<FullFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      nickname: '',
      mobileNumber: '',
      telegram: '',
      role: RoleEnum.STUDENT,
      sex: SexEnum.MALE,
    },
  })
  const { mutate } = createNewUserModalService()

  const handleClickOutside = () => {
    handleClose()
  }

  const onSubmit = (data: Required<FullFormData>) => {
    console.log(data)

    const newUser: UserCreateDto = {
      ...data,
      password: '123456',
    }

    mutate(newUser)
    handleClose()
  }

  return {
    control,
    handleSubmit,
    handleClickOutside,
    onSubmit,
  }
}
