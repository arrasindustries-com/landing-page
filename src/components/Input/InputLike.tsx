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
    theme === "dark" ? "text-white/60" : "text-[#314a6e]/78";
  const fieldClass =
    theme === "dark"
      ? "border border-white/10 bg-white/5 text-white placeholder:text-white/45"
      : "border border-[#b7cdef] bg-gradient-to-b from-[#ffffff] to-[#eef4ff] text-[#0F0F11] placeholder:text-[#5b7398] shadow-[0_8px_18px_-14px_rgba(59,130,246,0.4)] ring-1 ring-[#dce9ff]/70";

  return (
    <label className="block">
      <div className={`mb-1 text-xs font-medium ${labelClass}`}>{label}</div>

      {tall ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-24 w-full resize-none rounded-[12px] px-4 py-3 text-sm outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20 ${fieldClass}`}
        />
      ) : (
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`h-11 w-full rounded-[12px] px-4 py-3 text-sm outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20 ${fieldClass}`}
        />
      )}
    </label>
  );
}
