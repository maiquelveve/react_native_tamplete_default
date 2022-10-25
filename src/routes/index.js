import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';

function Routes() {
  const isLogged = false; // BUSCAR DEPOIS DO CONTEXT 

  return (
    isLogged ? <PrivateRoutes /> : <PublicRoutes />
  )
}

export default Routes;