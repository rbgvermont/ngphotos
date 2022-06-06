import Link from 'next/link';
import Image from 'next/image'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Layout from '../../src/components/Layout';
import styled from 'styled-components';

import { PhotoGallery } from '../../src/components/PhotoGallery';

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

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

        <Gallery>
          <ResponsiveMasonry
                  columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
          <Masonry columnsCount={3}>

            { images.map( (image, key) => {
              return <Item
                original={image.src}
                thumbnail={image.src}
                width={image.width}
                height={image.height}
                key={key}
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={image.src} width={250}  />
                )}
              </Item>
            })}

            </Masonry>
          </ResponsiveMasonry>

        </Gallery>

     </div>
    </Layout>
  )
}
