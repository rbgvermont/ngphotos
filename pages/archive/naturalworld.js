
import { ResponsivePhotoGallery } from '../../src/components/ResponsivePhotoGallery';
import Layout from '../../src/components/Layout';
import styled from 'styled-components';

import 'photoswipe/dist/photoswipe.css'

const GalleryWrapper = styled.div`

`;

export default function Naturalworld() {

  const images = [
    {
            "width": 1580,
            "height": 1058,
            "src": "../img/naturalworld/nature1b.jpg"
    },
    {
            "width": 1511,
            "height": 1178,
            "src": "../img/naturalworld/nature2b.jpg"
    },
    {
            "width": 1031,
            "height": 1037,
            "src": "../img/naturalworld/nature3b.jpg"
    },
    {
            "width": 1356,
            "height": 1429,
            "src": "../img/naturalworld/nature4b.jpg"
    },
    {
            "width": 1946,
            "height": 1473,
            "src": "../img/naturalworld/nature5b.jpg"
    }
  ];

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>NATURAL WORLD</h2>
      <div>

      <ResponsivePhotoGallery photos={images}/>

     </div>
    </Layout>
  )
}
