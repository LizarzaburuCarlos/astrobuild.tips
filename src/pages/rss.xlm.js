import rrs from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context){
    const posts = await getCollection('tips');
    return rss({
        title: 'AstroBuild.tips',
        description: 'my primera muerte',
        site: context.site,
        items: posts.map((post)=> ({
            ...post.data,
            link:`/posts/${post.slug}/`,
        }))
    })
}