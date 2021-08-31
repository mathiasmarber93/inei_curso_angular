import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example-artifact',
  templateUrl: './example-artifact.component.html',
  styleUrls: ['./example-artifact.component.scss']
})
export class ExampleArtifactComponent implements OnInit {

  title="example";
  isValid = true;
  directives=['ngfor', 'ngif', 'ngonchanges']
  languages=[
    {
      name: 'python'
    },
    {
      name: 'java'
    },
    {
      name: 'PHP'
    }
  ]

  constructor() { 
    console.log('life cicle: 1 constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`life cicle: 2 ngonchange ${changes}`);
    setTimeout(() => {
      this.isValid= false
    }, 5000);
  }

  ngOnInit(): void {
    console.log('life cicle: 3 ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('life cicle: 4 ngOnDestroy');
  }

}
