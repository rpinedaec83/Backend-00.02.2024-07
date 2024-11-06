const config = require('../common/config/env.config');
const OrdenesController = require('./controllers/ordenes.controller');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');

const ADMIN = config.permissionLevels.ADMIN;

exports.routesConfig = function (app) {
    app.post('/ordenes',[
        OrdenesController.insert
    ]);

    app.get('/ordenes', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        OrdenesController.list
    ]);

    app.get('/ordenes/:ordenId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        OrdenesController.getById
    ]);
    app.patch('/ordenes/:ordenId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        OrdenesController.patchById
    ]);
    app.delete('/ordenes/:ordenId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        OrdenesController.removeById
    ]);
}

