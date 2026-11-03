export function InputLike({
  label,
  placeholder,
  value,
  onChange,
  tall,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  tall?: boolean;
}) {
  const fieldClass =
    "w-full border border-[var(--border)] bg-[var(--page-bg)] px-4 text-[15px] text-[var(--text)] outline-none transition placeholder:text-[var(--text-soft)] hover:border-[var(--border-strong)] focus:border-[var(--accent-bright)] focus:bg-[var(--surface-strong)] focus:ring-4 focus:ring-[var(--accent-soft)]";

  return (
    <label className="block">
      <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-soft)]">
        {label}
      </div>

      {tall ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-32 resize-none py-3 leading-6 ${fieldClass}`}
        />
      ) : (
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-12 py-3 ${fieldClass}`}
        />
      )}
    </label>
  );
}
