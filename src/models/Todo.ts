import { prop } from '@typegoose/typegoose';

class Todo{
    @prop({required:true, unique:true})
    public title?:string;
    @prop()
    public description?:string;
}

export{Todo};