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

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>NATURAL WORLD</h2>
      <div>

        <Gallery>
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
        <Masonry columnsCount={3}>
          <Item
            original="/img/naturalworld/nature1b.jpg"
            thumbnail="/img/naturalworld/nature1b.jpg"
            width="1580"
            height="1058"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature1b.jpg" width={250} />
            )}
          </Item>

          <Item
            original="/img/naturalworld/nature2b.jpg"
            thumbnail="/img/naturalworld/nature2b.jpg"
            width="1511"
            height="1178"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature2b.jpg" width={250}  />
            )}
          </Item>

          <Item
            original="/img/naturalworld/nature3b.jpg"
            thumbnail="/img/naturalworld/nature3b.jpg"
            width="1031"
            height="1037"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature3b.jpg" width={250}  />
            )}
          </Item>

          <Item
            original="/img/naturalworld/nature4b.jpg"
            thumbnail="/img/naturalworld/nature4b.jpg"
            width="1356"
            height="1429"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature4b.jpg" width={250}  />
            )}
          </Item>

          <Item
            original="/img/naturalworld/nature5b.jpg"
            thumbnail="/img/naturalworld/nature5b.jpg"
            width="1946"
            height="1473"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature5b.jpg" width={250}  />
            )}
          </Item>
          </Masonry>
          </ResponsiveMasonry>

        </Gallery>

     </div>
    </Layout>
  )
}
