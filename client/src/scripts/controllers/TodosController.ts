import { APIRest } from '../services/APIRest';
import { Views } from '../services/Views';
// const dataTest = ['test1', 'test2', 'test3'];
class TodoContoller{
 
    execute(){
        return ()=>{
            this.renderView();
            this.initializeView();
        };
    }
  async renderView(){
        // eslint-disable-next-line no-console
        console.log('render');
        
        const todos = (await APIRest.getTodos()).todos;
        console.log(todos);
        
        const todos_list = document.getElementById('todo_list');
        console.log(todos_list);       
        
        const html = todos.map((prev, next)=>{      
            console.log(next.title);                        
             return `${prev}\n<li class="p-4 hover:bg-gray-50 cursor-pointer flex items-center justify-between">
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-4 duration-200 text-red-500 hover:text-red-700" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ${next.title}
                <span class="text-xs rounded-lg bg-yellow-300 text-yellow-800 ml-4 px-3 py-1">Home</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current text-gray-300 ml-8"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </li>`;
        });
        todos_list.innerHTML = html;      
        Views.showView('todos');        
    }   
          
        
     
    async initializeView(){
        // eslint-disable-next-line no-console       
        console.log('initialize');
        // const data = await APIRest.getTodos();  
        // console.log(response.json(data));          

    }    
        
        
    

    


   
}
export { TodoContoller};