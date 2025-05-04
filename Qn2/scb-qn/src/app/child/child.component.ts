import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>Child Component</p>
      <p>ID: {{ item.id }} - Name: {{ item.name }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnChanges {
  @Input() item!: { id: number; name: string };

  constructor() {
    console.log('Child Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('Child ngDoCheck');
  }
}
