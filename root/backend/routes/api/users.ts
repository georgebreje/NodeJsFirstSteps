import usersController from '../../controllers/usersController';
import { UserRoles } from '../../model/UserRoles';

const express = require('express');
const router = express.Router();

const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(usersController.getAllUsers);

router.route('/usersOnlyAdmin')
    .get(verifyRoles(UserRoles.Admin), usersController.getUsersOnlyAdminAllowed)

export default router;