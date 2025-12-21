import { Body, Controller, Get, Post } from "@nestjs/common";
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
}
