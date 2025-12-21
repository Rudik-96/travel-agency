import { AuthStore } from "../../feautures/Auth/authStore";
import { SliderStore } from "../../feautures/Slider/SliderStore";

export class RootStore {
  sliderStore: SliderStore;
  authStore: AuthStore;

  constructor() {
    this.sliderStore = new SliderStore();
    this.authStore = new AuthStore()
  }
}

export const rootStore = new RootStore();
