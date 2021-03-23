import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    text(textCondition: TextCondition): Text
  }

  type Text {
    textId: ID!
    textData: String
  }

  input TextCondition {
    textId: ID!
  }

`;

const resolvers = {
  Query: {
    text: (parent, args, context, info) => {
      console.log(args)
      console.log(args.textCondition.textId)
      let text;
      if (args.textCondition.textId === 'ID_1') {
        text = { textData: "テストだよー", textId: "ID_1" }
      }
      return text;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: "/api/graphql"
});