import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import useUserStore from '../../stores/user.store'
import { AuthReq, AuthRes } from '../../api/interfaces/auth'
import { loginService } from './login.service'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../Routes/routes'

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
    navigate(ROUTES.HOME)
  }

  const { mutate, error: globalError } = loginService(onSuccess)

  console.log(globalError, 'error')

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
