import { AppDataSource } from "../data-soure";
import { Users } from "../model/users";
import { Comments } from "../model/comments";
import { Posts } from "../model/posts";
import { Likes } from "../model/likes";
import createError from "http-errors";

const PostRepo = AppDataSource.getRepository(Posts);
const LikeRepo = AppDataSource.getRepository(Likes);

class LikeUnlikeController {
async likeUnlikePost(req, res, next) {
    try {
      const post = await PostRepo.findOne({
        where: { idPost: req.params.idPost },
      });
      if (!post) {
        return next(createError(401, "Post Not Found"));
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
      } else {
        await LikeRepo.save({
          idPosts: req.params.idPost,
          idUser: req.params.idUser,
        });
        res.status(200).json({
          success: true,
          message: "Create Like",
        });
      }
    } catch (error) {
      next(error);
    }
  }
}
export default new LikeUnlikeController();



