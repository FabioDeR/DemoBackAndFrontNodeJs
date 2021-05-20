import { AppStorage } from './LocalStorage';

class APIRest{
    static baseUrl = 'http://localhost:3000'

    //Post Login
    static login = async (values) =>{
        const options = {
            method : 'POST',
            body : JSON.stringify(values),
            headers : {
                Accept : 'application/json',
                'Content-Type':'application/json'
            }
        };
        return APIRest.excute('api/v1/login', options);
    }

    //Post Register
    static register = async(values) =>{
        const options = {
            method : 'POST',
            body : JSON.stringify(values),
            headers : {
                Accept : 'application/json',
                'Content-Type':'application/json'
            }
        };
        return APIRest.excute('api/v1/users', options);
    }

    //Get Todo
    static getTodos = async () => {
        try {
            const token = AppStorage.getInstance('tpk_app').getValue('token');
        const options = {
            method : 'GET',            
            headers : {
                Accept : 'application/json',
                'Content-Type':'application/json',
                'authorization': `Bearer ${token}`
            }
        };    
        return APIRest.excute('api/v1/todos', options); 
        } catch (error) {
            console.log(error);            
        }
               
    }
    
    //Generique Methode Post
    static async excute(action, options = {}){
        try {
            const rawResponse = await fetch(`${this.baseUrl}/${action}`, options);
            const reponse = await rawResponse.json();
            return reponse;
        } catch (error) {
            return error;
        }
    }
     
   
}

export {APIRest};