import  Layout from '../src/components/Layout';
import styled from 'styled-components';

let MainWrapper = styled.div`
display: flex;
`

let ContactInfo = styled.div`
max-width: 440px;
`

let HiddenP = styled.div`
display: none;
`

let InputRow = styled.div`
width: 100%;
text-align: center;
padding: 10px;
vertical-align: middle;

p {

  text-align: left;
  padding: 10px;
}

input, textarea {
  width: 80%;
}

input {
  height: 50px;
}

button {
  width: 80%;
  height: 50px;
}
`

let FormWrapper = styled.div`
margin-left: 20px;

width: 100%
`

let TheForm = styled.form`
width: 100%;
`

export default function Contact() {
  return (

    <Layout title="normangershman.com - contact">


    <MainWrapper>
      <ContactInfo>
      <h1>Contact</h1>
      <p>The Norman Gershman Photographic Archive was established in the summer of 2021 and is housed in Montpelier, Vermont; The Archive contains all of the works of Norman Gershman. While still in its formative stages as the Archive is organized, printing of newly rediscovered work is already underway.</p>
      <p>PRE-ORDERS will soon be available and each month&apos;s more prints will be added to the available list as they are properly evaluated and prepared.</p>
      <p>Should you be interested in any particular image you see in the Archives, please do let us know. We look forward to hearing from you.</p>

      <p>Eric Gershman, Trustee and Director eric@normangershman.com</p>

      <p>Martine Bisagni, Archivist and Curator mia@normangershman.com</p>
      </ContactInfo>

      <FormWrapper>

        <TheForm
          encType="application/x-www-form-urlencoded"
          data-netlify="true"
          name="contact"
          method="POST"
          action="/contact-submitted"
          netlify-honeypot="bot-field"
        >
        <input type="hidden" name="form-name" value="contact" />
        <HiddenP>
          <label>
            Don&apos;t touch the hand mixed the mess: <input name="bot-field" id="bot-field" />
          </label>
          <div data-netlify-recaptcha="true"></div>
        </HiddenP>
          <InputRow>
            <p>
              <label htmlFor="Name">Name: </label>
            </p><input type="text" name="Name" id="Name" />
          </InputRow>
          <InputRow>
          <p>
            <label htmlFor="Email">Email: </label>

          </p><input type="email" name="Email" id="Email" />
          </InputRow>
          <InputRow>
          <p>
            <label htmlFor="Message">Message: </label>
          </p><textarea name="Message" id="Message" rows="7"></textarea>
          </InputRow>
          <InputRow>
            <button type="submit">Send</button>
          </InputRow>
        </TheForm>

      </FormWrapper>
    </MainWrapper>
    </Layout>
  )
}
