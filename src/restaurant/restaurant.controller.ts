import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { ResDto, UpdateResDto } from './dto/res.dto';


@Controller('restaurant')
export class RestaurantController {
    constructor(
        private resService: RestaurantService
    ){}
    
    @Get()
    async getAll(){
        return this.resService.findAll()
    }
    @Post()
    async create(
        @Body()
        resDto: ResDto
    ){
        console.log("LOGGER resDto ", resDto);
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
}
