async function generate() {
  const BASE_URL = 'https://teka.dev';

  const feed = new RSS({
    title: 'teka',
    site_url: BASE_URL,
    feed_url: `${BASE_URL}/feed.xml`
  });

  allBlogs.map()
}