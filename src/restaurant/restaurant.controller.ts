import { Body, Controller, Get, Post, Param, Patch, Delete, Query, UseInterceptors, UploadedFile, UseGuards, Request, SetMetadata } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { ResDto, UpdateResDto } from './dto/res.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { APIFeatures } from '../utils/apiFeature.utils';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { CurrentUser } from '../auth/decorator/user.decorator';
import { Role, User } from '../auth/schemas/auth.schemas';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorator/role.decorator';



@Controller('restaurant')
export class RestaurantController {
    constructor(
        private resService: RestaurantService,
        private appFeature: APIFeatures
    ){}
    
    @Get()
    @UseGuards(RolesGuard)
    @SetMetadata('roles',['admin','superadmin'])
    // @Roles("admin")
    async getAll(
        @Query() query,
        @Request() req,
    ){
        console.log("====== Query ", query);
        console.log("====== req.user ", req.user);
        return this.resService.findAll(query)
    }

    @Post()
    async create(
        @Body() resDto: ResDto,
        @CurrentUser() user
    ){
        // console.log("====== user ", user);
        console.log("LOGGER resDto ", resDto);
        // resDto.user = user
        return this.resService.create(resDto)
    }

    @Get(':id')
    async findOne(@Param() params){
        console.log(params.id);
        return this.resService.findById(params.id);
    }

    @Patch(':id')
    async update(
        @Param() params,
        @Body() resDto: UpdateResDto
        ){
        console.log(params.id);
        await this.resService.findById(params.id);
        return this.resService.findByIdAndUpdate(params.id, resDto);
    }
    @Delete(':id')
    delete(
        @Param() params,
        ){
        console.log(params.id);
        console.log(`This action returns a #${params.id} cat`);
        return this.resService.findByIdAndDelete(params.id);
    }

    @Patch(':id/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @Param('id') id: string,
        @UploadedFile() file: Express.Multer.File
    ){
        const s3Result = await this.appFeature.uploadFile(file);
        let res = new UpdateResDto()
        res.image = s3Result.Location;
        return this.resService.findByIdAndUpdate(id, res);
        
    }
}
