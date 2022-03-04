import { Container } from './styles';
import Image from 'next/image'

export function Content() {
  return(
    <Container>
      <p>
        O Reiki é uma ferramenta natural que pode ser usada para 
        nos ajudar a lidar com as tensões da vida cotidiana.
      </p>
      <Image width="240" height="400" src="/assets/lotus.png" alt="Flor de Lótus"/>
    </Container>
  )
}