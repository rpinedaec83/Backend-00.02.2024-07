var Roles = require('../app/models/role.model');
var Users = require('../app/models/user.model');
Roles.sync();
Users.sync();