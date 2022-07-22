const rehypePrettyCode = require('rehype-pretty-code');
const fs = require('fs');
const visit = require('unist-util-visit');

const rehypePrettyCodeOptions = {
  theme: JSON.parse(
    fs.readFileSync(
      require.resolve('./assets/floating-ui-theme.json'),
      'utf-8'
    )
  ),
  tokensMap: {
    objectKey: 'meta.object-literal.key',
    function: 'entity.name.function',
    param: 'variable.parameter',
    const: 'variable.other.constant',
    class: 'support.class',
  },
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{type: 'text', value: ' '}];
    }
    node.properties.className = ['line'];
  },
  onVisitHighlightedLine(node) {
    node.properties.className = ['line', 'line--highlighted'];
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word'];
  },
};

module.exports = {
  swcMinify: false,
  experimental: {esmExternals: true},
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },

      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        // The default `babel-loader` used by Next:
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [],
            rehypePlugins: [
              [rehypePrettyCode, rehypePrettyCodeOptions],
            ],
          },
        },
      ],
    });

    return config;
  },
};
