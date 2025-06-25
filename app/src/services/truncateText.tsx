export function truncate(text: string){
  const maxLength = 25;
  const elipsis = text.length > maxLength ? "..." : "";
  return text.substring(0, maxLength) + elipsis;
}
