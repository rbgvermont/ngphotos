import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { PhotoGallery } from '../../src/components/PhotoGallery';

export default function Theycallitlove() {

  var photos = [
    {
      src: "/img/theycallitlove/family1b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/theycallitlove/family2b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/theycallitlove/family3b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/theycallitlove/family4b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/theycallitlove/family5b.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/theycallitlove/family6b.jpg",
      width: 800,
      height: 600
    },

  ]

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>THEY CALL IT LOVE</h2>
      <div>
        <PhotoGallery photos={photos} />

     </div>
    </Layout>
  )
}
