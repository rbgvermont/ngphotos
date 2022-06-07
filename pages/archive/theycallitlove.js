import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { PhotoGallery } from '../../src/components/PhotoGallery';
import { ResponsivePhotoGallery } from '../../src/components/ResponsivePhotoGallery';

export default function Theycallitlove() {

const images = [
  {
          "width": 924,
          "height": 1305,
          "src": "../img/theycallitlove/family1b.jpg"
  },
  {
          "width": 1265,
          "height": 1528,
          "src": "../img/theycallitlove/family2b.jpg"
  },
  {
          "width": 2370,
          "height": 1583,
          "src": "../img/theycallitlove/family3b.jpg"
  },
  {
          "width": 1066,
          "height": 1048,
          "src": "../img/theycallitlove/family4b.jpg"
  },
  {
          "width": 1565,
          "height": 1046,
          "src": "../img/theycallitlove/family5b.jpg"
  },
  {
          "width": 1667,
          "height": 1427,
          "src": "../img/theycallitlove/family6b.jpg"
  }
]

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>THEY CALL IT LOVE</h2>
      <div>
        <ResponsivePhotoGallery photos={images}/>

     </div>
    </Layout>
  )
}
