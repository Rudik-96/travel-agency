import { BannerService } from "./banner.service";
import type { BannerConfig } from "./banner.service";
import { CreateBannerDto } from "./banner.dto";
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    getAll(): Promise<BannerConfig[]>;
    create(body: CreateBannerDto): Promise<BannerConfig>;
}
