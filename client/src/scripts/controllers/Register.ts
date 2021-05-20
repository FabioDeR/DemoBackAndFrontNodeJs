import { app } from '../../../../src/app.bootstrap';
import { appRouter } from '../Router';
import { APIRest } from '../services/APIRest';
import { Views } from '../services/Views';

class RegisterController{
    registerForm : HTMLFormElement;
    execute(){
        return ()=>{
            this.renderView();
            this.initializeView();
        };
    }
    renderView(){
        // eslint-disable-next-line no-console
        console.log('render');
        Views.showView('register');
        
    }
    initializeView(){
        // eslint-disable-next-line no-console
        this.registerForm = document.getElementById('registerForm') as HTMLFormElement;
        this.registerForm.addEventListener('submit', this.register.bind(this));
        console.log('initialize');
    }

    async register(e){
        console.log(this.registerForm);
        
        e.preventDefault();
        try {
            const {username, email, password} = this.registerForm.elements;
        const isOkay = (await APIRest.register({username : username.value, email : email.value, password : password.value}));
        console.log(isOkay);
        if(isOkay){
            appRouter.navigate('/');
        }
        } catch (error) {
            console.log(error);            
        }
        
        
        
        
    }
}
export { RegisterController};