import type * as Types from '../../graphql/schema.graphql.js';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type PersonFieldsFragment = {
  __typename: 'Person';
  id: string;
  name: string;
};

export type PersonQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type PersonQuery = {
  __typename: 'Query';
  person: {
    __typename: 'Person';
    car: { __typename: 'Car'; id: string; make: string; model: string };
    pets: Array<{
      __typename: 'Pet';
      id: string;
      name: string;
      owner: { __typename: 'Person' } & PersonFieldsFragment;
    }>;
  } & PersonFieldsFragment;
};

export const PersonFieldsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PersonFields' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Person' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PersonFieldsFragment, unknown>;
export const PersonDocument = {
  __meta__: {
    queryId: '2b0fc416adc23e2c7cc9761a868714cb5662650a21e9fe14bfa358d98c68b82c',
    $DEBUG: {
      contents:
        'fragment PersonFields on Person { __typename id name } query Person($id: ID!) { person(id: $id) { __typename car { __typename id make model } pets { __typename id name owner { __typename ...PersonFields } } ...PersonFields } }',
    },
  },
} as unknown as DocumentNode<PersonQuery, PersonQueryVariables>;
