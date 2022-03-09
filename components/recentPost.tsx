import { FC } from "react";

import { BlogPost } from ".";

import { styled } from "@theme";
import { Blog } from "@/.contentlayer/types";

interface RecentPostsProps {
  posts: Pick<Blog, 'title' | 'summary' | 'slug' | 'publishedAt'>[]
}

const RecentPostsStyled = styled('div', {
  display: 'flex',
  gap: '$6',
  flexDirection: 'column',
  color: '$hiContrast',

  '@desktop': {
    flexDirection: 'row'
  }
});

const RecentPosts: FC<RecentPostsProps> = ({ posts }) => {
  return (
    <RecentPostsStyled>
      { posts.map((blog) => <BlogPost key={blog.slug} { ...blog } />) }
    </RecentPostsStyled>
  );
}

export default RecentPosts;