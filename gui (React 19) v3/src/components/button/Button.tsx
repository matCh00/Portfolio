import React from "react";
import "./button.css";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outlined";
  size?: "default" | "small" | "large" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "default",
      children,
      ...props
    },
    ref
  ) => {
    
    const variantClass = `button-${variant}`;
    const sizeClass = `button-${size}`;
    const buttonClasses = ["button-base", variantClass, sizeClass, className].filter(Boolean).join(" ");

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
