import { Api } from "../api";
import { Post } from "./models/post";
export class PostService {
    url = "https://jsonplaceholder.typicode.com/posts";
    api = new Api();
    public async getPosts() {
        return await this.api.get<Post[]>(this.url);
    }
    public async getPost(id: number) {
        return await this.api.get<Post>(`${this.url}/${id}`);
    }
}


