import { PostService } from "./service";
const service = new PostService();
service.getPosts().then((posts) => {
    console.log(posts);
});
