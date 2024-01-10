export const Button = (onClick) => {
  return (
    <button onClick={onClick.presionar}>
      {onClick.titulo}
    </button>
  )
}