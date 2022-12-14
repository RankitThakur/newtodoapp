import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() todos;
  categories =[];
  categorySelectedCategory;

  newTaskObj = {}
  itemName;
  itemDueDate; 
  itemPriority;

  constructor(public modalCtlr:ModalController, public todoServive:TodoService) { }

   ngOnInit() {
    this.categories.push('Office Work')
    this.categories.push('Personal Work')

    this.itemName = this.todos.value.itemName
    this.itemDueDate = this.todos.value.itemDueDate
    this.itemPriority = this.todos.value.itemPriority
    this.categorySelectedCategory = this.todos.value.itemCategory    
  }

  selectCategory(index){
    this.categorySelectedCategory = this.categories[index]
    console.log(this.categorySelectedCategory);
  }

  async dismis(){
    await this.modalCtlr.dismiss()
  }

  async update(){
    this.newTaskObj = ({itemName:this.itemName, itemDueDate:this.itemDueDate, itemPriority:this.itemPriority,itemCategory:this.categorySelectedCategory})
    let data = this.todos.key
    console.log(data)
    await this.todoServive.updateTodo(data,this.newTaskObj)
    this.dismis()
  }
}
