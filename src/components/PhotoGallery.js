
import PhotoAlbum from "react-photo-album";
import styled from 'styled-components';

const GalleryContainer = styled.div`

`;

const SocialContainer = styled.div`

`;

  // var photos = [
  //   {
  //     src: "/img/ladiesofthepalace/LOP-01.jpg",
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: "/img/ladiesofthepalace/LOP-02.jpg",
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: "/img/ladiesofthepalace/LOP-03.jpg",
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: "/img/ladiesofthepalace/LOP-04.jpg",
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: "/img/ladiesofthepalace/LOP-05.jpg",
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: "/img/ladiesofthepalace/LOP-06.jpg",
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: "/img/ladiesofthepalace/LOP-07.jpg",
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: "/img/ladiesofthepalace/LOP-08.jpg",
  //     width: 800,
  //     height: 600
  //   },
  //   {
  //     src: "/img/ladiesofthepalace/LOP-09.jpg",
  //     width: 800,
  //     height: 600
  //   },




  // ]


export const PhotoGallery = ({ photos }) => {
  return (
    <GalleryContainer>
      <PhotoAlbum layout="rows" photos={photos} />
    </GalleryContainer>
  )
}
