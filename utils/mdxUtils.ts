import { readdirSync } from "fs";
import path from "path";

export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const postFilePaths = readdirSync(POSTS_PATH).filter((path: string) => /\.mdx?$/.test(path));
