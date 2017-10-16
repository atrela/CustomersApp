import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRouting } from './app.routing';
import { CoreModule } from './core/core.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { CustomerModule } from "./customer/customer.module";

@NgModule({
    declarations: [
        AppComponent,
        IntroductionComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CoreModule,
        CustomerModule,
        AppRouting,
    ],
    providers: [],
    exports: [IntroductionComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
