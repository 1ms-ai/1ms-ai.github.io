import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import HomepageUsers from "../components/HomepageUsers";
import { XEmbed } from "react-social-media-embed";
import Team, { FeatureItem } from "../components/Team";
import ReactPlayer from "react-player";

const Members: FeatureItem[] = [
  {
    title: "Haixuan Xavier Tao",
    Svg: "img/haixuantao.png",
    github: "https://github.com/haixuantao",
    linkedin: "https://www.linkedin.com/in/haixuan-xavier-tao-7460b1102/",
    description: (
      <>
        <h5>Founder @ 1ms.ai</h5>
        <p>
          Currently building dora, its application and a community of users from
          university and labs.
        </p>
      </>
    ),
  },
  {
    title: "Enzo Le Van",
    Svg: "img/enzo.jpeg",
    github: "",
    linkedin: "",
    description: (
      <>
        <h5>Maintainer of dora @ 1ms.ai</h5>
        <p>
          Student at CentraleSupélec, University of Paris-Saclay, and helping on
          developping the ecosystem of dora.
        </p>
      </>
    ),
  },
];

const Sponsors: FeatureItem[] = [
  {
    title: "Thomas Wolf",
    Svg: "img/thom.png",
    github: "https://github.com/thomwolf/",
    linkedin: "https://www.linkedin.com/in/haixuan-xavier-tao-7460b1102/",
    description: (
      <>
        <h5>Co-founder and Chief Science Officer (CSO) of Hugging Face</h5>
        <p>
          he has been at the inception of the open-source, educational and
          research efforts.
        </p>
      </>
    ),
  },
  {
    title: "Remi Cadene",
    Svg: "img/cadene.png",
    github: "",
    linkedin: "",
    description: (
      <>
        <h5>Principal Research Scientist</h5>
        <p>Build cute robots at Hugging Face</p>
      </>
    ),
  },
  {
    title: "Matthieu Lapeyre",
    github: "",
    linkedin: "",
    Svg: "img/matthieu.jpeg",
    description: (
      <>
        <h5>Co-founder @ Pollen Robotics</h5>
        <p>
          Pollen Robotics creates open source interactive robots since 2016.
        </p>
      </>
    ),
  },
  {
    title: "Yue Chen",
    github: "",
    linkedin: "",
    Svg: "img/yue.jpeg",
    description: (
      <h5>SVP of the Technology Strategy at Futurewei Technologies</h5>
    ),
  },
  {
    title: "Maria Makarov",
    github: "",
    linkedin: "",
    Svg: "img/maria.jpeg",
    description: <h5> Associate Professor at CentraleSupélec </h5>,
  },
  {
    title: "Giorgio Valmorbida",
    github: "",
    linkedin: "",
    Svg: "img/gorgio.jpeg",
    description: <h5> Associate Professor at CentraleSupélec </h5>,
  },
  {
    title: "Zhang, Shanghang",
    github: "",
    linkedin: "",
    Svg: "img/zhang.jpeg",
    description: <h5> Assistant Professor at Peking University </h5>,
  },
  {
    title: "Mengdi Zhao",
    github: "",
    linkedin: "",
    Svg: "img/Mengdi-Zhao.jpg",
    description: <h5> PostDoc Researcher @ BAAI and Peking University </h5>,
  },
];

const CSTeam: FeatureItem[] = [
  {
    title: "Matéo Champaney",
    Svg: "img/mateo.jpeg",
    github: "https://github.com/thomwolf/",
    linkedin: "https://www.linkedin.com/in/haixuan-xavier-tao-7460b1102/",
    description: (
      <>
        <h5>Student @ CentraleSupélec | Trésorier à Junior CentraleSupélec</h5>
      </>
    ),
  },
  {
    title: "Alexis Maes",
    Svg: "img/alexis.jpeg",
    github: "",
    linkedin: "",
    description: (
      <>
        <h5>Student @ CentraleSupélec</h5>
      </>
    ),
  },
  {
    title: "Mohamed Cheikh rouhou",
    github: "",
    linkedin: "",
    Svg: "img/momo.jpeg",
    description: (
      <>
        <h5>Student @ CentraleSupélec</h5>
      </>
    ),
  },
  {
    title: "Marin Lafaury",
    github: "",
    linkedin: "",
    Svg: "img/marin.jpeg",
    description: <h5>Student @ CentraleSupélec</h5>,
  },
  {
    title: "Matthias Orbach",
    github: "",
    linkedin: "",
    Svg: "img/matthias.jpeg",
    description: <h5>Student @ CentraleSupélec</h5>,
  },
];

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
          <br />
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
            Core Team
          </Heading>
          <Heading as="h2" className=" text--center">
            We are a small team (2 people) of passionate AI robotics who believe
            that we can build robot, the way we always dreamt of.
          </Heading>
          <Team {...{ members: Members }} />
        </div>
        <div className="container">
          <Heading as="h1" className="hero__title text--center">
            CentraleSupelec Team
          </Heading>
          <Heading as="h2" className=" text--center">
            building the State of the Art French AI Robotic Stack
          </Heading>
          <Team {...{ members: CSTeam }} />
        </div>
        <div className="container">
          <Heading as="h1" className="hero__title text--center">
            Sponsor
          </Heading>
          <Heading as="h2" className=" text--center">
            Key Individuals supporting us
          </Heading>
          <Team {...{ members: Sponsors }} />
        </div>
      </main>
    </Layout>
  );
}
