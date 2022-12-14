import { async } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { Storage } from '@capacitor/storage';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });
  
  afterEach(async () => {
    await Storage.clear();
    service = null
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an empty todo array', () => {
    expect(service.getAllTodo()).toEqual([])
  });

  describe("update todo", ()=> {
    it('should return the new item', async () => {
      let key = '12333'
      let value = 'check'
   await service.addTodo(key, value) 
   const updated = await service.getAllTodo()
   expect(updated).toEqual(key, value)
    });
  });

});



