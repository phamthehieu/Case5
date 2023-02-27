"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_soure_1 = require("../data-soure");
const posts_1 = require("../model/posts");
const likes_1 = require("../model/likes");
const http_errors_1 = __importDefault(require("http-errors"));
const PostRepo = data_soure_1.AppDataSource.getRepository(posts_1.Posts);
const LikeRepo = data_soure_1.AppDataSource.getRepository(likes_1.Likes);
class LikeUnlikeController {
    async likeUnlikePost(req, res, next) {
        try {
            const post = await PostRepo.findOne({
                where: { idPost: req.params.idPost },
            });
            if (!post) {
                return next((0, http_errors_1.default)(401, "Post Not Found"));
            }
            const like = await LikeRepo.findOne({
                where: { idPosts: req.params.idPost, idUser: req.params.idUser },
            });
            if (like) {
                await LikeRepo.delete({
                    idPosts: req.params.idPost,
                    idUser: req.params.idUser,
                });
                res.status(200).json({
                    success: true,
                    message: "Delete Like",
                });
            }
            else {
                await LikeRepo.save({
                    idPosts: req.params.idPost,
                    idUser: req.params.idUser,
                });
                res.status(200).json({
                    success: true,
                    message: "Create Like",
                });
            }
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = new LikeUnlikeController();
//# sourceMappingURL=likeunlikeController.js.map