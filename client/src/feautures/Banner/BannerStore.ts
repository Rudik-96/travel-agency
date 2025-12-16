import { makeAutoObservable } from "mobx";

export interface BannerSlide {
  id: number;
  title: string;
  imageUrl: string;
  videoUrl?: string;
}

export class BannerStore {
  slides: BannerSlide[] = [
    {
      id: 1,
      title: "Explore Maldives",
      imageUrl:
        "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    },
    {
      id: 2,
      title: "Discover Paris",
      imageUrl:
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    },
    {
      id: 3,
      title: "Visit Tokyo",
      imageUrl:
        "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
    },
  ];

  currentIndex = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get currentSlide() {
    return this.slides[this.currentIndex];
  }

  next() {
    if (this.currentIndex + 1 >= this.slides.length) {
      this.currentIndex = 0;
    } else {
      this.currentIndex += 1;
    }
  }

  prev() {
    if (this.currentIndex - 1 < 0) {
      this.currentIndex = this.slides.length;
    } else {
      this.currentIndex -= 1;
    }
  }
  
}
