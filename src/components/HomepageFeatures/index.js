import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'SOP & Tata Tertib',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Panduan terpusat mengenai tata tertib, administrasi peminjaman inventaris, 
        dan prosedur resmi penggunaan ruangan laboratorium komputer.
      </>
    ),
  },
  {
    title: 'Infrastruktur & Troubleshooting',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Dokumentasi pemeliharaan perangkat keras (hardware), topologi jaringan, 
        dan solusi cepat untuk mendiagnosis serta menangani kendala teknis PC.
      </>
    ),
  },
  {
    title: 'Software & Modul Praktikum',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Langkah-langkah instalasi standar <i>environment</i> praktikum, manajemen 
        lisensi aplikasi, serta dokumentasi sistem yang berjalan di lab.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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