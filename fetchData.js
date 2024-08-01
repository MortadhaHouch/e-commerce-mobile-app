async function fetchData(url,method,body,setIsLoading){
    try {
        let request = await fetch(url,{
            method,
            body,
            headers:{
                "Content-Type": "application/json"
            }
        })
        setIsLoading(true);
        let response = await request.json();
        return response;
    } catch (error) {
        setIsLoading(false);
        console.log(error);
    }finally{
        setIsLoading(false);
    }
}
export {fetchData}