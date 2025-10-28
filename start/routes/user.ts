import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'

router.get('/user', [UsersController, 'user'])
router.get('/dashboard', [UsersController, 'dashboard'])
