import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'twin.macro';
import ThemeToggle from './themeToggle';
import stylesBase from './stylesBase';

const ExternalLink: React.FC = ({ href, children }) => {
  return (
    <a
      tw="text-sm text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer tw="flex flex-col items-center mb-8 md:mt-8 md:mt-12">
      <div tw="flex space-x-4 mb-4">
        <ExternalLink href="https://twitter.com/JovaniPink">
          <span tw="sr-only">Twitter</span>
          <svg tw="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://www.linkedin.com/in/jovanipink/">
          <span tw="sr-only">LinkedIn</span>
          <svg tw="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://github.com/JovaniPink">
          <span tw="sr-only">Github</span>
          <svg tw="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </g>
          </svg>
        </ExternalLink>
        <ExternalLink href="https://www.jovanipink.com/">
          <span tw="sr-only">Email</span>
          <svg tw="h-5 w-5" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </g>
          </svg>
        </ExternalLink>
      </div>
      <div tw="flex sm:flex-col sm:flex-wrap md:flex-row md:space-x-3 lg:md:space-x-3">
        <span>
          {' '}
          • Framework:{' '}
          <ExternalLink href="https://www.gatsbyjs.com/">
            Gatsby.js
          </ExternalLink>
        </span>
        <span>
          {' '}
          • Design:{' '}
          <ExternalLink href="https://tailwindcss.com/">
            Tailwind CSS
          </ExternalLink>
        </span>
        <span>
          {' '}
          • Sister Site:{' '}
          <ExternalLink href="https://www.orlandoservicerelief.com/">
            Orlando Service Relief
          </ExternalLink>
        </span>
        <span>
          {' '}
          • Blog:{' '}
          <ExternalLink href="https://www.jovanipink.com/blog/2021-01-27-this-is-what-I-do">
            Story
          </ExternalLink>
        </span>
      </div>
    </footer>
  );
};

const Layout: React.FC = ({ children, ...rest }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div {...rest}>
      <GlobalStyles />
      <Global styles={stylesBase} />
      <nav tw="top-0 flex justify-between items-center max-w-5xl w-full p-8 my-0 md:my-8 mx-auto bg-opacity-60">
        <h1 tw="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-8">
          Orlando Careers Dashboard
        </h1>
        <span tw="flex flex-row items-center">
          <ExternalLink href="https://github.com/JovaniPink/orlando-careers">
            <span tw="sr-only">Github</span>
            <svg tw="h-5 w-5" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </g>
            </svg>
          </ExternalLink>
          <ThemeToggle />
        </span>
      </nav>
      <main tw="flex flex-col justify-center items-center max-w-5xl w-full mx-auto px-8">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
