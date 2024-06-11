import { PrimaryButton } from "../../../button/PrimaryButton"
import { Container } from "./styles"
export const Card = ({nome, Autor, Editora}) => {
    return(
        <Container> 
            <div className="image">
                <img src="https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1532922071" alt="Capa do livro" />
            </div>
            <h2>{nome}</h2>
            <p>{Autor}</p>
            <p>{Editora}</p>
            <PrimaryButton $size= {0.8}>
                Ver Livro
            </PrimaryButton>
        </Container>
    )
}