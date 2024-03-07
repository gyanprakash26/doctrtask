const fetchDataFromApiA = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data from fetchDataFromApiA")
        },2000)
    })
}

const fetchDataFromApiB = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data from fetchDataFromApiA")
        },1500)
    })
}
const fetchAllData = async ()=>{
    try {
        const [dateFromApiA , dataFromApiB] = await Promise.race([
            fetchDataFromApiA(),
            fetchDataFromApiB(),
        ])
        // console.log(dateFromApiA)
    } catch (error) {
        console.log(error)
    }
}

fetchAllData();