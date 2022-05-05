import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { PhotoGallery } from '../../src/components/PhotoGallery';

export default function Naturalworld() {

  var photos = [
    {
      src: "/img/naturalworld/nature1b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/naturalworld/nature2b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/naturalworld/nature3b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/naturalworld/nature4b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/naturalworld/nature5b.jpg",
      width: 800,
      height: 600
    }
  ]

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>NATURAL WORLD</h2>
      <div>
        <PhotoGallery photos={photos} />
     </div>
    </Layout>
  )
}
