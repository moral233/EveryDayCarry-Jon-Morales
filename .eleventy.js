module.exports = function(eleventyConfig) {
  // Shortcode to render a simple item card. Usage (Liquid):
  // {% edd_card "Title" "/items/slug/" "/images/img.svg" "Short excerpt" %}
  const renderCard = function(title, url, image, excerpt){
    return `<article class="card">
      <a class="card-link" href="${url}">
        <div class="card-media"><img src="${image}" alt="${title}"/></div>
        <div class="card-body">
          <h3>${title}</h3>
          <p class="excerpt">${excerpt}</p>
        </div>
      </a>
    </article>`;
  };

  // Universal shortcode (other engines)
  eleventyConfig.addShortcode("edd_card", renderCard);
  // Liquid needs an explicit liquid shortcode registration so its parser recognizes the tag
  if(typeof eleventyConfig.addLiquidShortcode === 'function'){
    eleventyConfig.addLiquidShortcode("edd_card", renderCard);
  }
  // Nunjucks may require explicit registration for its environment
  if(typeof eleventyConfig.addNunjucksShortcode === 'function'){
    eleventyConfig.addNunjucksShortcode("edd_card", renderCard);
  }

  // passthrough so images copy to _site if using 11ty build
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};

// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};