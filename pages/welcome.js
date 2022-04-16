import styled from 'styled-components';
import Image from 'next/image';

import  Layout from '../src/components/Layout';

const WelcomeWrapper = styled.div`
  display: flex;

`

export default function Welcome() {
  return (

    <Layout title="normangershman.com - welcome">

      <h1>A WELCOME FROM THE GERSHMAN FAMILY</h1>
      <WelcomeWrapper>
        <div>
        <p>Our father loved people.</p>

        <p>From 1971 onwards Norman Gershman was always in pursuit of what he called EYE CONTACT, a moment of deep connection between two people.  His camera, often a favorite Leica, was permanently attached to his body, ever at the ready. Around the world and in his own neighborhood whether photographing his family and friends or strangers, he considered encountering another soul a privilege, a gift the person gave to him that he, in turn, offered to others so that they, too, could connect.</p>
        <p>
        The BESA Project, which continues to tour the world, was deeply meaningful for him. It affirmed what he believed we could be – and should be – people more concerned for others than themselves making choices of the heart over choices of safety. He considered letting others know about the Albanian's actions in a time of crisis, which saved many lives, an important mission and wanted us, his children, to carry this message of possibility and hope to the public.
        </p>
        <p>
        His passion for interfaith and intercultural understanding will continue to be shared under the stewardship of this Trust and Archive through the mediums of books, films and, of course, photographs. His photographs can be found worldwide in places such as the International Center of Photography/ICP and Yad Vashem.
        </p>
        <p>
        Since his peaceful passing in 2019 we have assembled a world class team so that, as per his wishes, his work continues to be shared. This on-line archive will grow in the coming weeks.  Eventually, all of his work will be available to see if not to print. The archive is based in Vermont, a place full of joyous family memories.
        </p>

        <p>Photography was his gift to us and to the world. We are very glad to share his legacy with you.</p>

        <p>Thank you for visiting. We welcome you to celebrate our father's work with us.</p>

        <p>Leslie, Eric and Roger</p>

        <p>November 27, 2021</p>
        </div>
        <div>
          <Image
          alt="Gershman Family"
          src="/img/rightsideski.png"
          sizes="100%"
          width="800"
          height="800"
          />
        </div>

      </WelcomeWrapper>
    </Layout>
  )
}
