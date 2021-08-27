import {NgModule} from '@angular/core';
import { ExampleChapterComponent } from './example-chapter/example-chapter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ExampleChapterComponent
    ],
    exports: [
        ExampleChapterComponent
    ],
    imports:[
        FormsModule
    ]

})
export class ExampleModule {
 
}