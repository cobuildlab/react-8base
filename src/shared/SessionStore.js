import Flux from 'flux-state';

/**
 * Event that triggers a session
 * @type {string}
 */
export const SESSION_EVENT = 'onSession';

/**
 * Event that triggers a Alliance Selection
 * @type {string}
 */
export const ALLIANCE_EVENT = 'onAlliance';

/**
 * Event that triggers a Meta fetch
 * @type {string}
 */
export const SESSION_META_EVENT = 'onSessionMeta';

/**
 * Event that triggers a Roles fetch
 * @type {string}
 */
export const ROLES_EVENT = 'onRoles';

/**
 * Event that triggers a Meta creation
 * @type {string}
 */
export const META_EVENT = 'onMetaCreate';

/**
 * Event that triggers a Meta update
 * @type {string}
 */
export const UPDATE_META_EVENT = 'onMetaUpdate';

/**
 * Event that triggers the acquisition of a Apollo Client Instance
 * @type {string}
 */
export const APOLLO_CLIENT = 'onApolloCLient';
/**
 * Event that triggers a session error
 * @type {string}
 */
export const SESSION_ERROR = 'onSessionError';
/**
 * Event that triggers when the initial User information is created
 * @type {string}
 */
export const USER_CREATED_EVENT = 'onUserCreated';
/**
 * Event that triggers when the Users and Roles are fetched
 * @type {string}
 */
export const USER_AND_ROLES_EVENT = 'onUsersAndRoles';
/**
 * Event that triggers when the Invitations are fetched
 * @type {string}
 */
export const INVITATIONS_EVENT = 'onInvitations';
/**
 * Event that triggers when the Invitations with the User data is fetched
 * @type {string}
 */
export const INVITATIONS_USERS_EVENT = 'onInvitationsAndUsers';

/**
 * Hold the Session Data
 */
class SessionStore extends Flux.DashStore {
  constructor() {
    super();
    this.addEvent(SESSION_EVENT);
    this.addEvent(SESSION_ERROR);
    this.addEvent(SESSION_META_EVENT);
    this.addEvent(APOLLO_CLIENT);
    this.addEvent(META_EVENT);
    this.addEvent(USER_CREATED_EVENT);
    this.addEvent(UPDATE_META_EVENT);
    this.addEvent(ROLES_EVENT);
    this.addEvent(INVITATIONS_EVENT);
    this.addEvent(USER_AND_ROLES_EVENT);
    this.addEvent(INVITATIONS_USERS_EVENT);
    this.addEvent(ALLIANCE_EVENT);
  }
}

export default new SessionStore();
