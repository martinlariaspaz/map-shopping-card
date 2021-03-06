import React, { MouseEventHandler } from 'react';
import styles from '../styles/styles.module.css';

interface ButtonProps {
  increaseBy: MouseEventHandler<HTMLButtonElement>;
  content: string;
  className?: string;
}

export const Button = ({ increaseBy, content, className }: ButtonProps) => {
  return (
    <button
      className={`${
        content === '+' ? styles.buttonAdd : styles.buttonMinus
      } ${className}`}
      onClick={increaseBy}
    >
      {content}
    </button>
  );
};
