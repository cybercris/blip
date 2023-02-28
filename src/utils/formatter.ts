export const dateFormatter = (dateString: Date) => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('pt-BR').format(date)
}

export function generateShortName(name: string): string {
  const nameParts = name.split(' ')
  const shortName = nameParts.length === 1 ? nameParts[0] : nameParts.join('_')
  return shortName.toLowerCase()
}
