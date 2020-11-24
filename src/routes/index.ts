import { Router } from 'express';

const routes = Router();
routes.get('/', (request, response) =>
  response.json({ ok: 'estamos com rotas' }),
);
export default routes;
