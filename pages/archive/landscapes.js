import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { PhotoGallery } from '../../src/components/PhotoGallery';

export default function Landscapes() {

  var photos = [
    {
      src: "/img/landscapes/landscape1b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/landscapes/landscape2b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/landscapes/landscape3b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/landscapes/landscape4b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/landscapes/landscape5b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/landscapes/landscape6b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/landscapes/landscape7b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/landscapes/landscape8b.jpg",
      width: 800,
      height: 600
    }

  ]

  return (

    <Layout title="normangershman.com - landscapes">
      <h2>LANDSCAPES</h2>
      <div>
        <PhotoGallery photos={photos} />
     </div>
    </Layout>
  )
}
