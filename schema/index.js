const graphql = require('graphql')
const { m } = require('../helpers/models')
const { FashionItemType, FashionItemFilterType } = require('./types/fashionItem')

const {
  GraphQLObjectType, 
  GraphQLSchema, 
  GraphQLString,
  GraphQLInt, 
  GraphQLList,
} = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    fashionItems: {
      type: new GraphQLList(FashionItemType),
      args: {
        filter: {type: FashionItemFilterType},
        page: {type: GraphQLInt},
        perpage: {type: GraphQLInt},
      },
      resolve: (_, args, ctx) => {
        return m('FashionItem').search(ctx, args.filter, args.page, args.perpage)
      }
    },
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {},
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation,
})