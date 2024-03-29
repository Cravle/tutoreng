import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import type { UserResponseType } from '@tutoreng/shared/src'
import * as yup from 'yup'

import { queryClient } from '../../../api/queryClient'
import { patchUser } from '../../../api/user'
import useNotificationStore from '../../../stores/notifications.store'
import useUserStore from '../../../stores/user.store'

const schema = yup.object({
  motivation: yup.string().optional(),
})

type FormData = yup.InferType<typeof schema>

export const useEditingMotivation = (pageOwner?: UserResponseType) => {
  const currentUser = useUserStore((state) => state.user)
  const user = pageOwner || currentUser
  const enqueueNotification = useNotificationStore(
    (state) => state.enqueueNotification,
  )

  const { control, handleSubmit, register } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      motivation: user?.motivation || '',
    },
  })

  const { mutate } = useMutation((data: FormData) => patchUser(data, user.id), {
    onSuccess: () => {
      enqueueNotification('Цілі обновлені', 'success')
      queryClient.invalidateQueries(['user', user.id])
      queryClient.invalidateQueries(['initialUser'])
    },
  })

  const onSubmit = (data: FormData) => {
    console.log('data', data)
    mutate(data)
  }

  return {
    control,
    handleSubmit,
    onSubmit,
    register,
  }
}
