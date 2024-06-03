import React from 'react'

function ButtonComponent({clss, text, icon, prefixIcon}) {
  return (
    <div className={clss}>
        {prefixIcon && prefixIcon}
        <span>{text}</span>
        {icon&& icon}
    </div>
  )
}

export default ButtonComponent