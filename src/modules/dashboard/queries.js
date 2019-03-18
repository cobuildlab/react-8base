import gql from 'graphql-tag';

export const ROLES_QUERY = gql`
  query Roles {
    rolesList {
      count
      items {
        id
        name
      }
    }
  }
`;

export const META_QUERY = gql`
  query Metas($userId: ID) {
    metasList(filter: { user: { id: { equals: $userId } } }) {
      count
      items {
        id
        name
        value
      }
    }
  }
`;

export const CREATE_META_MUTATION = gql`
  mutation CreateMeta($data: MetaCreateInput!) {
    metaCreate(data: $data) {
      id
      value
      name
    }
  }
`;

export const UPDATE_META_MUTATION = gql`
  mutation UpdateMeta($data: MetaUpdateInput!) {
    metaUpdate(data: $data) {
      id
      value
      name
    }
  }
`;

export const CREATE_USER = gql`
  mutation($data: UserUpdateInput!) {
    userUpdate(data: $data) {
      id
    }
  }
`;
