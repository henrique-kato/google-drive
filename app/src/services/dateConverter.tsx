export function convertToLocalDateTime(uploadDateTime: string){
  const date = new Date(uploadDateTime)
  const localDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
  return localDate.toDateString()
}
