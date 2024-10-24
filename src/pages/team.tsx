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
    Svg: "https://github.com/haixuantao.png",
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
    Svg: "https://github.com/Hennzau.png",
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
    Svg: "https://thomwolf.io/images/thom_circle_larger.png",
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
    Svg: "https://github.com/cadene.png",
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
    Svg: "https://media.licdn.com/dms/image/v2/C4E03AQF7cnT0hLWV0A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1610095626563?e=1735171200&v=beta&t=2IEH_ZJLN6o54U-CRTe5XwS07ZB9yxuSXHnVnoMjQHI",
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
    Svg: "https://media.licdn.com/dms/image/v2/D5603AQHDXmN4tJmBiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700171149971?e=1735171200&v=beta&t=eZw0_qHTA3PaorhwCJml3QcidH2fUi1kjC8WOWgLaqo",
    description: (
      <h5>SVP of the Technology Strategy at Futurewei Technologies</h5>
    ),
  },
  {
    title: "Maria Makarov",
    github: "",
    linkedin: "",
    Svg: "https://media.licdn.com/dms/image/v2/D4E03AQHiaaMzyNK3RA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718623375913?e=1735171200&v=beta&t=joSHw8D5pvSHqY30B8eEqPYgnLg8qwTGfhLj7NEOUQo",
    description: <h5> Associate Professor at CentraleSupélec </h5>,
  },
  {
    title: "Giorgio Valmorbida",
    github: "",
    linkedin: "",
    Svg: "https://media.licdn.com/dms/image/v2/C5603AQGZTnc3kvN78A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517374292928?e=1735171200&v=beta&t=asQ_kQWMV6c7hvOIqOnt3bM1kk-VqEa-lOzGKTODtmU",
    description: <h5> Associate Professor at CentraleSupélec </h5>,
  },
  {
    title: "Zhang, Shanghang",
    github: "",
    linkedin: "",
    Svg: "https://media.licdn.com/dms/image/v2/C5603AQFF_PRNGni71A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517462592704?e=1735171200&v=beta&t=aVtwMe26p-Y8RIcTMBUIUGcHUc6cBWnIRbjUnMaINA4",
    description: <h5> Assistant Professor at Peking University </h5>,
  },
  {
    title: "Mengdi Zhao",
    github: "",
    linkedin: "",
    Svg: "https://i1.rgstatic.net/ii/profile.image/641945269452800-1530063087058_Q512/Mengdi-Zhao-2.jpg",
    description: <h5> PostDoc Researcher @ BAAI and Peking University </h5>,
  },
];

const CSTeam: FeatureItem[] = [
  {
    title: "Matéo Champaney",
    Svg: "https://media.licdn.com/dms/image/v2/D4E03AQFAjoRiyvgJOg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720184744810?e=1735171200&v=beta&t=qz4SPXSmx96_XpbMGIV6B4Vqjn1dQ4AR2yceDIxIbpY",
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
    Svg: "https://media.licdn.com/dms/image/v2/D4E03AQFCpOJLDrETig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701511383436?e=1735171200&v=beta&t=Bcfs0Vf78Q1zCLkVIZ5wHhfNH1W52uyPIm4RT9HlSyI",
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
    Svg: "https://media.licdn.com/dms/image/v2/D4D03AQHl3fih_k6NyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701207384960?e=1735171200&v=beta&t=sR5jqIlcxuZ3r8r5W7qU85yjmlPaGqWBZmlB1DfF9Po",
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
    Svg: "https://media.licdn.com/dms/image/v2/D4E03AQGW_jDpIdi_Ww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701086370468?e=1735171200&v=beta&t=iwnDsK59r0FmV-0lU5zlOjUysFaT1cQfDp9iNBZHvXI",
    description: <h5>Student @ CentraleSupélec</h5>,
  },
  {
    title: "Matthias Orbach",
    github: "",
    linkedin: "",
    Svg: "https://media.licdn.com/dms/image/v2/D4E03AQG-NpIL3kiY1g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712652291782?e=1735171200&v=beta&t=iIFLPAyiGGj9ar78auCcMeWEYnflbGu8v7ECqko3j88",
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
