import { Container } from './styles';
import Image from 'next/image';

export function Testimonial() {
  return(
    <Container>
      <section>
        <div>
          <Image width="270" height="270" src="/assets/testimonial.JPG" alt="Foto de Perfil!" />
          <div>
            <h3>Flávia Assunção</h3>
            <p>
              Foi incrível a experiência que tive ao me conectar comigo
              mesma, em segurança e em um ambiente que me proporcionou um
              grande benefício.
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}