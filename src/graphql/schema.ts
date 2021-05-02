import { gql } from 'apollo-server-express'

export default gql`
  type Test {
    testing: String
  }

  type User {
    firstName: String
    lastName: String
  }

  type Query {
    test: Test
  }
`