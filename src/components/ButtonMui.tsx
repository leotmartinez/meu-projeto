import React from 'react';
import { Button } from '@mui/material';
import type { ButtonProps } from '@mui/material';


interface ButtonMuiProps extends ButtonProps {
  label: string;
}

const ButtonMui: React.FC<ButtonMuiProps> = ({ label, ...props }) => {
  return <Button {...props}>{label}</Button>;
};

export default ButtonMui;
