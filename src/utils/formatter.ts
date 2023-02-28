export const dateFormatter = (dateString: Date) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('pt-BR').format(date)
}

export const generateShortName = (name: string) => {
  return name.replace(/\s+/g, '').toLowerCase()
}
