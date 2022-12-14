import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  categories = [];
  categorySelectedCategory;

  newTaskObj = {};
  itemName;
  itemDueDate;
  itemPriority;
  itemCategory;
  constructor(
    public modalCtlr: ModalController,
    public todoService: TodoService
  ) {}

  ngOnInit() {
    this.categories.push('Home Work');
    this.categories.push('Office Work');
  }

  async add() {
    this.newTaskObj = {
      itemName: this.itemName,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.categorySelectedCategory,
    };
    console.log(this.newTaskObj);
    let data = this.itemName + this.itemDueDate;
    if (data) {
      await this.todoService.addTodo(data, this.newTaskObj);
    } else {
      console.log("can't save empty task");
    }
    this.dismis();
  }

  selectCategory(index) {
    this.categorySelectedCategory = this.categories[index];
    console.log(this.categorySelectedCategory);
  }

  async dismis() {
    await this.modalCtlr.dismiss(this.newTaskObj);
  } ///dismiss Add task modal
}
