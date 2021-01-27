import * as React from 'react';
import { PageProps } from 'gatsby';
import 'twin.macro';

import Layout from '../components/Layout';
import { SiLinkedin, SiIndeed, SiMonster } from 'react-icons/si';
import { BsFileEarmarkZip } from 'react-icons/bs';

const Home: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div tw="container mx-auto px-4">
        <h1 tw="font-bold text-3xl md:text-5xl tracking-tight mb-2">
          Welcome.
        </h1>
        <p tw="mb-16">
          A dashboard showcasing career options and skills needed in the Greater
          Orlando area.
        </p>
        <h3 tw="font-bold text-2xl md:text-4xl tracking-tight mb-2">
          Thank You...
        </h3>
        <h4 tw="text-lg md:text-xl font-medium mb-16 w-full">
          Currently this dashboard is being developed. You could follow the
          source Repo to start using the web gather,{' '}
          <a
            tw="text-lg md:text-xl font-bold hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/JovaniPink/orlando-careers"
          >
            Orlando Job Market Data
          </a>{' '}
        </h4>
        <h3 tw="font-bold text-2xl md:text-4xl tracking-tight mb-2">
          Keep Applying
        </h3>
        <div tw="mb-16">
          <br />
          <a
            tw="mb-4 hover:shadow"
            href="https://www.linkedin.com/jobs/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div tw="flex items-center border rounded p-4">
              <div tw="h-8 w-8 ml-2 mr-4">
                <span tw="sr-only">LinkedIn</span>
                <SiLinkedin />
              </div>
              <div>
                <h4 tw="text-lg font-bold tracking-tight">LinkedIn</h4>
                <p tw="leading-5">
                  LinkedIn is an American business and employment-oriented
                  online service that operates via websites and mobile apps.
                </p>
              </div>
            </div>
          </a>
          <br />
          <a
            tw="mb-4 hover:shadow"
            href="https://www.indeed.com/"
            aria-label="Indeed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div tw="flex items-center border rounded p-4">
              <div tw="h-8 w-8 ml-2 mr-4">
                <span tw="sr-only">Indeed</span>
                <SiIndeed />
              </div>
              <div>
                <h4 tw="text-lg font-bold tracking-tight">Indeed</h4>
                <p tw="leading-5">
                  Indeed is an American worldwide employment website for job
                  listings launched in November 2004.
                </p>
              </div>
            </div>
          </a>
          <br />
          <a
            tw="mb-4 hover:shadow"
            href="https://www.ziprecruiter.com/"
            aria-label="ZipRecruiter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div tw="flex items-center border rounded p-4">
              <div tw="h-8 w-8 ml-2 mr-4">
                <span tw="sr-only">ZipRecruiter</span>
                <BsFileEarmarkZip />
              </div>
              <div>
                <h4 tw="text-lg font-bold tracking-tight">ZipRecruiter</h4>
                <p tw="leading-5">
                  ZipRecruiter is an American employment marketplace for job
                  seekers and employers.
                </p>
              </div>
            </div>
          </a>
          <br />
          <a
            tw="mb-4 hover:shadow"
            href="https://www.monster.com/"
            aria-label="Monster.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div tw="flex items-center border rounded p-4">
              <div tw="h-8 w-8 ml-2 mr-4">
                <span tw="sr-only">Monster.com</span>
                <SiMonster />
              </div>
              <div>
                <h4 tw="text-lg font-bold tracking-tight">Monster.com</h4>
                <p tw="leading-5">
                  Monster.com is a global employment website owned and operated
                  by Monster Worldwide, Inc.
                </p>
              </div>
            </div>
          </a>
          <br />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
