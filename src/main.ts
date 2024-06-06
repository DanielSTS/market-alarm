import RepositoryFactoryInMemory from './infra/database/repository-factory-in-memory';
import ExpressAdapter from './infra/http/express-adapter';
import Router from './infra/http/router';

const repositoryFactory = new RepositoryFactoryInMemory();
const expressAdapter = new ExpressAdapter();
new Router(expressAdapter, repositoryFactory);
expressAdapter.listen(3000);
