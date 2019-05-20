import React from "react"
import Layout from "../components/layout"
import SmallHero from "../components/SmallHero"
import {
  Container,
  FormHeader,
  FormSubheader,
  FieldGroup,
  Button,
} from "../components/utils"

const Field = props => <input {...props} />

const Contact = () => (
  <Layout>
    <SmallHero title="Contact" bg="navy" />
    <Container mt={40} mb={40}>
      <FormHeader>Are you ready? We are.</FormHeader>
      <FormSubheader>
        Please fill out the following form and provide as much detail as you
        can. Someone will get back to you within 48 hours. If you prefer to
        contact us via email, please send a message to{" "}
        <a href="mailto:questions@goinnovent.com">questions@goinnovent.com</a>.
      </FormSubheader>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thankyou"
      >
        <input type="hidden" name="form-name" value="contact" />
        <FieldGroup>
          <label>First Name</label>
          <Field type="text" name="firstname" />
        </FieldGroup>

        <FieldGroup>
          <label>Last Name</label>
          <Field type="text" name="lastname" />
        </FieldGroup>

        <FieldGroup>
          <label>Company</label>
          <Field type="text" name="company" />
        </FieldGroup>

        <FieldGroup>
          <label>Email Address</label>
          <Field type="text" name="email" />
        </FieldGroup>

        <FieldGroup>
          <label>Phone Number</label>
          <Field type="text" name="phone" />
        </FieldGroup>

        <FieldGroup>
          <label>What's your role?</label>
          <textarea name="role" />
        </FieldGroup>

        <FieldGroup>
          <label>Tell us a bit about your needs.</label>
          <textarea name="needs" />
        </FieldGroup>

        <Button bg="navy" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  </Layout>
)

export default Contact
