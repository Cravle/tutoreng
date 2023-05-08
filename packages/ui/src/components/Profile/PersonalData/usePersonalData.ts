import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { SexEnum } from '@tutoreng/db'
import * as yup from 'yup'

import { queryClient } from '../../../api/queryClient'
import { patchUser } from '../../../api/user'
import { useCustomNavigate } from '../../../hooks/useCustomNavigate'
import useNotificationStore from '../../../stores/notifications.store'
import useProfilePageStore from '../../../stores/profilePage.store'
import useUserStore from '../../../stores/user.store'
console.log(SexEnum, 'SexEnum')

const schema = yup.object({
  name: yup.string().required(),
  surname: yup.string().required(),
  sex: yup.mixed<SexEnum>().oneOf(Object.values(SexEnum)).required(),
  mobileNumber: yup.string().required(),
  email: yup.string().email().required(),
})

type FormData = yup.InferType<typeof schema>

export const usePersonalData = () => {
  const { setIsEditing } = useProfilePageStore((store) => store)
  const enqueueNotification = useNotificationStore(
    (state) => state.enqueueNotification,
  )

  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)
  const navigate = useCustomNavigate()

  const { mutate } = useMutation((data: FormData) => patchUser(data, user.id), {
    onSuccess: () => {
      enqueueNotification('Персональна інформація обновлена', 'success')
      queryClient.invalidateQueries(['initialUser'])
    },
  })

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name,
      surname: user?.surname,
      sex: user?.sex,
      mobileNumber: user?.mobileNumber,
      email: user?.email,
    },
  })

  const onSubmit = (data: FormData) => {
    mutate(data)
    if (data.email !== user.email) {
      setIsEditing(false)
      localStorage.removeItem('accessToken')
      localStorage.removeItem('userId')
      setUser(null)
      navigate('/login')
      queryClient.invalidateQueries(['initialUser'])
      enqueueNotification(
        'Ви обноволи email, будь-ласка авторизуйтесь з новим email',
        'success',
      )
    }
  }

  return {
    control,
    handleSubmit,
    onSubmit,
  }
}
