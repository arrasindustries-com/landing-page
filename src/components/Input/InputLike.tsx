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
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-white/60">{label}</div>

      {tall ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-24 w-full resize-none rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20"
        />
      ) : (
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full rounded-[12px] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20"
        />
      )}
    </label>
  );
}
