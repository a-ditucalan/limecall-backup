import React from 'react'
import { Input } from 'semantic-ui-react'
import PasswordStrengthBar from 'react-password-strength-bar'

const CommonInput = ({
  onChange,
  onClick = null,
  name,
  type = 'text',
  background,
  value,
  inputStyle = '',
  title = '',
  placeholder = '',
  icon = '',
  iconPosition = null,
  required = false,
  passwordBar = false,
  passwordData = ''
}) => {
  return (
    <div className="input-wrapper">
      <label className="default-text input-title">{title}</label>
      <Input
        onClick={onClick}
        onChange={onChange}
        name={name}
        type={type}
        value={value}
        icon={icon}
        placeholder={placeholder}
        iconPosition={iconPosition}
        className={`input-${background} ${inputStyle}`}
        required={required}
      />
      {passwordBar === true ? (
        <PasswordStrengthBar password={passwordData} />
      ) : (
        ''
      )}
    </div>
  )
}

export default CommonInput
