import {
  META_QUERY,
  CREATE_META_MUTATION,
  UPDATE_META_MUTATION,
  CREATE_USER,
  ROLES_QUERY,
} from './queries';
import Flux from 'flux-state';
import { META_STEP_NAME, META_ALLIANCE_SELECTED } from '../../shared';
import {
  SESSION_ERROR,
  SESSION_EVENT,
  APOLLO_CLIENT,
  SESSION_META_EVENT,
  UPDATE_META_EVENT,
  META_EVENT,
  USER_CREATED_EVENT,
  ROLES_EVENT,
} from '../../shared/SessionStore';
import sessionStore from '../../shared/SessionStore';

/**
 * Fetches the roles available in the System
 * @return {Promise<void>}
 */
export const fetchRoles = async (): void => {
  const client = sessionStore.getState(APOLLO_CLIENT);
  let response;
  try {
    response = await client.query({ query: ROLES_QUERY, fetchPolicy: 'network-only' });
  } catch (e) {
    console.error('fetchRoles', e);
    Flux.dispatchEvent(SESSION_ERROR, e);
  }
  console.log('fetchRoles', response.data);
  Flux.dispatchEvent(ROLES_EVENT, response.data.rolesList.items);
  return response.data.rolesList.items;
};

/**
 * Fetches the current user meta information
 * @return {Promise<void>}
 */
export const fetchMeta = async (): void => {
  const client = sessionStore.getState(APOLLO_CLIENT);
  const user = sessionStore.getState(SESSION_EVENT);
  let response;
  try {
    response = await client.query({
      query: META_QUERY,
      fetchPolicy: 'network-only',
      variables: { userId: user.id },
    });
  } catch (e) {
    Flux.dispatchEvent(SESSION_ERROR, e);
  }
  console.log('fetchMeta', response.data);
  Flux.dispatchEvent(SESSION_META_EVENT, response.data.metasList.items);
  return response.data.metasList.items;
};

/**
 * Creates a meta value in the API for the current User
 * @param name the name of the meta
 * @param value the valie of the meta
 * @return {Promise<void>}
 */
export const createMeta = async (name: string, value: string): void => {
  const client = sessionStore.getState(APOLLO_CLIENT);
  const user = sessionStore.getState(SESSION_EVENT);
  const data = { name, value, user: { connect: { id: user.id } } };
  let response;
  try {
    response = await client.mutate({
      mutation: CREATE_META_MUTATION,
      variables: { data },
    });
  } catch (e) {
    return Flux.dispatchEvent(SESSION_ERROR, e);
  }
  return Flux.dispatchEvent(META_EVENT, response.data.metaCreate);
};

/**
 * Updates a meta value in the API for the current User
 * @param name the name of the meta
 * @param value the valie of the meta
 * @return {Promise<void>}
 */
export const updateMeta = async (name: string, value: string): void => {
  const metas = await fetchMeta();
  const metaToBeUpdated = metas.find((meta) => meta.name === name);
  console.log('updateMeta:', name, value, metas, metaToBeUpdated);

  if (!metaToBeUpdated)
    return Flux.dispatchEvent(SESSION_ERROR, {
      message: `No meta named: ${name}`,
    });

  const client = sessionStore.getState(APOLLO_CLIENT);
  const data = { id: metaToBeUpdated.id, value };
  let response;

  try {
    response = await client.mutate({
      mutation: UPDATE_META_MUTATION,
      variables: { data },
    });
  } catch (e) {
    console.error('updateMeta', e);
    return Flux.dispatchEvent(SESSION_ERROR, e);
  }
  console.log('updateMeta', response.data);
  return Flux.dispatchEvent(UPDATE_META_EVENT, response.data.metaUpdate);
};

/**
 * Creates The first data necesary for the User when it starts the session
 * @param step the step in which the User should begin
 * @return {Promise<void>}
 */
export const initializeUser = async (step = 0): void => {
  const client = sessionStore.getState(APOLLO_CLIENT);
  const user = sessionStore.getState(SESSION_EVENT);
  const data = {
    id: user.id,
    metaRelation: {
      create: [
        {
          name: META_STEP_NAME,
          value: step,
        },
        {
          name: META_ALLIANCE_SELECTED,
          value: '',
        },
      ],
    },
    userInformationRelation: {
      create: {},
    },
  };
  let response;
  try {
    response = await client.mutate({ mutation: CREATE_USER, variables: { data } });
  } catch (e) {
    console.error('initializeUser', e);
    return Flux.dispatchEvent(SESSION_ERROR, e);
  }
  console.log('initializeUser', response);
  return Flux.dispatchEvent(USER_CREATED_EVENT, response.data.metaCreate);
};
