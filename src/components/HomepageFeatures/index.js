import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Import komponen Font Awesome dan ikon spesifik yang dibutuhkan
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faNetworkWired, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const FeatureList = [
  {
    title: 'SOP & Tata Tertib',
    Icon: faClipboardCheck, // Mengganti properti Svg menjadi Icon
    description: (
      <>
        Panduan terpusat mengenai tata tertib, administrasi peminjaman inventaris, 
        dan prosedur resmi penggunaan ruangan laboratorium komputer.
      </>
    ),
  },
  {
    title: 'Infrastruktur & Troubleshooting',
    Icon: faNetworkWired,
    description: (
      <>
        Dokumentasi pemeliharaan perangkat keras (hardware), topologi jaringan, 
        dan solusi cepat untuk mendiagnosis serta menangani kendala teknis PC.
      </>
    ),
  },
  {
    title: 'Software & Modul Praktikum',
    Icon: faLaptopCode,
    description: (
      <>
        Langkah-langkah instalasi standar <i>environment</i> praktikum, manajemen 
        lisensi aplikasi, serta dokumentasi sistem yang berjalan di lab.
      </>
    ),
  },
];

function Feature({Icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Render FontAwesomeIcon menggantikan tag <Svg> */}
        <FontAwesomeIcon 
          icon={Icon} 
          size="4x" 
          
          style={{ color: 'var(--ifm-color-primary)', marginBottom: '1.5rem', marginTop: '1rem' }} 
        />
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