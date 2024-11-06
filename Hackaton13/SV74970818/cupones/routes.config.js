const config = require('../common/config/env.config');
const CuponesController = require('./controllers/cupones.controller');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');

const ADMIN = config.permissionLevels.ADMIN;

exports.routesConfig = function (app) {
    app.post('/cupones',[
        CuponesController.insert
    ]);

    app.get('/cupones', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        CuponesController.list
    ]);

    app.get('/cupones/:cuponId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        CuponesController.getById
    ]);
    app.patch('/cupones/:cuponId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        CuponesController.patchById
    ]);
    app.delete('/cupones/:cuponId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        CuponesController.removeById
    ]);
}

