import { Router } from 'express';
import appointmentsRouter from './appointment.routes';
import usersRoutes from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();
/* rota de sessao */
routes.use('/session', sessionsRouter);

/* rota de appointmenst */
routes.use('/appointments', appointmentsRouter);

/* rotas de users */
routes.use('/users', usersRoutes);

export default routes;
