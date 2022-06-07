import Link from 'next/link';
import Layout from '../../src/components/Layout';

import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { ResponsivePhotoGallery } from '../../src/components/ResponsivePhotoGallery';

export default function Besa() {

const images = [
    {
        "width": 1024,
        "height": 1281,
        "src": "../img/besa/BESA2b.jpg"
    },
    {
        "width": 1996,
        "height": 1379,
        "src": "../img/besa/BESA3b.jpg"
    },
    {
        "width": 1668,
        "height": 1108,
        "src": "../img/besa/BESA4b.jpg"
    },
    {
        "width": 1468,
        "height": 1021,
        "src": "../img/besa/BESA5b.jpg"
    },
    {
        "width": 1546,
        "height": 1128,
        "src": "../img/besa/BESA6b.jpg"
    },
    {
        "width": 1667,
        "height": 1438,
        "src": "../img/besa/BESA7b.jpg"
    },
    {
        "width": 1739,
        "height": 1432,
        "src": "../img/besa/BESA8b.jpg"
    },
    {
        "width": 1984,
        "height": 1487,
        "src": "../img/besa/BESA9b.jpg"
    },
    {
            "width": 1527,
            "height": 1949,
            "src": "../img/besa/BESA10b.jpg"
    },
    {
            "width": 1985,
            "height": 1462,
            "src": "../img/besa/BESA11b.jpg"
    },
    {
            "width": 1983,
            "height": 1467,
            "src": "../img/besa/BESA12b.jpg"
    },
    {
            "width": 1524,
            "height": 1902,
            "src": "../img/besa/BESA13b.jpg"
    },
    {
            "width": 1976,
            "height": 1482,
            "src": "../img/besa/BESA14b.jpg"
    },
    {
            "width": 1930,
            "height": 1525,
            "src": "../img/besa/BESA15b.jpg"
    },
    {
            "width": 1752,
            "height": 1575,
            "src": "../img/besa/BESA16b.jpg"
    },
    {
            "width": 1900,
            "height": 1524,
            "src": "../img/besa/BESA17b.jpg"
    },
    {
            "width": 1785,
            "height": 1589,
            "src": "../img/besa/BESA18b.jpg"
    },
    {
            "width": 2001,
            "height": 1486,
            "src": "../img/besa/BESA19b.jpg"
    },
    {
            "width": 1123,
            "height": 1370,
            "src": "../img/besa/BESA1b.jpg"
    },
    {
            "width": 1556,
            "height": 1608,
            "src": "../img/besa/BESA20b.jpg"
    },
    {
            "width": 1638,
            "height": 1553,
            "src": "../img/besa/BESA21b.jpg"
    },
    {
            "width": 1913,
            "height": 1452,
            "src": "../img/besa/BESA22b.jpg"
    },
    {
            "width": 1999,
            "height": 1531,
            "src": "../img/besa/BESA23b.jpg"
    },
    {
            "width": 2002,
            "height": 1471,
            "src": "../img/besa/BESA24b.jpg"
    },
    {
            "width": 1466,
            "height": 1993,
            "src": "../img/besa/BESA25b.jpg"
    },
    {
            "width": 1991,
            "height": 1483,
            "src": "../img/besa/BESA26b.jpg"
    },
    {
            "width": 1915,
            "height": 1528,
            "src": "../img/besa/BESA27b.jpg"
    }
]

  return (

    <Layout title="normangershman.com - archives - natural world">
      <h2>BESA (LIMITED AVAILAIBLITY)</h2>
      <div>

        { /* <PhotoGallery photos={photos} /> */ }

        <ResponsivePhotoGallery photos={images}/>

     </div>
    </Layout>
  )
}
