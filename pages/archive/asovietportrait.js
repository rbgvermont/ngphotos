import Link from 'next/link';
import Layout from '../../src/components/Layout';
import { ResponsivePhotoGallery } from '../../src/components/ResponsivePhotoGallery';

export default function Asovietportrait() {

  const images =
  [
    {
            "width": 5193,
            "height": 3632,
            "src": "../img/sovietportrait/ASP_02-earlyeveningmoscow.jpg"
    },
    {
            "width": 3160,
            "height": 2848,
            "src": "../img/sovietportrait/ASP_05-portraitwithfriendskiev.jpg"
    },
    {
            "width": 4424,
            "height": 5576,
            "src": "../img/sovietportrait/ASP_10-grandmotherandgrandsonMOSCOW.jpg"
    },
    {
            "width": 5400,
            "height": 4096,
            "src": "../img/sovietportrait/ASP_11-paraderehearsalLENINGRAD.jpg"
    },
    {
            "width": 4963,
            "height": 3988,
            "src": "../img/sovietportrait/ASP_13-monumenttoleninnovosibisk.jpg"
    },
    {
            "width": 4768,
            "height": 6160,
            "src": "../img/sovietportrait/ASP_14-artist,novodevichiimonasterymoscow.jpg"
    },
    {
            "width": 3968,
            "height": 5336,
            "src": "../img/sovietportrait/ASP_15-vietnamesestudiesscholarmoscow.jpg"
    },
    {
            "width": 4602,
            "height": 5827,
            "src": "../img/sovietportrait/ASP_16-artistandhealertbilisi.jpg"
    },
    {
            "width": 4784,
            "height": 5944,
            "src": "../img/sovietportrait/ASP_17-intouristdriverleningrad.jpg"
    },
    {
            "width": 4576,
            "height": 5792,
            "src": "../img/sovietportrait/ASP_18-pedestrianleningrad.jpg"
    },
    {
            "width": 5578,
            "height": 4265,
            "src": "../img/sovietportrait/ASP_19-pioneerpalacemoscow.jpg"
    },
    {
            "width": 5480,
            "height": 3752,
            "src": "../img/sovietportrait/ASP_20-studenthonorguardirkutsk.jpg"
    },
    {
            "width": 5170,
            "height": 3849,
            "src": "../img/sovietportrait/ASP_23-museumgatekeepersamarkand.jpg"
    },
    {
            "width": 4344,
            "height": 5488,
            "src": "../img/sovietportrait/ASP_24-worldwarIIveteranodessa.jpg"
    },
    {
            "width": 3288,
            "height": 5512,
            "src": "../img/sovietportrait/ASP_25-maninparklvov.jpg"
    },
    {
            "width": 3957,
            "height": 6088,
            "src": "../img/sovietportrait/ASP_26-twowomenkishinev.jpg"
    },
    {
            "width": 4704,
            "height": 4736,
            "src": "../img/sovietportrait/ASP_28-chickenvendorstbilisi.jpg"
    },
    {
            "width": 4841,
            "height": 5041,
            "src": "../img/sovietportrait/ASP_29-awaitingprayercallsamarkand.jpg"
    },
    {
            "width": 5208,
            "height": 4224,
            "src": "../img/sovietportrait/ASP_30-studenttheatregroupkishinev.jpg"
    },
    {
            "width": 3464,
            "height": 4624,
            "src": "../img/sovietportrait/ASP_31-artistswifetbilisi.jpg"
    },
    {
            "width": 4360,
            "height": 5496,
            "src": "../img/sovietportrait/ASP_32-synagogueeldersamarkand.jpg"
    },
    {
            "width": 6073,
            "height": 3968,
            "src": "../img/sovietportrait/ASP_33-townsquarelvov.jpg"
    },
    {
            "width": 4496,
            "height": 6240,
            "src": "../img/sovietportrait/ASP_34-streetintheoldquarterlvov.jpg"
    },
    {
            "width": 4360,
            "height": 5880,
            "src": "../img/sovietportrait/ASP_36-motherandsonmoscow.jpg"
    },
    {
            "width": 3128,
            "height": 2552,
            "src": "../img/sovietportrait/ASP_38-self-portraitkishinev.jpg"
    }
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

        <ResponsivePhotoGallery photos={images}/>

     </div>
    </Layout>
  )
}
