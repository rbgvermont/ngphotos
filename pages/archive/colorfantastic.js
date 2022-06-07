import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { ResponsivePhotoGallery } from '../../src/components/ResponsivePhotoGallery';

export default function Colorfantastic() {

  const images = [
    {
            "width": 1192,
            "height": 960,
            "src": "../img/colorfantastic/color1b.jpg"
    },
    {
            "width": 1330,
            "height": 1053,
            "src": "../img/colorfantastic/color2b2.jpg"
    },
    {
            "width": 1153,
            "height": 911,
            "src": "../img/colorfantastic/color3b.jpg"
    },
    {
            "width": 1123,
            "height": 1331,
            "src": "../img/colorfantastic/color4b.jpg"
    },
    {
            "width": 1330,
            "height": 1011,
            "src": "../img/colorfantastic/color5b.jpg"
    },
    {
            "width": 1329,
            "height": 1045,
            "src": "../img/colorfantastic/color6b.jpg"
    },
    {
            "width": 1333,
            "height": 1025,
            "src": "../img/colorfantastic/color7b.jpg"
    },
    {
            "width": 1329,
            "height": 1013,
            "src": "../img/colorfantastic/color8b.jpg"
    }
]

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>COLOR FANTASTIC</h2>
      <div>

      <ResponsivePhotoGallery photos={images}/>

     </div>
    </Layout>
  )
}
