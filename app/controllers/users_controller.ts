// import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  user = () => {
    return { name: 'Rahul', age: '24' }
  }

  dashboard = () => {
    return { total_tasks: 100, completed_tasks: 70, remaining_tasks: 30 }
  }
}
