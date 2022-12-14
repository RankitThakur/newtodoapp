import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private storage: Storage) {
    this.init()
   }

   ngOnInit(){
   }

  addTodo(key,  value){
    this.storage.set(key,value)
  };

  deleteTodo(key){
    this.storage.remove(key) 
  };

  updateTodo(key, newValue){
    this.storage.set(key, newValue)
    this.getAllTodo()
  };

  getAllTodo() {
     var  todos : any = []
     this.storage.forEach((key, value) => {
       todos.push({'key':value, 'value':key})
       
    }); 
    return todos
  };

  async init() {
    await this.storage.create()
  }
}
