import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: string;
  location: string;
  duration: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "",
    Svg: "https://www.futurewei.com/images/futurewei-logo-swirl-200x57.png",
    location: "Santa Clara, California",
    duration: "2 years",
    description: (
      <>
        <h3>Helping Futurewei build moonshot innovation</h3>
        <div>
          <a href="https://github.com/dora-rs/dora">
            <img src="https://gh-card.dev/repos/dora-rs/dora.svg" />
          </a>
        </div>
      </>
    ),
  },
  {
    title: "Hugging Face",
    Svg: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    duration: "1 month",
    location: "Paris, France",
    description: (
      <>
        <h3>Helping Hugging Face build SOTA robotic ecosystem</h3>
        <div>
          <a href="https://github.com/dora-rs/dora-aloha">
            <img src="https://gh-card.dev/repos/dora-rs/dora-aloha.svg" />
          </a>
        </div>
      </>
    ),
  },
  {
    title: "",
    Svg: "https://upload.wikimedia.org/wikipedia/fr/8/86/Logo_CentraleSup%C3%A9lec.svg",
    duration: "1 year",
    location: "Saclay, France",
    description: (
      <>
        <h3>Enabling CentraleSupelec students build Self-Coding Robot</h3>
        <iframe
          width="290"
          height="157"
          src="https://www.youtube.com/embed/NvvTEP8Jak8?si=LRc4lKRWDT5MFFaa"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </>
    ),
  },
  {
    title: "",
    Svg: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Tsinghua_University_Logo.svg",
    duration: "6 month",
    location: "Beijing, China",
    description: (
      <>
        <h3>Created a course on Software Engineering for robotics</h3>
        <div>
          <a href="https://github.com/dora-rs/dora-courses">
            <img src="https://gh-card.dev/repos/dora-rs/dora-courses.svg" />
          </a>
        </div>
      </>
    ),
  },
  {
    title: "",
    Svg: "",
    duration: "6 month",
    location: "",
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="mailto:tao.xavier@1ms.ai"
          >
            Open invitation to join us!
          </Link>
        </div>
      </>
    ),
  },
];

function Feature({ title, Svg, location, description }: FeatureItem) {
  return (
    <div className={clsx("col col--10")}>
      <div className={clsx("row margin-right--lg margin-bottom--xl")}>
        <div className="text--center text--lg  margin-right--lg col col--4 ">
          <div>
            <img
              src={Svg}
              className="margin--xs"
              style={{ maxHeight: "8rem" }}
              alt=""
            />
          </div>
          <span>{location}</span>
        </div>
        <div className=" margin-right--lg margin-top--lg col col--6 ">
          {description}
        </div>
      </div>
    </div>
  );
}

export default function HomepageUsers(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
