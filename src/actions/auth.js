import * as types from './types';

export const saveAuth = token => ({
  type: types.SAVE_AUTH,
  payload: token,
})

export const wipeAuth = () => ({
  type: types.WIPE_AUTH,
})