import { memo } from 'react'

import { NavLink } from 'react-router-dom'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { useLogin } from './useLogin'

export default memo(function Login() {
  const { onSubmit, handleSubmit, register, errors, globalError } = useLogin()

  return (
    <div className={'h-screen'}>
      <div className={'h-3/4 flex'}>
        <div className={'py-4 w-96 bg-blue-200  mx-auto my-auto rounded-xl '}>
          <form className={'p-5'} onSubmit={handleSubmit(onSubmit)}>
            <>
              <h1 className={'text-center text-2xl'}>Sign in</h1>
              <div>
                <TextField
                  className={'w-full mt-4'}
                  label={'Email'}
                  variant="standard"
                  type={'email'}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...register('email', { required: true })}
                />
              </div>
              <div className={'mt-4'}>
                <TextField
                  className={'w-full '}
                  label={'Password'}
                  variant="standard"
                  type={'password'}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  {...register('password', { required: true })}
                />
              </div>
              {globalError && (
                <div className={'text-red-500 text-center mt-2'}>
                  {(globalError as any).message}
                </div>
              )}
              <div className={'flex justify-center mt-5 w-full h-12'}>
                <Button
                  type={'submit'}
                  className={'w-3/4'}
                  variant={'contained'}
                >
                  Log in
                </Button>
              </div>
              <div
                className={
                  'w-full flex justify-center hover:text-blue-900 mt-3 text-sm'
                }
              >
                <NavLink to={'/register'}>
                  Still don't have account? Register now
                </NavLink>
              </div>
            </>
          </form>
        </div>
      </div>
    </div>
  )
})
