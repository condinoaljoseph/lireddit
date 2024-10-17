import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = []

  create(createPostDto: CreatePostDto) {
    this.posts.push({
      id: this.posts.length + 1,
      post: createPostDto.post
    });
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find(post => post.id === id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex !== -1) {
      this.posts[postIndex] = { ...this.posts[postIndex], post: updatePostDto.post }
    }
  }

  remove(id: number) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex !== -1) {
      this.posts.splice(postIndex, 1);
    }
  }
}
