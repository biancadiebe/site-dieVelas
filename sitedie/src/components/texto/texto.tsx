export function SplitSection({reverse = false }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: reverse ? 'row-reverse' : 'row',
      alignItems: 'center',
      gap: '2rem',
      padding: '4rem 2rem',
    }}>
    </div>
  )
}