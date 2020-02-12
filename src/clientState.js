export const defaults = {
  note: []
};
export const typeDefs = [
  `
    schema{
        query:Query
        mutaion:Mutaion
    }
    type Query{
        notes: [Note]!
        note(id: Int!): Note
    }
    type Mutation{
        createNote(title: String!, content: String!)
        editNote(id: String!, title:String!, content:String!)
    }
    type Note{
        id: Int!
        title: String!
        content: String!
    }
    `
];
export const resolvers = {
  Query: {
    notes: () => []
  }
};
