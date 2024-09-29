import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Health-check')
@Controller('health-check')
export class HealthCheckController {
  @Get()
  @ApiOperation({
    summary: 'Rota health check',
  })
  checkHealth() {
    return { status: 'Operando' };
  }
}
