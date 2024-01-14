export default function IconLink({ href, icon, label, name }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" name={name} aria-label={label}>
      {icon}
    </a>
  );
}