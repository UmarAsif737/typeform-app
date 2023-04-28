export const formatTimestampToDate = (timestamp: Date) => {
    return timestamp ? new Date(timestamp).toLocaleDateString('de-DE') : '-'
}