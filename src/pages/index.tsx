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
import ReactPlayer from "react-player";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  // Define height as 740px on desktop and 300px on mobile
  // This is to ensure that the video is not cut off on mobile
  let height = "740px";
  if (typeof window !== "undefined" && window.innerWidth < 960) {
    height = "220px";
  }

  return (
    <header>
      <div className="container" style={{ padding: 0 }}>
        <div
          className="player__wrapper"
          style={{ height: height, position: "relative", margin: "auto" }}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=8CrL00Py0RU"
            className="player"
            width="100%"
            height="100%"
            playing={true}
            loop={true}
            playsinline={true}
            volume={0.5}
            muted={true}
          />
        </div>
        <div
          style={{
            position: "relative",
            bottom: height === "740px" ? "250px" : "0",
            left: "0",
            right: "0",
            textAlign: "center",
            padding: "20px",
            color: "white",
            background: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <br />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/dora-rs/dora"
            >
              Check our latest project dora-rs
            </Link>
          </div>
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
                  url="https://twitter.com/Thom_Wolf/status/1780241959036047604"
                  width={325}
                />
              </div>
              <div className="col col--4 padding--sm">
                <XEmbed
                  url="https://x.com/RemiCadene/status/1803711154218254754"
                  width={325}
                />
              </div>
              <div className="col col--4 padding--sm">
                <XEmbed
                  url="https://x.com/ax_pey/status/1787386223310393627"
                  width={325}
                />
              </div>
              <div className="col col--4 padding--sm">
                <XEmbed
                  url="https://x.com/HaixuanT/status/1786442032602349959"
                  width={325}
                />
              </div>
              <div className="col col--4 padding--sm">
                <XEmbed
                  url="https://twitter.com/PINTO03091/status/1777116918950043693"
                  width={325}
                />
              </div>
              <div className="col col--4 padding--sm">
                <XEmbed
                  url="https://twitter.com/blackanger/status/1612648192373587969"
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
