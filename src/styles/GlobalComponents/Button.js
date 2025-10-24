import React from 'react'

import { ButtonBack, ButtonBack2, ButtonFront, ButtonFront2 } from './index'

const Button = (props) => (
  props.buttonType == "2" ?
    <ButtonBack2 alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
      <ButtonFront2 alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront2>
    </ButtonBack2>
  :
    <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
      <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
    </ButtonBack>
);

export default Button
