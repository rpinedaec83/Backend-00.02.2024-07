const config = require('../common/config/env.config');
const CursosController = require('./controllers/cursos.controller');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');

const ADMIN = config.permissionLevels.ADMIN;

exports.routesConfig = function (app) {
    app.post('/cursos',[
        CursosController.insert
    ]);

    app.get('/cursos', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        CursosController.list
    ]);

    app.get('/cursos/:cursoId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        CursosController.getById
    ]);
    app.patch('/cursos/:cursoId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        CursosController.patchById
    ]);
    app.delete('/cursos/:cursoId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        CursosController.removeById
    ]);
}

