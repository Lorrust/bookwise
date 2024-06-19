import { Root, Trigger, Portal, Close } from '@radix-ui/react-dialog';
import * as Styled from "./styles";
import { PrimaryButton, SecondaryButton } from '../button';
import { Cross1Icon } from '@radix-ui/react-icons';

export const Modal = ({button, title, children}) => {
    return (
      <Root>
        <Trigger asChild>
            {button}
        </Trigger>

        <Portal>
            <Styled.Overlay />

            <Styled.Content>
                <Styled.HeaderLine>
                    <h2>{title}</h2>

                    <Close>
                        <Cross1Icon />
                    </Close>
                </Styled.HeaderLine>

                

                <Styled.Container>
                    {children}
                </Styled.Container>

                <footer>
                    <Close asChild>
                        <PrimaryButton>
                            Salvar
                        </PrimaryButton>
                    </Close>
                    <Close asChild>
                        <SecondaryButton>
                            Cancelar
                        </SecondaryButton>
                    </Close>
                </footer>
            </Styled.Content>
        </Portal>
      </Root>
    )
  }