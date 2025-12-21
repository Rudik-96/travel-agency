import { PrismaService } from "src/prisma.service";
export interface BannerPlaceInfoItem {
    text: string;
    icon: string;
}
export interface BannerConfig {
    imageUrl: string;
    placeName: string;
    placeInfo: BannerPlaceInfoItem[];
}
export declare class BannerService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly banners;
    create(config: BannerConfig): Promise<BannerConfig>;
    findAll(): Promise<BannerConfig[]>;
}
