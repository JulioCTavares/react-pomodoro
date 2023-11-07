import { ButtonCotainer } from "./Button.styles"

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
}

export const Button = ({variant = 'primary'}: ButtonProps) => {
  return (
    <ButtonCotainer variant={variant}>Enviar</ButtonCotainer>
  )
}
