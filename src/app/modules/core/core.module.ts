import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {MaterialModule} from '../material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        AngularFontAwesomeModule
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
        AngularFontAwesomeModule
    ],
    declarations: []
})
export class CoreModule {
}
