import { PropsBtn } from './types/types'

function ButtonSubmit({ index, titleBtn, disabled, onClick, type }: PropsBtn) {
  return (
    <button
      name={`wall${index}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {titleBtn}
    </button>
  )
}

export default ButtonSubmit
