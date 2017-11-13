export const validateProfile = (profile) => {
  if(!Profile)
    throw new Error('Profile Required!')
  let { firstName, lastName, city, state, bio } = profile
  if(!firstName || !lastName)
    throw new Error('__VALIDATION_ERROR__ invalid profile');
}

export default(state=null, { type, payload }) => {
  switch (type) {
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload)
      return payload
    case 'TOKEN_REMOVE':
      return null
    default:
      return state;
  }
}
