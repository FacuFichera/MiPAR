import data from "./data/Hamburgesas.json"

export const DevuelveDatos = () =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(data);
        }, 1500);
    })
}


 export const PedirItemPorId = (id) =>{
    return new Promise ((resolve,reject) => {
        const item = data.find((el) => el.id === id);
    
        if(item) {
            resolve(item)
        }else{
            reject({
                error:"No existe esta hamburgesa"
            })
        }
    
    })
}
