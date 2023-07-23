import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getAllPosts() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        const slug = fileName.replace('.md', '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const {data} = matter(fileContent);

        return {slug, ...data};
    });
}

export async function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        content: contentHtml,
        ...data
    };
}
