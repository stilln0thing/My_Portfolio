const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  basePath: isProd ? '/My_Portfolio' : '',
  assetPrefix: isProd ? '/My_Portfolio/' : '',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};
