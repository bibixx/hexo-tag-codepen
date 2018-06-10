// {% codepen slugHash defaultTabs height width userId|anonymous|anon theme %}

function codepenTagRender(args) {
  const [
    hash,
    tabs = hexo.config.codepen.default_tabs || "result,js",
    height = hexo.config.codepen.height || 300,
    width = hexo.config.codepen.width || "100%",
    user,
    theme = hexo.config.codepen.theme || "dark"
  ] = args;

  const userId = user ? user === 'anonymous' ? 'anon' : user : hexo.config.codepen.userId || "anon";

  if ( !hash ) {
    return new Error("Pen hash should be provided");
  }

  const src = `//codepen.io/${userId}/embed/${slugHash}?height=${height}&theme-id=${theme}&slug-hash=${slugHash}&default-tab=${defaultTab}&embed-version=2`;
  const id = `cp_embed_${slugHash.replace(/\//g, '_')}`

  return `<iframe id="${id}" src="${src}" scrolling="no" frameborder="no" height="${height}" allowTransparency="true" allowfullscreen="true" class="cp_embed_iframe" style="width: ${width}; overflow: hidden;"></iframe>`;
}

hexo.extend.tag.register('codepen', codepenTagRender);
