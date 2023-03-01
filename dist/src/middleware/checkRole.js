"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRole = void 0;
const checkRole = async (req, res, next) => {
    let check = req["decoded"].role;
    if (check === "admin") {
        next();
    }
    else {
        res.status(403).json({
            message: 'you have no permission'
        });
    }
};
exports.checkRole = checkRole;
//# sourceMappingURL=checkRole.js.map