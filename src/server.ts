import application from './application';
import ServerConfig from './config/server';

application.listen(
  ServerConfig.port,
  () => console.log(`Server running on *:${ServerConfig.port}`)
);

