import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import HomepageUsers from "../components/HomepageUsers";
import {
  XEmbed,
  InstagramEmbed,
  LinkedInEmbed,
} from "react-social-media-embed";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://github.com/dora-rs/dora"
          >
            Try our latest technology: dora-rs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`1ms.ai`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <Heading as="h1" className="hero__title text--center">
            Our Values
          </Heading>
          <HomepageFeatures />
          <Heading as="h1" className="hero__title text--center">
            Our Reviews
          </Heading>
          <div className="container">
            <div className="row margin-top--xl margin-bottom--xl">
              <div className="col col--4 padding--sm">
                <XEmbed
                  url="https://twitter.com/blackanger/status/1612648192373587969"
                  width={325}
                />
              </div>
              <div className="col col--4 padding--sm">
                <XEmbed
                  url="https://twitter.com/Thom_Wolf/status/1780241959036047604"
                  width={325}
                />
              </div>
              <div className="col col--4 padding--sm">
                <XEmbed
                  url="https://twitter.com/PINTO03091/status/1777116918950043693"
                  width={325}
                />
              </div>
            </div>
          </div>
        </div>
        <Heading as="h1" className="hero__title text--center">
          Our Community
        </Heading>
        <HomepageUsers />
      </main>
    </Layout>
  );
}
