export default function TagBadge({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <span className={`tag-badge${dark ? ' tag-badge-dark' : ''}`}>{label}</span>
  );
}
