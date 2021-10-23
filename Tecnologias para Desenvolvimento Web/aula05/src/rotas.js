import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/Sobre" component={Sobre} />
            <Route exact={true} path="/Contato" component={Contato} />
            <Route path="*" component={NotFound} />
        </BrowserRouter>
    )
}

export default Rotas;

