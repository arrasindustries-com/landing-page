import { useTheme } from "@/contexts/useTheme";

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
  const { theme } = useTheme();
  const labelClass =
    theme === "dark" ? "text-[var(--text-soft)]" : "text-[var(--text-soft)]";
  const fieldClass =
    theme === "dark"
      ? "border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] placeholder:text-[var(--text-soft)]"
      : "border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text)] placeholder:text-[var(--text-soft)]";

  return (
    <label className="block">
      <div className={`mb-1 text-xs font-medium ${labelClass}`}>{label}</div>

      {tall ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-28 w-full resize-none rounded-[16px] px-4 py-3 text-sm outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--accent-ring)] ${fieldClass}`}
        />
      ) : (
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-12 w-full rounded-[16px] px-4 py-3 text-sm outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--accent-ring)] ${fieldClass}`}
        />
      )}
    </label>
  );
}
