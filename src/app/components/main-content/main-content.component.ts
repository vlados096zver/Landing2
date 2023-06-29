import {Component, Input, ViewChild} from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import { SwiperOptions } from 'swiper';
import {IProject} from "../../models/project.model";
import {IPartner} from "../../models/partner.model";
import {projects} from "../../data/project";
import {partners} from "../../data/partners";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {

  @Input() data$: any;
  @ViewChild('swiperBlog', { static: false }) swiperBlog?: SwiperComponent;

  @ViewChild('swiperFeedback', { static: false }) swiperFeedback?: SwiperComponent;

  slideFeedbackNext(){
    this.swiperFeedback?.swiperRef.slideNext(100);
  }
  slideFeedbackPrev(){
    this.swiperFeedback?.swiperRef.slidePrev(100);
  }

  configFeedback: SwiperOptions = {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  };

  configPartners: SwiperOptions = {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 4
      }
    }
  };

  configBlog: SwiperOptions = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  };

  partners: IPartner[] = partners;

  projects: IProject[] = projects;

  tabs = ['All Works', 'Cloud Service', 'Networking', 'Security', 'Web Design'];
  activeTab = 0;

  changeState(state: number) {
    this.activeTab = state;
  }

  setSwiperInstance() {
    setInterval(() => {
      this.swiperBlog?.swiperRef.slideNext();
    }, 3000);
  }
}
