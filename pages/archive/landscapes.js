import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { PhotoGallery } from '../../src/components/PhotoGallery';

export default function Landscapes() {

  var photos = [
    {
      src: "/img/sovietportrait/ASP_02-earlyeveningmoscow.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_05-portraitwithfriendskiev.jpg",
      width: 800,
      height: 600
    }

  ]

  return (

    <Layout title="normangershman.com - archives - ladies of the palace">
      <h2>LANDSCAPES</h2>
      <div>

        <p>
        &lsquo; Who will view my pictures? Of course, there will be family and friends, but also people I may never know. It is the romance of my life, both the subjects of the photographs included here and my great love affair with photography that I invite you to celebrate with me in this book. &rsquo;</p>

        <p>Norman Gershman photographs with his heart. Of course, he knows the craft of photography. He makes his own prints with tender care, and he collects great photographs taken by others. but, when he goes to &lsquo;Mother Russia,&rsquo; something special happens inside of him, and here are some of his impressions of that emotional journey.</p>

        <p>The beauty and importance of photography is that the images form a person&apos;s permanent visual album of memory. No one knows the mystery of another&apos;s human heart. These reveal one man&quot;s secret: Gershman has exposed his own.&rsquo;</p>

        <p>Cornell Capa</p>
        <p>Director</p>
        <p>International Center of Photography/ICP</p>
        <p>New York 1986</p>

        <Link href="https://www.icp.org/browse/archive/constituents/cornell-capa?all/all/all/all/0">For more on Cornell Capa and ICP...</Link>

        <PhotoGallery photos={photos} />

     </div>
    </Layout>
  )
}
