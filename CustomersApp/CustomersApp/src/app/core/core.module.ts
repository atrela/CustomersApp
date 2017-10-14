import { NgModule } from '@angular/core';

//import { AppRouteModule } from '../app.routing';

import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';

@NgModule({
    imports: [
       // AppRouteModule
    ],
    exports: [
        NavigationComponent,
        ContentComponent
    ],
    declarations: [
        NavigationComponent,
        ContentComponent
    ],
    providers: [

    ]
})
export class CoreModule {

}
