import { AuthStore } from "../../feautures/Auth/authStore";
import { BannerStore } from "../../feautures/Banner/bannerStore";

export class RootStore {
  bannerStore: BannerStore;
  authStore: AuthStore;

  constructor() {
    this.bannerStore = new BannerStore();
    this.authStore = new AuthStore()
  }
}

export const rootStore = new RootStore();
