import { Injectable } from "@nestjs/common";
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

@Injectable()
export class BannerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(config: BannerCreateInput): Promise<BannerConfig> {
    const created = await this.prisma.banner.create({
      data: {
        imageUrl: config.imageUrl,
        placeName: config.placeName,
        placeInfo: config.placeInfo as any,
      },
    });
    return {
      id: created.id,
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
      id: b.id,
      imageUrl: b.imageUrl,
      placeName: b.placeName,
      placeInfo: b.placeInfo as any,
    }));
  }
  async delete(id: number): Promise<void> {
    await this.prisma.banner.delete({where: { id }})
  }

}
