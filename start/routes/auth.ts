import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'

router.post('/signup', [AuthController, 'signup'])
router.post('/login', [AuthController, 'login'])
