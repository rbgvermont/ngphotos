import Link from 'next/link';
import Image from 'next/image'
import Layout from '../../src/components/Layout';

import { PhotoGallery } from '../../src/components/PhotoGallery';

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'



export default function Naturalworld() {

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>NATURAL WORLD</h2>
      <div>

        <Gallery>
          <Item
            original="/img/naturalworld/nature1b.jpg"
            thumbnail="/img/naturalworld/nature1b.jpg"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature1b.jpg" width={300}  />
            )}
          </Item>

          <Item
            original="/img/naturalworld/nature2b.jpg"
            thumbnail="/img/naturalworld/nature2b.jpg"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature2b.jpg" width={300}  />
            )}
          </Item>

          <Item
            original="/img/naturalworld/nature3b.jpg"
            thumbnail="/img/naturalworld/nature3b.jpg"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature3b.jpg" width={300}  />
            )}
          </Item>

          <Item
            original="/img/naturalworld/nature4b.jpg"
            thumbnail="/img/naturalworld/nature4b.jpg"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature4b.jpg" width={300}  />
            )}
          </Item>

          <Item
            original="/img/naturalworld/nature5b.jpg"
            thumbnail="/img/naturalworld/nature5b.jpg"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature5b.jpg" width={300}  />
            )}
          </Item>


          <Item
            original="/img/naturalworld/nature5b.jpg"
            thumbnail="/img/naturalworld/nature5b.jpg"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="/img/naturalworld/nature5b.jpg" width={300}  />
            )}
          </Item>
        </Gallery>

     </div>
    </Layout>
  )
}
