import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { PhotoGallery } from '../../src/components/PhotoGallery';

export default function Besa() {

  var photos = [
    {
      src: "/img/besa/BESA1b.jpg",
      width: 600,
      height: 800
    },
    {
      src: "/img/besa/BESA2b.jpg",
      width: 600,
      height: 800
    },
    {
      src: "/img/besa/BESA3b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA4b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA5b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA6b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA7b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA8b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA9b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA10b.jpg",
      width: 600,
      height: 800
    },
    {
      src: "/img/besa/BESA11b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA12b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA13b.jpg",
      width: 600,
      height: 800
    },
    {
      src: "/img/besa/BESA14b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA15b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA16b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA17b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA18b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA19b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA20b.jpg",
      width: 600,
      height: 800
    },
    {
      src: "/img/besa/BESA21b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA22b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA23b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA24b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA25b.jpg",
      width: 600,
      height: 800
    },
    {
      src: "/img/besa/BESA26b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/besa/BESA27b.jpg",
      width: 800,
      height: 600
    }
  ]

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>BESA (LIMITED AVAILAIBLITY)</h2>
      <div>

        <PhotoGallery photos={photos} />

     </div>
    </Layout>
  )
}
