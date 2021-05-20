import { plugin, prop } from '@typegoose/typegoose';
import passportLocal from 'passport-local-mongoose';
@plugin(passportLocal, {
    usernameField:'email'
})
class User{
    @prop({required:true, unique:true})
    public email?:string;
}

export{User};