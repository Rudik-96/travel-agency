import { PrismaService } from "src/prisma.service";
export interface BannerPlaceInfoItem {
    text: string;
    icon: string;
}
export interface BannerConfig {
    id: number;
    imageUrl: string;
    placeName: string;
    placeInfo: BannerPlaceInfoItem[];
}
export interface BannerCreateInput {
    imageUrl: string;
    placeName: string;
    placeInfo: BannerPlaceInfoItem[];
}
export interface BannerConfig extends BannerCreateInput {
    id: number;
}
export declare class BannerService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(config: BannerCreateInput): Promise<BannerConfig>;
    findAll(): Promise<BannerConfig[]>;
    delete(id: number): Promise<void>;
}
