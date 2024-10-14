
const config = require('../common/config/env.config');
const OrdenesController = require('./controllers/ordenes.controller');
const ValidationMiddleware = require('../common/middlewares/auth.validation.middleware');
const PermissionMiddleware = require('../common/middlewares/auth.permission.middleware');

const ADMIN = config.permissionLevels.ADMIN;
const PAID = config.permissionLevels.PAID_USER;
const FREE = config.permissionLevels.NORMAL_USER;

exports.routesConfig = function (app) {
    app.post('/ordenes',[
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        OrdenesController.insert
    ]);

    app.get('/ordenes', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        OrdenesController.list
    ]);

    app.get('/ordenes/:ordenId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        OrdenesController.getById
    ]);
    app.patch('/ordenes/:ordenId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        OrdenesController.patchById
    ]);
    app.delete('/ordenes/:ordenId', [
        ValidationMiddleware.validJWTNeeded,
        PermissionMiddleware.minimumPermissionLevelRequired(PAID),
        PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        OrdenesController.removeById
    ]);
}
