const graphql = require('graphql')

const {
  GraphQLObjectType, 
  GraphQLSchema, 
} = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {},
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {},
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})