import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AboutComponent} from "../components/about/about.component";
import {ServiceComponent} from "../components/service/service.component";
import {HttpClientModule} from "@angular/common/http";
import {TeamComponent} from "../components/team/team.component";
import {FeebackComponent} from "../components/feeback/feeback.component";
import {StarsComponent} from "../components/stars/stars.component";
import {MainPageComponent} from "../pages/main-page/main-page.component";
import {PartnersComponent} from "../components/partners/partners.component";
import {PreloaderComponent} from "../components/preloader/preloader.component";
import {BlogComponent} from "../components/blog/blog.component";
import {FooterComponent} from "../components/footer/footer.component";
import {HeaderComponent} from "../components/header/header.component";
import {SwiperModule} from "swiper/angular";
import {ScrollDirective} from "../directives/scroll.directive";
import {SearchComponent} from "../components/search/search.component";
import {ProjectComponent} from "../components/project/project.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {MainContentComponent} from "../components/main-content/main-content.component";
import {ChartComponent} from "../components/chart/chart.component";


const components = [
  AboutComponent,
  ServiceComponent,
  TeamComponent,
  FeebackComponent,
  StarsComponent,
  PartnersComponent,
  PreloaderComponent,
  BlogComponent,
  FooterComponent,
  HeaderComponent,
  ScrollDirective,
  SearchComponent,
  ProjectComponent,
  NavbarComponent,
  MainContentComponent,
  ChartComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule
  ],
  exports: [
    ...components
  ]
})
export class MainModule { }
