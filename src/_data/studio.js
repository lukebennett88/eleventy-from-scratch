const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async () => {
  try {
    const { items } = await Cache(
      'https://11ty-from-scratch-content-feeds.piccalil.li/media.json',
      {
        duration: '1d',
        type: 'json',
      }
    );
    return items;
  } catch (ex) {
    console.log(ex);
    return [];
  }
};
