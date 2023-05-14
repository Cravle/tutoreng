import { useNavigate } from 'react-router-dom'

export const useUserTable = () => {
  const navigate = useNavigate()

  const handleGoToSchedule = (userId: string) => {
    navigate(`/schedule/${userId}`, {})
  }

  const handleGoToProfile = (userId: string) => {
    navigate(`/profile/${userId}`, {})
  }

  return {
    handleGoToSchedule,
    handleGoToProfile,
  }
}
