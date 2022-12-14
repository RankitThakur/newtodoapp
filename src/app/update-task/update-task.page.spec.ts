import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';

import { UpdateTaskPage } from './update-task.page';


var mockTodos = {
  itemName: 'test',
  itemDueDate: '12-10-2022',
  itemPriority: 'high',
  itemCategory: 'office Work'
}
describe('UpdateTaskPage', () => {
  let component: UpdateTaskPage;
  let fixture: ComponentFixture<UpdateTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit", ()=> {
    it('should be call onInit method', () => {
      component.ngOnInit()
      expect(component.itemName).toBeEqual(mockTodos.itemName)
      expect(component.itemDueDate).toBeEqual(mockTodos.itemDueDate)
      expect(component.itemPriority).toBeEqual(mockTodos.itemPriority)
      expect(component.categorySelectedCategory).toBeEqual(mockTodos.itemCategory)
    });
  });

  describe("dismis", ()=> {
    it('should dismiss loading', () => {
      let modalCtrl = fixture.debugElement.injector.get(ModalController);
      spyOn(modalCtrl, 'dismiss');
      fixture.detectChanges();
      component.dismis();
      expect(modalCtrl.dismiss).toHaveBeenCalled();
    });
  });

  describe("update", ()=> {
    it('should call dismiss', () => {
      spyOn(component, 'dismis')
      component.update()
      expect(component.newTaskObj).toBeEquel(mockTodos)
      expect(component.dismis).toHaveBeenCalled()
    });
  });
});
