import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { NavLink, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate('/')
  }

  return (
    <>
      <div className={'h-3/4 flex'}>
        <div className={'h-72 w-96 bg-blue-200  mx-auto my-auto rounded-xl '}>
          <div className={'p-5'}>
            <h1 className={'text-center text-2xl'}>Sign in</h1>
            <div>
              <TextField
                className={'w-full mt-4'}
                label={'Email'}
                variant="standard"
              />
            </div>
            <div className={'mt-4'}>
              <TextField
                className={'w-full '}
                label={'Password'}
                variant="standard"
              />
            </div>
            <div className={'flex justify-center mt-5 w-full h-12'}>
              <Button
                className={'w-3/4'}
                variant={'contained'}
                onClick={handleSubmit}
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
          </div>
        </div>
      </div>
    </>
  )
}
