import  Layout from '../src/components/Layout';
import styled from 'styled-components';

let FormWrapper = styled.div`
display: flex;
`

let ContactInfo = styled.div`
max-width: 500px;
`

export default function Contact() {
  return (

    <Layout title="normangershman.com - contact">
    <h1>Contact</h1>

    <FormWrapper>
    <ContactInfo>
    <p>The Norman Gershman Photographic Archive was established in the summer of 2021 and is housed in Montpelier, Vermont; The Archive contains all of the works of Norman Gershman. While still in its formative stages as the Archive is organized, printing of newly rediscovered work is already underway.</p>
    <p>PRE-ORDERS will soon be available and each month&apos;s more prints will be added to the available list as they are properly evaluated and prepared.</p>
    <p>Should you be interested in any particular image you see in the Archives, please do let us know. We look forward to hearing from you.</p>

    <p>Eric Gershman, Trustee and Director eric@normangershman.com</p>

    <p>Martine Bisagni, Archivist and Curator mia@normangershman.com</p>
    </ContactInfo>
    <div>
      <p>Thank you for contacting us we will get back to you soon</p>
    </div>

    <form name="contact-submitted" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    </FormWrapper>
    </Layout>
  )
}
