import { CarDataType } from "../../types/types"

export const getCars=()=>{
 return(
    {
        type:'GET_ALL_CARS'
    }
 )
}

export const getCarsSuccess=(allCars:CarDataType[])=>{
    return{
        type:'GET_ALL_CARS_SUCCESS',
        payload:allCars
    }
}
export const getCarsUnSuccess=()=>{
    return{
        type:'ERROR',
        payload:'The request is not success'
    }
}


export const addCar=(carData:CarDataType,userToken:string)=>{
    return({type:'ADD_CAR',payload:{car:carData,token:userToken}})
}

export const addCarSuccess=(carLikeArr:CarDataType[])=>{
    return({type:'ADD_CAR_SUCCESS',payload:carLikeArr})
}

export const addCarUnSuccess=()=>{
    return({type:'ERROR',payload:'The new car is added unsuccessful'})
}

export const deleteCar=(carId:string,userId:string,token:string)=>{
    return({type:'DELETE_CAR',payload:{carId,userId,token}})
}

export const deleteCarSuccess=()=>{
    return({type:'DELETE_CAR_SUCCESS'})
}
export const deleteCarUnSuccess=()=>{
    return({type:'ERROR',payload:'The car can not be deleted. Pleas try again.'})
}

export const changeCar=(newCarData:CarDataType,userId:string,token:string)=>{
    return({type:'CHANGE_CAR',payload:{newCarData,userId,token}})
}

export const changeCarSuccess=()=>{
    return({type:'CHANGE_CAR_UCCESS'})
}
export const changeCarUnSuccess=()=>{
    return({type:'ERROR',payload:'The curent car can not be changed. Pleas try again.'})
}