
export const deleteCarApi=async(carId:string,userId:string,token:string)=>{
    const request=await fetch(`http://161.35.202.170:8080/cars/${carId}/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
    })
return request;
}