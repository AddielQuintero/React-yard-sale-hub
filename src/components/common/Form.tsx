import React from 'react'

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  ref?: React.ForwardedRef<HTMLFormElement>
}

export const CustomForm = React.forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  return (
    <form
      className={props.className}
      onSubmit={props.onSubmit}
      action={props.action}
      method={props.method}
      ref={ref}
    >
      {props.children}
    </form>
  )
})
