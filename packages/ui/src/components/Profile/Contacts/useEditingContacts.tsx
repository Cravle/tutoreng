import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import * as yup from 'yup'

import { queryClient } from '../../../api/queryClient'
import { patchUser } from '../../../api/user'
import useNotificationStore from '../../../stores/notifications.store'
import useUserStore from '../../../stores/user.store'

// SOCIAL_LINKS
const schema = yup.object({
  telegram: yup.string().optional(),
  viber: yup.string().optional(),
  whatsapp: yup.string().optional(),
  facebook: yup.string().optional(),
  instagram: yup.string().optional(),
  tiktok: yup.string().optional(),
})

type FormData = yup.InferType<typeof schema>

export const useEditingContact = () => {
  const user = useUserStore((state) => state.user)
  const enqueueNotification = useNotificationStore(
    (state) => state.enqueueNotification,
  )

  const { mutate } = useMutation((data: FormData) => patchUser(data, user.id), {
    onSuccess: () => {
      enqueueNotification('Контакты успешно обновлены', 'success')
      queryClient.invalidateQueries(['initialUser'])
    },
  })

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      telegram: user?.telegram || '',
      viber: user?.viber || '',
      whatsapp: user?.whatsapp || '',
      facebook: user?.facebook || '',
      instagram: user?.instagram || '',
      tiktok: user?.tiktok || '',
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
  }
}
