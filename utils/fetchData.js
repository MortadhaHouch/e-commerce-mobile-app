async function fetchData(url,method,body,setIsLoading){
    let requestBody=  null;
    switch (method) {
        case "GET":
        case "DELETE":
            requestBody = JSON.stringify(body);
            break;
        case "POST":
        case "PUT":
            requestBody = null;
            break;
    }
    try {
        let request = await fetch(url,{
            method,
            body:requestBody,
            credentials:"include",
            headers:{
                "Content-Type":"application/json",
                // "Set-Cookie"
            }
        })
        let response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}
export {fetchData}