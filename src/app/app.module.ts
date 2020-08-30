import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ViewProvidersComponent } from './view-providers/view-providers.component';
import { ModuleIdComponent } from './module-id/module-id.component';
import { TemplateUrlComponent } from './template-url/template-url.component';
import { TemplateComponent } from './template/template.component';
import { StyleUrlsComponent } from './style-urls/style-urls.component';
import { StylesComponent } from './styles/styles.component';
import { AnimationsComponent } from './animations/animations.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EntryComponentsComponent } from './entry-components/entry-components.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeDetectionComponent,
    ViewProvidersComponent,
    ModuleIdComponent,
    TemplateUrlComponent,
    TemplateComponent,
    StyleUrlsComponent,
    StylesComponent,
    AnimationsComponent,
    EncapsulationComponent,
    InterpolationComponent,
    EntryComponentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
