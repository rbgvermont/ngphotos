import Layout from '../../src/components/Layout';
import { PhotoGallery } from '../../src/components/PhotoGallery';

export default function Photographsandthoughts() {

  var photos = [
    {
      src: "/img/photosthoughts/PTII-01.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-02.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-03.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-04.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-05.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-06.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-07.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-09.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-10.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-11.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/photosthoughts/PTII-12.jpg",
      width: 800,
      height: 600
    }
  ]

  return (

    <Layout title="normangershman.com - archives - ladies of the palace">
      <h2>PHOTOGRAPHS AND THOUGHTS VOLUME II</h2>
      <div>


        <p>
        &quot;Who will view my pictures? Of course, there will be family and friends, but also people I may never know. It is the romance of my life, both the subjects of the photographs included here and my great love affair with photography that I invite you to celebrate with me in this book.&quot;</p>

        <p>Norman H. Gershman</p>
        <p>Photographs &amp; Thoughts II</p>
        <PhotoGallery photos={photos} />

     </div>
    </Layout>
  )
}
