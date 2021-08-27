import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExampleModule } from './example/example.module';
import { FirstComponent } from './first/first.component';
import { ExampleArtifactComponent } from './example-artifact/example-artifact.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    FirstComponent,
    ExampleArtifactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
