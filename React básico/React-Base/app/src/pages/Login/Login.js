import React from "react";
import GlobalStyles, {Container} from '../../styles/GlobalStyles'
import {Title, Paragrafo} from '../Login/style';
function Login(){
    return(
        <Container>
    <Title>
Login
<small>Oie</small>
</Title>
<Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
<button type="button">Enviar</button>
</Container>
    );
}

export default Login;