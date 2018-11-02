import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {CoreModule} from './modules/core/core.module';
import { RegestrationFormComponent } from './components/regestration-form/regestration-form.component';
import { HeaderComponent } from './components/header/header.component';
import { BottomStripComponent } from './components/bottom-strip/bottom-strip.component';
import { AccountTypesComponent } from './components/account-types/account-types.component';
import { TradingBenefitsComponent } from './components/trading-benefits/trading-benefits.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';

@NgModule({
    declarations: [
        AppComponent,
        RegestrationFormComponent,
        HeaderComponent,
        BottomStripComponent,
        AccountTypesComponent,
        TradingBenefitsComponent,
        FooterComponent,
        MainContentComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
