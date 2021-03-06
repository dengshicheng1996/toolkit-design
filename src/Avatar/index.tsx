import * as React from 'react'
import classnames from 'classnames'
import { Touchable, withError } from '../rmc'
import { getDataAttr } from '../_internal'
import { useTracker } from '../hooks'
import { AvatarPropsType } from './PropsType'
import './index.less';

export const Avatar: React.FC<AvatarPropsType> = ({
  img,
  name,
  description,
  onPress,
  ...rest
}) => {
  useTracker(Avatar.displayName)

  let node: React.ReactNode = null

  if (name) {
    node = <h3>{name}</h3>

    if (description) {
      node = (
        <h3>
          {name}
          <p>{description}</p>
        </h3>
      )
    }
  }

  const wrapperClassName = classnames({
    'amd-avatar': true,
    'just-name': !!name && !description,
    'with-all': !!name && !!description,
  })

  return (
    <Touchable onPress={onPress}>
      <div {...getDataAttr(rest)} className={wrapperClassName}>
        <img src={img} alt="avatar" />
        {node}
      </div>
    </Touchable>
  )
}

Avatar.displayName = 'Avatar'

Avatar.defaultProps = {
  img:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUdwTPj7//////j7//////j7//3///////v9//////r8//////r8//z9//////////////z9//////z9//v9/////+z0/8Hb//f6/9Ll/93s/+Tv/83i/8ng/+nz/9jo/8Xd//L4/yibMIIAAAAWdFJOUwDtI/cc540DyEvSD9uuLGhXuHeyoz4KpowLAAAEYUlEQVR42sWa63LyKhSGkzHmoLG2HlY4Q+7/JvdXsZumyQtGmfH51dbpvK4jsKB4nOp6rM/tri83m7Lftef6eK2K3HwcDyVboDwcP7KJNN1lyyJsL12Tw5Y6qGCt+lW7upY9SNu94LPPHVvB7rN50pqeraR/xqrqwJ7gUK312mnDnmJzalaZ07KnaVcY1ZXsBcruUbfV7EXqh9y3/2Iv87VPm7NvWQbapFLVsyz0VUJny9ZAXIkRtL+o0n6lPWoYBieBTRHvrY6PG76Ra+PUrM43PtwgkHsoy9fXj/FCHNUT6AdsPcIrjeDjbjHhnuo78iYkUDeqFgK0kAij4NzKMa1kYeHOw3RiM+zgsSyG9kECnGaO2wCvzIJNVnFiAR4V2vx13gEE2iMiQeFxmw/pjKMhQEHnr7QKv6Uzr+mXO5kenC9+NbOS/+4OkmH6pgh8Msyoh3+Y0AmcvP1Fj/7jYDDgswjsWAT6MYm01yFz/+H/5sBi7ECEQJrT6LNdGyIy3Dt0ZEwEx6ajhJt28A53PjSGbth7iY0h6SBtcecj3aR/sPSDD9TgwjqB+Xi0a5vBoyUFjDdq1lNxF2+2KZ37l7c0RSqv44jF2TY4FeYtjxuaIXQo33Q6XOKZoILXFhD3go4bdbkJRT1H7uYcQcuEUMmo73zOJXWUIUQIlU3l3TGpYymBDd0PcJwsEKB/C4JMi0rFF4sS54ELOgmMiiuVRVHF96GDpMfgce9VxRXXD7IHK+GMuOJcIJAHcSUDs6GOOU7RGpRfDkG7O8f2a4bWYBx23hmuRRo6DiNwK2+LHTZI01oUNGlX9Hits7QWCU3qQb2OMEJpk+RyxW6g5zitR6Cq3QAhDmo1hfleUxaFgOs09lzad7Touh6FSNMzcBCkfjm9CYQojQU7iF3R5hUSoJLa5RZknhaSQOhc1Ci7bVaL6uKY1yIBYnQsrihGKqvQFSzlPr0zClVFUcKCzVhHJdpuWdCCkmjfvpe2W8ecTZVArzv6LXG+ZeL2BdFRbPvYwicXdY2ZhUiATX5xQb5z5peMGwbNhZlIW+6mJwADZgGXcBBLbU7U4HFacW4tV0rPz7Vkgee6yNFSTvfDboDw6X7LwKNlUcMNpDbB+RAxMVtFRp4fkYEJ3TEc2OTs9JhkUM7hgYaY+oWkVROxv9khBrQWpUY0dn6sNFIIa/l3Pog/+W7hCalLDp0UOI/Ds4QbwdApNUbz//3w2VJTaozW9FApGJU8l6sRDQYDXWKCriJSgkfn+R0c3k4x7i4lzKIxPu3xpcsBjKNB8nktO0k0KbgO87URj6OnnBjEZ1Todf9QelJSfGSAE7gyAJB1A0RJBmmb1ZcgcrEHOS6AMfASpGg6loDE7ybkVLgfQXSvXFSN9I2XSFDjq7esfDVrLxPzX/rue5aNfp+48M3EtnrvFXYg16X8e58Z5H848danIPkft7z1uU7+B0hvfVKV/5HYu5+95X/I9/6nie9/bJn/+eh//8QNnouSqTMAAAAASUVORK5CYII=',
}

export default withError(Avatar)
