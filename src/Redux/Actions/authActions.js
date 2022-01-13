import  axios from 'axios';

const authActions = {
    insertUser:(name, lastName, userName, email, password, urlPhoto) => {
        const newUser = {
            firstName: name,
            lastName: lastName,
            userName: userName,
            mail: email,
            password: password,
            image: urlPhoto,
        }
            // console.log('newUser',newUser) 
        return async(dispatch, getState) => {
            try {
                const res = await axios.post('https://mytinerary-coquimbo.herokuapp.com/api/users', newUser )// --> userController --> insertOneUser
                //console.log(res) //response vienen los datos de errores de validator.js
                if(res.data.success && !res.data.error){
                    localStorage.setItem('token', res.data.response.token)
                    dispatch({type:'user', payload:res.data.response})
                }else{
                    return { errors: [{message: res.data.error}] }
                }
            }catch(error){
                // console.error(error)
            }
        }
    },
    logIn:(email, password) => {
        const user = { mail: email, password: password }
        return async(dispatch, getState) => {
            try {
                // console.log(user)
                const res = await axios.post('https://mytinerary-coquimbo.herokuapp.com/api/sigin/', user)// va a --> usersControllers --> accessUser
                // console.log('res desde el actions',res.data.response.token)
              
                if(res.data.success && !res.data.error){
                    // localStorage.setItem('token', res.data.response.token)
                    dispatch({type:'oneUser', payload:{name: res.data.response.userExists?.firstName, 
                                                       photo: res.data.response.userExists?.imagen,
                                                       google: res.data.response.userExists?.google,
                                                       id: res.data.response.userExists?._id}})
                }else{
                  // console.log('res.data.response', res.data.response) 
                  return {errors: [{message: res.data.response}]}
                }
                // console.log(res)
            }catch(error){
                console.error(error)
            }
        }
    },
    logout:() => {
        return async(dispatch, getState) => {
        localStorage.removeItem('token')
        dispatch({type:'logout'})
        }
    },
    logInPersistent:(token) => {
        return async(dispatch, getState) => {
            // console.log('toi en logInPersistent',token)
            try {
                // const token = localStorage.getItem('token')
                const res = await axios.post('http://localhost:4000/api/siginPersistent/', {},{
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
                // console.log(res.data.response.name)
                dispatch({type:'oneUser', payload:{name: res.data.response.name, 
                                                   photo: res.data.response.urlphoto,
                                                   google: res.data.response.google,
                                                   id: res.data.response._id}})
            }catch(error){
                 console.error(error)
                 return dispatch({type: 'logout'})
            }

        }
    }
   
}
export default authActions