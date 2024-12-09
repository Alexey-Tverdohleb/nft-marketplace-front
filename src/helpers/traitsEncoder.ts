export default function traitsEncoder(obj: Record<string, string[]>) {
  return encodeURIComponent(JSON.stringify(obj));
}
