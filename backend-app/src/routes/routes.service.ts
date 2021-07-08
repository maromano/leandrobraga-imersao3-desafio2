import { Injectable } from '@nestjs/common';
//import { CreateRouteDto } from './dto/create-route.dto';
//import { UpdateRouteDto } from './dto/update-route.dto';
import * as dataRoutes from './data/routes.json';

@Injectable()
export class RoutesService {

  findAll() {
    return dataRoutes;
  }

}
