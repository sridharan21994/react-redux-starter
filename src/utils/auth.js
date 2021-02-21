export const isLoggedIn = token => {
    const storedToken = localStorage.getItem('Authorization')
    return (token || storedToken ? true : false)
}