import { appRouter } from '../Router';
import { APIRest } from '../services/APIRest';
import { AppStorage } from '../services/LocalStorage';
import { Views } from '../services/Views';

class LoginController{
    loginForm : HTMLFormElement;
    execute(){
        return ()=>{
            this.renderView();
            this.initializeView();
        };
    }
    renderView(){
        // eslint-disable-next-line no-console
        console.log('render');
        Views.showView('login');
        
    }
    initializeView(){
        // eslint-disable-next-line no-console
        this.loginForm = document.getElementById('loginForm') as HTMLFormElement;
        this.loginForm.addEventListener('submit', this.login.bind(this));
        // eslint-disable-next-line no-console
        console.log('initialize view');
    }

    async login(e : any){
        e.preventDefault();
        const {email, password} = this.loginForm.elements;
      const token = (await APIRest.login({email: email.value, password: password.value}));
      console.log(token);      
      if(typeof token === 'string'){
        console.log('bonjour');
         AppStorage.getInstance('tpk-app').setValue('token', token);  
         
        //  console.log(token);                            
         appRouter.navigate('/todos');
      } else{
          console.log('out you go');
      }
    }
}
export {LoginController};