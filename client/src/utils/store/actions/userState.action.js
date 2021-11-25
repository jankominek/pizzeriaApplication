

export const setUserInfoAction = (data) => {
    export const userInfo = {
        userId : 1,//data.userId,
        email: 2,//.email,
        type: 3,//data.type,
        isVerified: 4//data.isVerified
    }
    return  {
        type: 'SET_USER_INFO',
        payload: userInfo 
    }
}