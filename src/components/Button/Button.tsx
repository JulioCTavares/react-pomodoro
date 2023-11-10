import { ButtonContainer } from './Button.styles';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

const Button = ({ variant = 'primary' }: ButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
};

export default Button;
