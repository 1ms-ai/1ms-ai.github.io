import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import HomepageUsers from '../components/HomepageUsers';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/dora-rs/dora">
              Try our latest technology: dora-rs 
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome!`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <div className="container">
        <Heading as="h1" className="hero__title text--center">
          Values
        </Heading>
        <HomepageFeatures />
        <Heading as="h1" className="hero__title text--center">
          Community
        </Heading>
        </div>
        <HomepageUsers />
      </main>
    </Layout>
  );
}
