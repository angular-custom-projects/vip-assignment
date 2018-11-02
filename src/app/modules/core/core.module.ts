import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material/material.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: []
})
export class CoreModule {
}
