import { Router } from "express";
import PostController from "../controller/postController";


export const postRouter = Router ()
postRouter.get('/',PostController.getAll);
postRouter.get('/:id', PostController.getPostUser)
postRouter.post('/',PostController.create);
postRouter.put('/:idPost',PostController.update);
postRouter.delete('/:idPost',PostController.remove);



