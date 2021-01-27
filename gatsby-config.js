module.exports = {
  siteMetadata: {
    title: 'Orlando Careers',
    author: 'Jovani Pink',
    description: 'A dashboard showcasing career options and skills needed in the Greater Orlando area.',
    keywords:
      'dashboard, reactjs, gatsbyjs, tailwindcss, twin-macro, orlando-job-market-data​',
    siteUrl: 'https://www.orlandocareers.page',
    social: {
      twitter: `@JovaniPink`,
    },
  },
  flags: { DEV_SSR: true },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [{ resolve: `gatsby-plugin-emotion` }],
};
