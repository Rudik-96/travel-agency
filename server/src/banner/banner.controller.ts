import { Body, Controller, Delete, Get, ParseIntPipe, Post, Param } from "@nestjs/common";
import { BannerService } from "./banner.service";
import type { BannerConfig } from "./banner.service";
import { CreateBannerDto } from "./banner.dto";

@Controller("banner")
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Get()
  getAll(): Promise<BannerConfig[]> {
    return this.bannerService.findAll();
  }

  @Post()
  create(@Body() body: CreateBannerDto): Promise<BannerConfig> {
    return this.bannerService.create(body);
  }

  @Delete(":id")
  delete(@Param("id", ParseIntPipe)id: number): Promise<void> {
    return this.bannerService.delete(id)
  }
}
