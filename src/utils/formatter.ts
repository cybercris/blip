export const dateFormatter = (dateString: Date) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('pt-BR').format(date)
}
