import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
})
export class ParentComponent {
  items = [{ id: 1, name: 'Item 1' }];

  changeItem() {
    this.items = this.items.map((item) =>
      item.id === 1 ? { ...item, name: 'Updated Item' } : item
    );
  }

  mutateItem() {
    this.items[0].name = 'Mutated Name';
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
}
