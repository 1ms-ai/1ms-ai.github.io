import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export type FeatureItem = {
  title: string;
  Svg: string;
  github: string;
  linkedin: string;
  description: JSX.Element;
};

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center text--lg">
        <img src={Svg} width="100%" style={{ maxHeight: "400px" }}></img>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Team({ members }): JSX.Element {
  return (
    <div>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {members.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
