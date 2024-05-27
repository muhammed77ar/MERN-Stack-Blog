export const InitialState = {
  authenticated :{
    user : JSON.parse(localStorage.getItem('USER')) || {},
    accessToken : localStorage.getItem('ACCESS_TOKEN') || false,
    },
    articles : [
      
    ],
}