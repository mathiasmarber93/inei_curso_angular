import {NgModule} from '@angular/core';
import { ExampleChapterComponent } from './example-chapter/example-chapter.component';
import { FormsModule } from '@angular/forms';
import { ExampleArtifactComponent } from './example-artifact/example-artifact.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        ExampleChapterComponent,
        ExampleArtifactComponent,
    ],
    exports: [
        ExampleChapterComponent,
    ],
    imports:[
        FormsModule,
        BrowserModule
    ]

})
export class ExampleModule {
 
}