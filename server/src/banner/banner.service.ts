import { Injectable } from "@nestjs/common";
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

@Injectable()
export class BannerService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly banners: BannerConfig[] = [];

  async create(config: BannerConfig): Promise<BannerConfig> {
    const created = await this.prisma.banner.create({
      data: {
        imageUrl: config.imageUrl,
        placeName: config.placeName,
        placeInfo: config.placeInfo as any,
      },
    });
    return {
      imageUrl: created.imageUrl,
      placeName: created.placeName,
      placeInfo: created.placeInfo as any,
    };
  }

  async findAll(): Promise<BannerConfig[]> {
    const rows = await this.prisma.banner.findMany({
      orderBy: { createdAt: "desc" },
    });
    return rows.map((b) => ({
      imageUrl: b.imageUrl,
      placeName: b.placeName,
      placeInfo: b.placeInfo as any,
    }));
  }
}
