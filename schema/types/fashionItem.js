const graphql = require('graphql')

const { 
  GraphQLInputObjectType, 
  GraphQLObjectType, 
  GraphQLEnumType, 
  GraphQLList, 
  GraphQLID, 
  GraphQLString,
  GraphQLFloat,
} = graphql

const FashionItemType = new GraphQLObjectType({
  name: 'FashionItem',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: parent => parent._id,
    },
    category: { type: GraphQLString },
    name: { type: GraphQLString },
    brand: { type: GraphQLString },
    photos: { type: new GraphQLList(PhotoType) },
    price: { type: PriceType },
    tags: { type: new GraphQLList(GraphQLString) },
    link: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
})

const PhotoType = new GraphQLObjectType({
  name: 'Photo',
  fields: () => ({
    url: { type: GraphQLString },
    caption: { type: GraphQLString },
  }),
})

const PriceType = new GraphQLObjectType({
  name: 'Price',
  fields: () => ({
    currency: { type: GraphQLString },
    amount: { type: GraphQLFloat },
  }),
})

const FashionItemFilterType = new GraphQLInputObjectType({
  name: 'FashionItemFilter',
  fields: () => ({
    categories: { type: new GraphQLList(GraphQLString) },
  }),
})

module.exports.FashionItemType = FashionItemType
module.exports.FashionItemFilterType = FashionItemFilterType