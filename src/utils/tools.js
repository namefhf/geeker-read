const hasUser = () => {
  return localStorage.getItem('USER') ? true : false
}
export { hasUser }
