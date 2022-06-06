
import PhotoAlbum from "react-photo-album";
import styled from 'styled-components';

const GalleryContainer = styled.div`

`;




export const PhotoGallery = ({ photos }) => {
  return (
    <GalleryContainer>
      <PhotoAlbum layout="rows" photos={photos} />
    </GalleryContainer>
  )
}
