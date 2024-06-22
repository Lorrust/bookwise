import { Root, Trigger, Portal, Close } from '@radix-ui/react-dialog';
import * as Styled from "./styles";
import { Cross1Icon } from '@radix-ui/react-icons';
import { useCloseModalValue } from '../../contexts/CloseModalContext';

export const Modal = ({button, title, children}) => {    
    const { closedModal } = useCloseModalValue();
    
    return (
      <Root open={closedModal} >
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
            </Styled.Content>
        </Portal>
      </Root>
    )
  }