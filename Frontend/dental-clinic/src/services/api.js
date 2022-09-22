export const get = async (endpoint, token) => {
    const response = await fetch(`http://localhost:8000/api/v1/${endpoint}/`,{
        headers:{
            'Authorization': token
        }
    })
    const data = await response.json()
    return data
}

export const getOne = async (endpoint, token, id) => {
    const response = await fetch(`http://localhost:8000/api/v1/${endpoint}/${id}`,{
        headers:{
            'Authorization': token
        }
    })
    const data = await response.json()
    return data
}

export const post = async(endpoint, token, content)=> {
    const response = await fetch(`http://localhost:8000/api/v1/${endpoint}/`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
          },
        body: JSON.stringify(content),
    })
    const data = await response.json()
    return data
}

export const put = async(endpoint, token, content)=> {
    const response = await fetch(`http://localhost:8000/api/v1/${endpoint}/${content.id}/`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
          },
        body: JSON.stringify(content),
    })
    const data = await response.json()
    return data
}

export const patch = async(endpoint, token, id,  content)=> {
    const response = await fetch(`http://localhost:8000/api/v1/${endpoint}/${id}/`,{
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': token
          },
        body: JSON.stringify(content),
    })
    const data = await response.json()
    return data
}


export const login = async(credentials)=> {
    const response = await fetch(`http://localhost:8000/api/v1/login/`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(credentials),
    })
    const data = await response.json()
    return data
}

export const query = async (endpoint, token, query) => {
    const response = await fetch(`http://localhost:8000/api/v1/${endpoint}/?start=${query.start}&&end=${query.end}&&specialist=${query.specialist}&&status=${query.status}&&patient=${query.patient}`,{
        headers:{
            'Authorization': token
        }
    })
    const data = await response.json()
    return data
}
