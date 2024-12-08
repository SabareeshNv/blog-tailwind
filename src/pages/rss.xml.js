import rss from "@astrojs/rss";
import { fetchAndFilterPosts } from "@utils/helpers";

export async function GET(context) {
    const posts = await fetchAndFilterPosts()
    return rss({
        title: "Lone Voice",
        description: "Just a guy thinking out loud, unpopular opinions ofcourse!",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/post/${post.slug}/`,
        })),
        stylesheet: "/rss/styles.xsl",
    });
}