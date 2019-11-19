import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SmallHero from "../components/SmallHero"
import PhotoGrid from "../components/PhotoGrid"
import {
  FormHeader,
  FormSubheader,
  FieldGroup,
  Button,
} from "../components/utils"

const FormWrap = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
  margin-left: 10px;
  margin-right: 10px;

  @media (min-width: 767px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`

const Field = props => <input {...props} />

const OurTeam = () => (
  <Layout>
    <SmallHero title="Our Team" bg="yellow" />
    <PhotoGrid mt={20} mb={20} />
    <FormWrap>
      <FormHeader>Join Our Growing Team!</FormHeader>
      <FormSubheader>
        Fill out the following form and upload your resume and cover letter. If
        you have any questions, email{" "}
        <a href="mailto:careers@goinnovent.com">careers@goinnovent.com</a>. We
        can’t wait to meet you!
      </FormSubheader>
      <form
        name="team"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="form-name" value="team" />
        <FieldGroup>
          <label>First Name</label>
          <Field type="text" name="firstName" />
        </FieldGroup>

        <FieldGroup>
          <label>Last Name</label>
          <Field type="text" name="lastName" />
        </FieldGroup>

        <FieldGroup>
          <label>Email Address</label>
          <Field type="text" name="emailAddress" />
        </FieldGroup>

        <FieldGroup>
          <label>Phone Number</label>
          <Field type="phone" name="phoneNumber" />
        </FieldGroup>

        <FieldGroup mt={20} mb={20}>
          <label>Upload Documents</label>
          <Field type="file" name="file" />
        </FieldGroup>

        <Button bg="navy" type="submit">
          Submit
        </Button>
      </form>
    </FormWrap>
  </Layout>
)

export default OurTeam
