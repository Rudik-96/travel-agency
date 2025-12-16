import { BannerStore } from "../../feautures/Banner/bannerStore";

export class RootStore {
  bannerStore: BannerStore;

  constructor() {
    this.bannerStore = new BannerStore();
  }
}

export const rootStore = new RootStore();
