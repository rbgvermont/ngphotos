import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { ResponsivePhotoGallery } from '../../src/components/ResponsivePhotoGallery';

export default function Landscapes() {

  const images = [
    {
            "width": 1479,
            "height": 863,
            "src": "../img/landscapes/landscape1b.jpg"
    },
    {
            "width": 1032,
            "height": 995,
            "src": "../img/landscapes/landscape2b.jpg"
    },
    {
            "width": 1384,
            "height": 1381,
            "src": "../img/landscapes/landscape3b.jpg"
    },
    {
            "width": 1831,
            "height": 1322,
            "src": "../img/landscapes/landscape4b.jpg"
    },
    {
            "width": 1700,
            "height": 1132,
            "src": "../img/landscapes/landscape5b.jpg"
    },
    {
            "width": 1830,
            "height": 1323,
            "src": "../img/landscapes/landscape6b.jpg"
    },
    {
            "width": 1835,
            "height": 1249,
            "src": "../img/landscapes/landscape7b.jpg"
    },
    {
            "width": 2124,
            "height": 1061,
            "src": "../img/landscapes/landscape8b.jpg"
    }
]

  return (

    <Layout title="normangershman.com - landscapes">
      <h2>LANDSCAPES</h2>
      <div>
        <ResponsivePhotoGallery photos={images}/>
     </div>
    </Layout>
  )
}
