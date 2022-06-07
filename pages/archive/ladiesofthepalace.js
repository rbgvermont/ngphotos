import Layout from '../../src/components/Layout';
import { ResponsivePhotoGallery } from '../../src/components/ResponsivePhotoGallery';

export default function Ladiesofthepalace() {

  const images = [
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-01.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-02.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-03.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-04.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-05.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-06.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-07.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-08.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-09.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-10.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-11.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-12.jpg"
    },
    {
            "width": 2400,
            "height": 1600,
            "src": "../img/ladiesofthepalace/LOP-13.jpg"
    }
]

  return (

    <Layout title="normangershman.com - archives - ladies of the palace">
      <h2>Ladies of the Palace</h2>
      <div>
<p>
&lsquo;The Palace in Coral Gables has seen many people come and go. In his time there,  Norman Gershman decided to take on the task of capturing the essence of the marvelous inhabitants of The Palace. He further pushed his portraiture to evoke the personality and charm of the Ladies of the Palace. Meet women who have experienced life as artists, champion athletes, rockettes and flamenco dancers, dear friends and familiar faces.&rsquo;
</p>
<p>Anthony Diaz, assistant</p>
  <ResponsivePhotoGallery photos={images}/>

<p>
&lsquo;Ladies of the Palace&rsquo; is Norman Gershman&apos;s last series of work created at The Palace in Coral Gables in 2018. These photos are a tribute to ageless beauty that is as much of the spirit as it is of the flesh reflective of living to the fullest. This is but a sampling of the series.</p>

<p>These photos will be available soon as an exhibit or as prints to purchase. Please send an inquiry of interest to the archive.</p>
<p>And, should you know the names of these grand belles, please do let us know. Thank you.</p>



      </div>
    </Layout>
  )
}
