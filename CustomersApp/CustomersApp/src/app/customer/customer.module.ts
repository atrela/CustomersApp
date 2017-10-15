import { NgModule } from '@angular/core';

import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { AppRouting } from '.././app.routing';

@NgModule({
    imports: [
        AppRouting
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
export class CustomerModule {
}
