import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {MaterialModule} from '../material/material.module';
import {FooterComponent} from '../../components/footer/footer.component';
import {MainContentComponent} from '../../components/main-content/main-content.component';
import {HeaderComponent} from '../../components/header/header.component';
import {RegestrationFormComponent} from '../../components/regestration-form/regestration-form.component';
import {AccountTypesComponent} from '../../components/account-types/account-types.component';
import {TradingBenefitsComponent} from '../../components/trading-benefits/trading-benefits.component';
import {BottomStripComponent} from '../../components/bottom-strip/bottom-strip.component';
import {FixedBottomComponent} from '../../components/fixed-bottom/fixed-bottom.component';

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
        AngularFontAwesomeModule,
        RegestrationFormComponent,
        HeaderComponent,
        BottomStripComponent,
        AccountTypesComponent,
        TradingBenefitsComponent,
        FooterComponent,
        MainContentComponent,
        FixedBottomComponent
    ],
    declarations: [
        RegestrationFormComponent,
        HeaderComponent,
        BottomStripComponent,
        AccountTypesComponent,
        TradingBenefitsComponent,
        FooterComponent,
        MainContentComponent,
        FixedBottomComponent
    ]
})
export class CoreModule {
}
