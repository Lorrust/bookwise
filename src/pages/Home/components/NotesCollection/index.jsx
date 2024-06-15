import * as Styled from './styles';
import { Note } from '../Note'; 
export const NotesCollection = () => {
  return (
    <Styled.Container>
        <h2>Notas</h2>
        <Styled.Notes>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
            <Note/>
        </Styled.Notes>
    </Styled.Container>
  )
}
