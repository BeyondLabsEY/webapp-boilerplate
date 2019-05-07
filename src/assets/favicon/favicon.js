const faviconContext = require.context(
  "!!file-loader?name=assets/favicon/[name].[ext]!.",
  true,
  /\.(svg|png|ico|xml|json|webmanifest)$/
);

faviconContext.keys().forEach(faviconContext);