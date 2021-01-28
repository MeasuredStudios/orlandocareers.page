module.exports = {
  siteMetadata: {
    title: 'Orlando Careers',
    author: 'Jovani Pink',
    description:
      'A dashboard showcasing career options and skills needed in the Greater Orlando area.',
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
  plugins: [
    `gatsby-plugin-react-helmet`,
    { resolve: `gatsby-plugin-emotion` },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `IndeedJobSearchTECHNOLOGY`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Jovani Pink',
        short_name: 'Jovani Pink',
        description: "Jovani Pink's Personal Website.",
        start_url: '/',
        background_color: '#f9f9f9',
        theme_color: '#242943',
        display: 'minimal-ui',
        icon: './static/favicon/ORLANDOCAREERS.png',
        icons: [
          {
            src: '/favicon/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
            density: '0.75',
          },
          {
            src: '/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
            density: '1.0',
          },
          {
            src: '/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
            density: '1.5',
          },
          {
            src: '/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
            density: '2.0',
          },
          {
            src: '/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
            density: '3.0',
          },
          {
            src: '/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            density: '4.0',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.orlandocareers.page',
        sitemap: 'https://www.orlandocareers.page/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'G-WY0YY9WRRL',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        // Specify optional GTM environment details.
        gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        dataLayerName: 'YOUR_DATA_LAYER_NAME',

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': ['Strict-Transport-Security: max-age=63072000'],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
};
