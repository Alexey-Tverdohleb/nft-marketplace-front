export default function traitsDecoder(trait: string): Record<string, string[]> {
  if (trait !== '') {
    return JSON.parse(decodeURIComponent(trait));
  }
  return {};
}
