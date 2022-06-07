
import styled from 'styled-components';

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const GalleryContainer = styled.div`
Item {
  border: 1px solid red;
  margin-bottom: 100px;
}
`;




export const ResponsivePhotoGallery = ({ photos }) => {
  return (
    <Gallery>
    <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 4}}>
    <Masonry columnsCount={3} gutter={30}>

      { photos.map( (image, key) => {
        return <Item
          original={image.src}
          thumbnail={image.src}
          width={image.width}
          height={image.height}
          key={key}
        >
          {({ ref, open }) => (
            <img ref={ref} onClick={open} src={image.src} width={200}  />
          )}
        </Item>
      })}

      </Masonry>
    </ResponsiveMasonry>

  </Gallery>
  )
}
