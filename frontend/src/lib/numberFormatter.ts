
export function formatCurrency(number: number): string {
    return new Intl.NumberFormat('eu', { style: 'currency', currency: 'EUR' }).format(number)
}

export function formatNumber(number: number): string {
    return new Intl.NumberFormat('eu').format(number)
  }

export const formatCentsToCurrency = (cents: number): string => {
    return formatCurrency(cents / 100)
}