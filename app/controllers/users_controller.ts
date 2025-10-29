// import type { HttpContext } from '@adonisjs/core/http'
import { UserService } from '#services/user_service'

export default class UsersController {
  user = () => {
    return UserService.getUser()
  }

  dashboard = () => {
    return { total_tasks: 100, completed_tasks: 70, remaining_tasks: 30 }
  }
}
