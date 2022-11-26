

export const apiBase = "http://localhost:4000"

export const setUserLocalStorage = (username:{} | null)=>{
   localStorage.setItem('user',JSON.stringify(username))
}

export const getUserLocalStorage = ()=>{
    const storage = localStorage.getItem('user') as ''
    if(storage){
        return JSON.parse(storage)
    }else{
        return null
    }   
}

export function handleDate (data:string){
    let dia = data.split('T')[0].split('-')[2]
    let mes = data.split('T')[0].split('-')[1]
    let ano = data.split('T')[0].split('-')[0]
    return dia+'/'+'/'+mes+'/'+ano
}

export function handleMonth(text:string) {
    switch (text) {
        case 'Jan':
            return 0
            break;
        case 'Feb':
            return 1
            break;  
        case 'Mar':
            return 2
            break;
        case 'Apr':
            return 3
            break; 
        case 'May':
            return 4
            break;
        case 'Jun':
            return 5
            break; 
        case 'Jul':
            return 6
            break;
        case 'Aug':
            return 7
            break;   
        case 'Sep':
            return 8
            break;
        case 'Oct':
            return 9
            break; 
        case 'Nov':
            return 10
            break;
        case 'Dec':
            return 11
            break; 
        default:
            return 0
            break;
    }
}