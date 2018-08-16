
let reporter = store => next => action => {
  console.log('__ACTION__', action)
  try {
    console.log('__PRE_STATE__', store.getState())
    let result = next(action)
    console.log('__POST_STATE__', store.getState())
    return result
  } catch (error){
    error.action = action
    console.error('__ERROR__', error)
    return error
  }

}


export default reporter