// import type { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

export default class UsersController {
  user = () => {
    return { name: 'Rahul', age: '24', db: env.get('DB_DATABASE') }
  }

  dashboard = () => {
    return { total_tasks: 100, completed_tasks: 70, remaining_tasks: 30 }
  }
}
