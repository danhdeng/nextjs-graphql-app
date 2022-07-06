import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Pet = {
  __typename?: 'Pet';
  ageInWeeks: Scalars['Float'];
  attributes: Array<PetAttribute>;
  availableDate: Scalars['String'];
  breed: Scalars['String'];
  color: Scalars['String'];
  description: Array<Scalars['String']>;
  fee: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['ID'];
  sex: Scalars['String'];
  weight: Scalars['Float'];
};

export type PetAttribute = {
  __typename?: 'PetAttribute';
  key: Scalars['ID'];
  value: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  pet?: Maybe<Pet>;
  pets: Array<Pet>;
};


export type QueryPetArgs = {
  name: Scalars['String'];
};

export type PetByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type PetByNameQuery = { __typename?: 'Query', pet?: { __typename?: 'Pet', name: string, breed: string, ageInWeeks: number, image: string, sex: string, description: Array<string>, color: string, attributes: Array<{ __typename?: 'PetAttribute', key: string, value: string }> } | null };

export type GetPetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPetsQuery = { __typename?: 'Query', pets: Array<{ __typename?: 'Pet', name: string, breed: string, ageInWeeks: number, image: string, sex: string, weight: number, fee: number }> };


export const PetByNameDocument = gql`
    query petByName($name: String!) {
  pet(name: $name) {
    name
    breed
    ageInWeeks
    image
    sex
    description
    color
    attributes {
      key
      value
    }
  }
}
    `;
export const GetPetsDocument = gql`
    query getPets {
  pets {
    name
    breed
    ageInWeeks
    image
    sex
    weight
    fee
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    petByName(variables: PetByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PetByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PetByNameQuery>(PetByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'petByName', 'query');
    },
    getPets(variables?: GetPetsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPetsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPetsQuery>(GetPetsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPets', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;