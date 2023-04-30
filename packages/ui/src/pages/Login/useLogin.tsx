import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import type { AuthReq, AuthRes } from '../../api/interfaces/auth'
import { ROUTES } from '../../Routes/routes'
import useUserStore from '../../stores/user.store'

import { loginService } from './login.service'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

type FormData = yup.InferType<typeof schema>

export const useLogin = () => {
  const navigate = useNavigate()
  const setUser = useUserStore((store) => store.setUser)

  const onSuccess = (data: AuthRes | undefined) => {
    setUser(data?.user)
    localStorage.setItem('accessToken', data?.tokens.accessToken)
    localStorage.setItem('userId', `${data?.user.id}`)
    navigate(ROUTES.HOME)
  }

  const { mutate, error: globalError } = loginService(onSuccess)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema as any),
  })
  const onSubmit: SubmitHandler<FormData> = async (data: AuthReq) => {
    try {
      await mutate(data)
    } catch (error) {
      console.log('error')
    }
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    globalError,
  }
}
