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
  let url = "https://www.youtube.com/watch?v=8CrL00Py0RU";
  if (typeof window !== "undefined" && window.innerWidth < 960) {
    height = "740px";
    url = "https://youtube.com/shorts/OsFjvhdEaJs";
  }

  return (
    <header>
      <div className="container" style={{ padding: 0 }}>
        <div
          className="player__wrapper"
          style={{ height: height, position: "relative", margin: "auto" }}
        >
          <ReactPlayer
            url={url}
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
            bottom: height === "740px" ? "20px" : "200px",
            left: "0",
            right: "0",
            textAlign: "center",
            padding: "20px",
            color: "black",
            background: "rgba(255, 255, 255, 0.95)",
          }}
        >
          <h1 className="hero__title">{siteConfig.title}</h1>
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

const desktoplist = [
  {
    url: "https://twitter.com/Thom_Wolf/status/1780241959036047604",
  },
  {
    url: "https://x.com/RemiCadene/status/1799000991876178038",
  },
  {
    url: "https://x.com/ax_pey/status/1787386223310393627",
  },
  {
    url: "https://x.com/HaixuanT/status/1786442032602349959",
  },
  {
    url: "https://x.com/LFAIDataFdn/status/1803703036432273705",
  },
  {
    url: "https://twitter.com/blackanger/status/1612648192373587969",
  },
];

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
              {desktoplist.map((props, idx) => (
                <div className="col col--4 padding--xs">
                  <XEmbed url={props.url} width={325} />
                </div>
              ))}
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
