export default function lovelaceAdaExchange(value: number, type: 'floor' | 'volume'): string {
  if (type === 'floor') {
    return (value / 1_000_000).toLocaleString();
  }

  return ((value / 1_000_000) / 1_000_000).toFixed(2).toLocaleString();
}
