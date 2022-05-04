import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { PhotoGallery } from '../../src/components/PhotoGallery';

export default function Asovietportrait() {

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
    },
    {
      src: "/img/sovietportrait/ASP_11-paraderehearsalLENINGRAD.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_13-monumenttoleninnovosibisk.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_14-artist,novodevichiimonasterymoscow.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_15-vietnamesestudiesscholarmoscow.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_16-artistandhealertbilisi.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_17-intouristdriverleningrad.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_18-pedestrianleningrad.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_20-studenthonorguardirkutsk.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_23-museumgatekeepersamarkand.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_24-worldwarIIveteranodessa.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_25-maninparklvov.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_26-twowomenkishinev.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_28-chickenvendorstbilisi.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_29-awaitingprayercallsamarkand.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_30-studenttheatregroupkishinev.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_31-artistswifetbilisi.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_32-synagogueeldersamarkand.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_33-townsquarelvov.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_34-streetintheoldquarterlvov.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_36-motherandsonmoscow.jpg",
      width: 800,
      height: 600
    },
    {
      src: "/img/sovietportrait/ASP_38-self-portraitkishinev.jpg",
      width: 800,
      height: 600
    },

  ]

  return (

    <Layout title="normangershman.com - archives - ladies of the palace">
      <h2>A SOVIET PORTRAIT</h2>
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
