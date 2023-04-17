export default function CommitLink({ id, platform }) {
  return (
    <code>
      <a
        href={`https://github.com/tamagoez/neem-${platform}/commit/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {id}
      </a>
    </code>
  );
}
