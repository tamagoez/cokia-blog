export default function CommitLink({ id }) {
  return (
    <code>
      <a
        href={`https://github.com/tamagoez/neem-pages/commit/${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {commit}
      </a>
    </code>
  );
}
