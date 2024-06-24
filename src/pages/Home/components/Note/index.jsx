import * as Styled from "./styles";

export const Note = ({text, color}) => {
  const rgbColor = color.match(/\d+/g);
  const darkenFactor = 0.8;
  const darkenedRgbColor = rgbColor.map(colorValue => Math.floor(Number(colorValue) * darkenFactor));
  const darkenedColor = `rgb(${darkenedRgbColor.join(", ")})`;
  

  return (
    <Styled.Container color={color}>
      <Styled.Fita color={darkenedColor} />
      <Styled.TextContainer 
        contentEditable="true" 
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Styled.Container>
  );
};