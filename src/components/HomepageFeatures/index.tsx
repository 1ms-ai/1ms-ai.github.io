import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: String;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Open Source",
    Svg: '📖',
    description: (
      <>
      Believing in the existential necessity of openness.
      </>
    ),
  },
  {
    title: 'Transcending',
    Svg: '🔥',
    description: (
      <>
      Believing in the capability of anyone to build great technology.
      </>
    ),
  },
  {
    title: 'Artificial Intelligence (AI)',
    Svg: '🤖',
    description: (
      <>
        Believing in AI to change the world.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center text--lg">
        <Heading as="h3">{Svg}</Heading>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
