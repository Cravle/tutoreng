import { useEffect } from 'react'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import * as yup from 'yup'

import { queryClient } from '../../../api/queryClient'
import { updatePassword } from '../../../api/user'
import useNotificationStore from '../../../stores/notifications.store'
import useUserStore from '../../../stores/user.store'

const schema = yup.object().shape({
  oldPassword: yup.string().required(),
  newPassword: yup.string().required().min(6).max(20),
  confirmPassword: yup.string().required().min(6).max(20),
})

type FormData = yup.InferType<typeof schema>

export const useEditingPasswords = () => {
  const user = useUserStore((state) => state.user)
  const enqueueNotification = useNotificationStore(
    (state) => state.enqueueNotification,
  )

  const { control, handleSubmit, watch, setError, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const { mutate } = useMutation(
    (data: Required<Omit<FormData, 'confirmPassword'>>) =>
      updatePassword(data, user.id),
    {
      onSuccess: () => {
        enqueueNotification('Пароль обновлен', 'success')
        queryClient.invalidateQueries(['initialUser'])
        reset()
      },
      onError: (error) => {
        if (error instanceof Error) {
          enqueueNotification(error.message, 'error')
        }
      },
    },
  )

  const onSubmit = (data: FormData) => {
    console.log('data', data)

    if (data.newPassword !== data.confirmPassword) {
      console.log('Passwords do not match')
      return
    }

    const dataToSend = {
      oldPassword: data.oldPassword,
      newPassword: data.newPassword,
    }

    mutate(dataToSend)
  }

  const password = watch('newPassword')
  const confirmPassword = watch('confirmPassword')

  useEffect(() => {
    if (password !== confirmPassword) {
      setError('confirmPassword', {
        type: 'manual',
        message: 'Пароли не совпадают',
      })
    }
  }, [password, confirmPassword])

  return {
    control,
    handleSubmit,
    onSubmit,
  }
}
