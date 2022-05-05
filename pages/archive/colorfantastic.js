import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { PhotoGallery } from '../../src/components/PhotoGallery';

export default function Colorfantastic() {

  var photos = [
    {
      src: "/img/colorfantastic/color1b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/colorfantastic/color2b2.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/colorfantastic/color3b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/colorfantastic/color4b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/colorfantastic/color5b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/colorfantastic/color6b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/colorfantastic/color7b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/colorfantastic/color8b.jpg",
      width: 800,
      height: 600
    }

  ]

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>COLOR FANTASTIC</h2>
      <div>

        <PhotoGallery photos={photos} />

     </div>
    </Layout>
  )
}
