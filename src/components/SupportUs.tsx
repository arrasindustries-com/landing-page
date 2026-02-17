import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/useTheme";
import { fadeUp } from "@/types/types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CircleDollarSign, Info, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Eip1193Provider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};

type SelectOption = {
  label: string;
  value: string;
};

function PremiumSelect({
  label,
  value,
  options,
  theme,
  onChange,
}: {
  label: string;
  value: string;
  options: SelectOption[];
  theme: "dark" | "light";
  onChange: (next: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const selected = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative block">
      <div
        className={`mb-1 text-xs font-medium ${
          theme === "dark" ? "text-white/60" : "text-[#395276]/75"
        }`}
      >
        {label}
      </div>
      <button
        type="button"
        onClick={() => setOpen((valueOpen) => !valueOpen)}
        className={`relative flex h-11 w-full items-center justify-between rounded-[12px] px-4 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-[#3B82F6]/25 ${
          theme === "dark"
            ? "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
            : "border border-[#bfd1ef] bg-gradient-to-b from-white to-[#eff5ff] text-[#0F0F11] shadow-[0_10px_22px_-16px_rgba(59,130,246,0.35)] hover:border-[#abc3ea] hover:shadow-[0_14px_26px_-18px_rgba(59,130,246,0.45)]"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="truncate">{selected?.label}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          } ${theme === "dark" ? "text-white/70" : "text-[#4b6489]"}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute z-40 mt-2 w-full overflow-hidden rounded-[12px] p-1 backdrop-blur ${
              theme === "dark"
                ? "border border-white/10 bg-[#10131a]/95 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.7)]"
                : "border border-[#bfd1ef] bg-white/95 shadow-[0_18px_38px_-24px_rgba(59,130,246,0.4)]"
            }`}
            role="listbox"
          >
            {options.map((option) => {
              const isActive = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-[10px] px-3 py-2 text-left text-sm transition ${
                    isActive
                      ? "bg-[#3B82F6] text-white shadow-[0_8px_20px_-14px_rgba(59,130,246,0.7)]"
                      : theme === "dark"
                        ? "text-white/80 hover:bg-white/10 hover:text-white"
                        : "text-[#1f314d]/85 hover:bg-[#edf4ff] hover:text-[#0F0F11]"
                  }`}
                  role="option"
                  aria-selected={isActive}
                >
                  <span>{option.label}</span>
                  {isActive ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  ) : null}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SupportSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const walletAddress = "0x8B14a2d2F7f8FFD7152A9b9e9F5Ab2DAB51e6D3a";
  const onchainAddresses = [
    {
      label: "Ethereum",
      address: walletAddress,
    },
    {
      label: "Bitcoin",
      address: "bc1qehupc5fjlz6mgq93duthgal8zvxsj2jsrtt6nk",
    },
    {
      label: "Solana",
      address: "GBZdJkWQrKZz44DP1TnEcQ26mf7Kh1r5DXGjRjcTtydF",
    },
    {
      label: "Tron",
      address: "TR5iwtT3LVqMjRaZnt1jAjwEHrpzwfWrKw",
    },
  ];
  const paypalDonationBase =
    (import.meta.env.VITE_PAYPAL_DONATION_URL as string | undefined)?.trim() ||
    "https://www.paypal.com/donate/?business=meneguzzosilvio%40gmail.com&currency_code=EUR";
  const networks = [
    {
      label: "Ethereum Mainnet",
      value: "ethereum",
      chainId: "0x1",
      chainName: "Ethereum Mainnet",
      rpcUrls: ["https://rpc.ankr.com/eth"],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      blockExplorerUrls: ["https://etherscan.io"],
    },
    {
      label: "Optimism",
      value: "optimism",
      chainId: "0xa",
      chainName: "Optimism",
      rpcUrls: ["https://mainnet.optimism.io"],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      blockExplorerUrls: ["https://optimistic.etherscan.io"],
    },
    {
      label: "Base",
      value: "base",
      chainId: "0x2105",
      chainName: "Base",
      rpcUrls: ["https://mainnet.base.org"],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      blockExplorerUrls: ["https://basescan.org"],
    },
    {
      label: "Arbitrum One",
      value: "arbitrum",
      chainId: "0xa4b1",
      chainName: "Arbitrum One",
      rpcUrls: ["https://arb1.arbitrum.io/rpc"],
      nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
      blockExplorerUrls: ["https://arbiscan.io"],
    },
    {
      label: "Polygon",
      value: "polygon",
      chainId: "0x89",
      chainName: "Polygon Mainnet",
      rpcUrls: ["https://polygon-rpc.com"],
      nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
      blockExplorerUrls: ["https://polygonscan.com"],
    },
  ];

  const tokens = [
    { label: "ETH", value: "ETH" },
    { label: "USDC", value: "USDC" },
    { label: "USDT", value: "USDT" },
    { label: "DAI", value: "DAI" },
  ];

  const particles = [
    { x: "8%", y: "12%", size: 6, duration: 6.5 },
    { x: "18%", y: "82%", size: 4, duration: 7.2 },
    { x: "42%", y: "18%", size: 5, duration: 8.2 },
    { x: "62%", y: "78%", size: 7, duration: 9.1 },
    { x: "84%", y: "22%", size: 4, duration: 6.9 },
    { x: "90%", y: "70%", size: 5, duration: 7.8 },
  ];

  const [amount, setAmount] = useState("0.05");
  const [token, setToken] = useState(tokens[0].value);
  const [network, setNetwork] = useState(networks[0].value);
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [donationMethod, setDonationMethod] = useState<"metamask" | "paypal">(
    "metamask",
  );
  const [showTransparencyCard, setShowTransparencyCard] = useState(false);

  const selectedNetwork =
    networks.find((n) => n.value === network) ?? networks[0];
  const ensureNetwork = async () => {
    const eth = (window as unknown as { ethereum?: Eip1193Provider })
      .ethereum;
    if (!eth) return false;
    try {
      await eth.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: selectedNetwork.chainId }],
      });
      return true;
    } catch (err: unknown) {
      const code = (err as { code?: number }).code;
      if (code === 4902) {
        try {
          await eth.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: selectedNetwork.chainId,
                chainName: selectedNetwork.chainName,
                rpcUrls: selectedNetwork.rpcUrls,
                nativeCurrency: selectedNetwork.nativeCurrency,
                blockExplorerUrls: selectedNetwork.blockExplorerUrls,
              },
            ],
          });
          return true;
        } catch {
          setStatus(t.support.errors.networkAdd);
          return false;
        }
      }
      setStatus(t.support.errors.networkSwitch);
      return false;
    }
  };

  const parseEther = (value: string) => {
    const clean = value.replace(",", ".").trim();
    if (!clean) return null;
    if (!/^\d+(\.\d+)?$/.test(clean)) return null;
    const [whole, frac = ""] = clean.split(".");
    if (frac.length > 18) return null;
    const padded = (frac + "0".repeat(18)).slice(0, 18);
    const wei = BigInt(whole) * 10n ** 18n + BigInt(padded);
    return wei;
  };

  const normalizeAmount = (value: string) => {
    const clean = value.replace(",", ".").trim();
    if (!/^\d+(\.\d+)?$/.test(clean)) return null;
    const parsed = Number.parseFloat(clean);
    if (!Number.isFinite(parsed) || parsed <= 0) return null;
    return parsed.toFixed(2);
  };

  const isMobile = () =>
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const handleMetaMask = async () => {
    const eth = (window as unknown as { ethereum?: Eip1193Provider })
      .ethereum;
    if (!eth) {
      if (isMobile()) {
        // Deep-link into MetaMask's in-app browser
        const dappUrl = window.location.href.replace(/^https?:\/\//, "");
        window.location.href = `https://metamask.app.link/dapp/${dappUrl}`;
        return;
      }
      setStatus(t.support.errors.noMetaMask);
      return;
    }
    if (token !== "ETH") {
      setStatus(t.support.errors.ethOnly);
      return;
    }
    const wei = parseEther(amount);
    if (!wei || wei <= 0) {
      setStatus(t.support.errors.invalidAmount);
      return;
    }
    setBusy(true);
    try {
      const ok = await ensureNetwork();
      if (!ok) return;
      const accounts = (await eth.request({
        method: "eth_requestAccounts",
      })) as string[];
      const from = accounts[0];
      if (!from) throw new Error("No account");
      await eth.request({
        method: "eth_sendTransaction",
        params: [
          {
            from,
            to: walletAddress,
            value: `0x${wei.toString(16)}`,
          },
        ],
      });
      setStatus(t.support.errors.txSent);
    } catch {
      setStatus(t.support.errors.txFailed);
    } finally {
      setBusy(false);
    }
  };

  const handlePayPal = () => {
    const normalizedAmount = normalizeAmount(amount);
    if (!normalizedAmount) {
      setStatus(t.support.errors.invalidAmount);
      return;
    }
    if (!paypalDonationBase) {
      setStatus(t.support.errors.paypalConfig);
      return;
    }

    let targetUrl = paypalDonationBase;
    try {
      if (paypalDonationBase.includes("paypal.me/")) {
        targetUrl = `${paypalDonationBase.replace(/\/+$/, "")}/${normalizedAmount}`;
      } else {
        const url = new URL(paypalDonationBase);
        if (!url.searchParams.has("amount")) {
          url.searchParams.set("amount", normalizedAmount);
        }
        if (!url.searchParams.has("currency_code")) {
          url.searchParams.set("currency_code", "EUR");
        }
        targetUrl = url.toString();
      }
    } catch {
      setStatus(t.support.errors.paypalConfig);
      return;
    }

    window.open(targetUrl, "_blank", "noopener,noreferrer");
    setStatus(t.support.errors.paypalRedirect);
  };

  return (
    <section
      id="supporto"
      className="relative mx-auto max-w-6xl px-4 pb-24 pt-8"
    >
      <motion.div {...fadeUp}>
        <div
          className={`relative overflow-visible rounded-[14px] p-6 backdrop-blur md:p-8 ${
            theme === "dark"
              ? "border border-white/10 bg-white/5"
              : "border border-[#c5d6f0] bg-gradient-to-br from-[#e4eeff] via-[#edf3ff] to-[#ece4ff] shadow-[0_24px_62px_-34px_rgba(99,102,241,0.2)]"
          }`}
        >
          <div className="pointer-events-none absolute -top-28 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#3B82F6]/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-16 right-10 h-[260px] w-[260px] rounded-full bg-[#7C3AED]/20 blur-[130px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_88%_30%,rgba(59,130,246,0.2),transparent_50%)]" />

          <div className="relative mb-8 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                {t.support.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
                {t.support.subtitle}
              </p>
            </div>
          </div>

          <div className="relative grid gap-6">
            <div className="pointer-events-none absolute inset-0">
              {particles.map((p, i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full bg-white/30 blur-[0.5px]"
                  style={{
                    left: p.x,
                    top: p.y,
                    width: p.size,
                    height: p.size,
                  }}
                  animate={{ y: [0, -14, 0], opacity: [0.3, 0.7, 0.3] }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            <div className="relative space-y-3">
              <div
                className={`flex items-center justify-between rounded-[12px] px-3 py-2 ${
                  theme === "dark"
                    ? "border border-white/10 bg-white/5"
                    : "border border-[#bfd2ee] bg-white/75"
                }`}
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    theme === "dark" ? "text-white/60" : "text-[#1f3f73]/75"
                  }`}
                >
                  {t.support.method}
                </div>
                <div
                  className={`inline-flex rounded-[10px] p-1 ${
                    theme === "dark"
                      ? "border border-white/10 bg-[#0F0F11]/70"
                      : "border border-[#b6cdef] bg-white/75"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setDonationMethod("metamask");
                      setStatus(null);
                    }}
                    className={[
                      "rounded-[8px] px-3 py-1.5 text-xs font-semibold transition",
                      donationMethod === "metamask"
                        ? "bg-[#3B82F6] text-white"
                        : theme === "dark"
                          ? "text-white/70 hover:text-white"
                          : "text-[#2d3d58]/75 hover:text-[#0F0F11]",
                    ].join(" ")}
                  >
                    {t.support.metaMaskMode}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDonationMethod("paypal");
                      setStatus(null);
                      setShowTransparencyCard(false);
                    }}
                    className={[
                      "rounded-[8px] px-3 py-1.5 text-xs font-semibold transition",
                      donationMethod === "paypal"
                        ? "bg-[#3B82F6] text-white"
                        : theme === "dark"
                          ? "text-white/70 hover:text-white"
                          : "text-[#2d3d58]/75 hover:text-[#0F0F11]",
                    ].join(" ")}
                  >
                    {t.support.payPalMode}
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {donationMethod === "metamask" ? (
                  <motion.div
                    key="metamask-card"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ rotateX: 1.5, rotateY: -1.5 }}
                    className={`relative overflow-visible rounded-[14px] p-6 backdrop-blur ${
                      theme === "dark"
                        ? "border border-white/10 bg-white/5"
                        : "border border-[#cfdbf1] bg-gradient-to-br from-[#edf3ff] via-[#f4f8ff] to-[#f0eaff] shadow-[0_22px_56px_-30px_rgba(99,102,241,0.2)]"
                    }`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-transparent via-white/5 to-white/10"
                          : "bg-gradient-to-br from-transparent via-[#dbeafe]/45 to-[#ede9fe]/45"
                      }`}
                    />
                    <div className="pointer-events-none absolute -top-10 right-10 h-32 w-32 rounded-full bg-[#3B82F6]/20 blur-2xl" />

                    <div className="flex items-center gap-3">
                      <div
                        className={`relative grid h-12 w-12 place-items-center rounded-[14px] ${
                          theme === "dark"
                            ? "border border-white/10 bg-white/5"
                            : "border border-[#bfd1ef] bg-white/85"
                        }`}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-[14px] border border-[#60A5FA]/40"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        <img
                          src="/metamask.png"
                          alt="MetaMask"
                          className="h-8 w-8"
                        />
                      </div>
                      <div
                        className={`text-sm ${
                          theme === "dark" ? "text-white/70" : "text-[#273a58]/78"
                        }`}
                      >
                        {t.support.supportedWallets}:{" "}
                        <span
                          className={theme === "dark" ? "text-white" : "text-[#0F0F11]"}
                        >
                          MetaMask
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowTransparencyCard(true)}
                        className={`ml-auto inline-flex h-9 w-9 items-center justify-center rounded-[10px] transition ${
                          theme === "dark"
                            ? "border border-white/15 bg-white/5 text-white/80 hover:border-white/30 hover:bg-white/10 hover:text-white"
                            : "border border-[#bfd1ef] bg-white/85 text-[#334767] hover:border-[#abc3ea] hover:bg-white hover:text-[#0F0F11]"
                        }`}
                        aria-label={t.support.transparency}
                        title={t.support.transparency}
                      >
                        <Info className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-6 grid gap-3 md:grid-cols-3">
                      <label className="block">
                        <div
                          className={`mb-1 text-xs font-medium ${
                            theme === "dark" ? "text-white/60" : "text-[#395276]/75"
                          }`}
                        >
                          {t.support.amount}
                        </div>
                        <motion.input
                          whileHover={{ rotate: 1 }}
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.05"
                          className={`h-11 w-full rounded-[12px] px-4 py-3 text-sm outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20 ${
                            theme === "dark"
                              ? "border border-white/10 bg-white/5 text-white"
                              : "border border-[#bfd1ef] bg-white/88 text-[#0F0F11]"
                          }`}
                        />
                      </label>

                      <PremiumSelect
                        label={t.support.network}
                        value={network}
                        options={networks}
                        theme={theme}
                        onChange={setNetwork}
                      />

                      <PremiumSelect
                        label={t.support.token}
                        value={token}
                        options={tokens}
                        theme={theme}
                        onChange={setToken}
                      />
                    </div>

                    <div className="relative mt-5 flex flex-wrap items-center gap-3">
                      <motion.button
                        onClick={handleMetaMask}
                        disabled={busy}
                        className="relative inline-flex items-center justify-center gap-2 rounded-[12px] bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <motion.span
                          className="absolute inset-0 rounded-[12px] bg-[#60A5FA]/30 blur-xl"
                          animate={{ opacity: [0.2, 0.6, 0.2] }}
                          transition={{ duration: 6, repeat: Infinity }}
                        />
                        <span className="relative">
                          {t.support.sendMetaMask}
                        </span>
                      </motion.button>

                      <div
                        className={`text-xs ${
                          theme === "dark" ? "text-white/50" : "text-[#3f5678]/70"
                        }`}
                      >
                        {t.support.selectedNetwork}: {selectedNetwork.label}
                      </div>
                    </div>

                    {status && (
                      <div
                        className={`mt-3 rounded-[12px] px-3 py-2 text-xs ${
                          theme === "dark"
                            ? "border border-white/10 bg-white/5 text-white/70"
                            : "border border-[#bfd1ef] bg-white/88 text-[#273a58]/78"
                        }`}
                      >
                        {status}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="paypal-card"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ rotateX: 1.5, rotateY: -1.5 }}
                    className={`relative overflow-visible rounded-[14px] p-6 backdrop-blur ${
                      theme === "dark"
                        ? "border border-white/10 bg-white/5"
                        : "border border-[#cfdbf1] bg-gradient-to-br from-[#edf3ff] via-[#f4f8ff] to-[#f0eaff] shadow-[0_22px_56px_-30px_rgba(99,102,241,0.2)]"
                    }`}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-transparent via-white/5 to-white/10"
                          : "bg-gradient-to-br from-transparent via-[#dbeafe]/45 to-[#ede9fe]/45"
                      }`}
                    />
                    <div className="pointer-events-none absolute -top-10 right-10 h-32 w-32 rounded-full bg-[#3B82F6]/20 blur-2xl" />

                    <div className="flex items-center gap-3">
                      <div
                        className={`grid h-12 w-12 place-items-center overflow-hidden rounded-[14px] ${
                          theme === "dark"
                            ? "border border-white/10 bg-white/5"
                            : "border border-[#bfd1ef] bg-white/85"
                        }`}
                      >
                        <img
                          src="/paypal.png"
                          alt="PayPal"
                          loading="lazy"
                          decoding="async"
                          className="h-8 w-8 object-contain"
                        />
                      </div>
                      <div>
                        <div
                          className={`text-base font-semibold ${
                            theme === "dark" ? "text-white" : "text-[#0F0F11]"
                          }`}
                        >
                          {t.support.sendPayPal}
                        </div>
                        <div
                          className={`text-sm ${
                            theme === "dark" ? "text-white/70" : "text-[#273a58]/78"
                          }`}
                        >
                          {t.support.paypalDesc}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                      <label className="block">
                        <div
                          className={`mb-1 text-xs font-medium ${
                            theme === "dark" ? "text-white/60" : "text-[#395276]/75"
                          }`}
                        >
                          {t.support.amount}
                        </div>
                        <motion.input
                          whileHover={{ rotate: 1 }}
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="10.00"
                          className={`h-11 w-full rounded-[12px] px-4 py-3 text-sm outline-none transition focus:border-[#3B82F6]/60 focus:ring-2 focus:ring-[#3B82F6]/20 ${
                            theme === "dark"
                              ? "border border-white/10 bg-white/5 text-white"
                              : "border border-[#bfd1ef] bg-white/88 text-[#0F0F11]"
                          }`}
                        />
                      </label>

                      <motion.button
                        onClick={handlePayPal}
                        className={`inline-flex h-11 items-center justify-center gap-2 rounded-[12px] px-5 text-sm font-semibold transition ${
                          theme === "dark"
                            ? "border border-white/20 bg-white/5 text-white hover:border-white/35 hover:bg-white/10"
                            : "border border-[#bfd1ef] bg-white/85 text-[#0F0F11] hover:border-[#abc3ea] hover:bg-white"
                        }`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <CircleDollarSign className="h-4 w-4" />
                        <span>{t.support.sendPayPal}</span>
                      </motion.button>
                    </div>

                    <div
                      className={`mt-3 text-xs ${
                        theme === "dark" ? "text-white/50" : "text-[#3f5678]/70"
                      }`}
                    >
                      {t.support.paypalCurrency}
                    </div>

                    {status && (
                      <div
                        className={`mt-3 rounded-[12px] px-3 py-2 text-xs ${
                          theme === "dark"
                            ? "border border-white/10 bg-white/5 text-white/70"
                            : "border border-[#bfd1ef] bg-white/88 text-[#273a58]/78"
                        }`}
                      >
                        {status}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {createPortal(
              <AnimatePresence>
                {donationMethod === "metamask" && showTransparencyCard && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`fixed inset-0 z-[80] flex items-center justify-center p-4 backdrop-blur-sm ${
                      theme === "dark" ? "bg-black/60" : "bg-[#0F172A]/35"
                    }`}
                    onClick={() => setShowTransparencyCard(false)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className={`relative w-full max-w-2xl overflow-hidden rounded-[14px] p-6 backdrop-blur ${
                        theme === "dark"
                          ? "border border-white/15 bg-[#0F0F11] shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
                          : "border border-[#c7d8f3] bg-gradient-to-br from-[#edf3ff] via-[#f6f9ff] to-[#f1ebff] shadow-[0_20px_80px_-40px_rgba(59,130,246,0.45)]"
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        className={`pointer-events-none absolute inset-0 ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-white/5 via-transparent to-white/10"
                            : "bg-gradient-to-br from-transparent via-[#dbeafe]/40 to-[#ede9fe]/40"
                        }`}
                      />
                      <motion.div
                        className="pointer-events-none absolute -left-10 -top-12 h-40 w-40 rounded-full bg-[#7C3AED]/20 blur-3xl"
                        animate={{ scale: [0.95, 1.05, 0.95] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowTransparencyCard(false)}
                        className={`absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-[10px] transition ${
                          theme === "dark"
                            ? "border border-white/20 bg-white/10 text-white/85 hover:border-white/35 hover:bg-white/15 hover:text-white"
                            : "border border-[#bfd1ef] bg-white/90 text-[#334767] hover:border-[#abc3ea] hover:bg-white hover:text-[#0F0F11]"
                        }`}
                        aria-label="Close transparency details"
                      >
                        <X className="h-4 w-4" />
                      </button>

                      <div className="relative">
                        <div
                          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                            theme === "dark" ? "text-white/60" : "text-[#3b5478]/78"
                          }`}
                        >
                          {t.support.transparency}
                        </div>
                        <div
                          className={`mt-3 text-sm ${
                            theme === "dark" ? "text-white/70" : "text-[#273a58]/80"
                          }`}
                        >
                          {t.support.transparencyDesc}
                        </div>

                        <div
                          className={`mt-6 rounded-[12px] px-4 py-4 text-sm ${
                            theme === "dark"
                              ? "border border-white/10 bg-white/5 text-white/80"
                              : "border border-[#bfd1ef] bg-white/90 text-[#273a58]/82"
                          }`}
                        >
                          <div
                            className={`text-sm font-semibold tracking-wide ${
                              theme === "dark" ? "text-white" : "text-[#0F0F11]"
                            }`}
                          >
                            {t.support.destinationWallet}
                          </div>
                          <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            {onchainAddresses.map((entry) => (
                              <div
                                key={`${entry.label}-${entry.address}`}
                                className={`rounded-[10px] px-3 py-2 ${
                                  theme === "dark"
                                    ? "border border-white/10 bg-[#06070a]/60"
                                    : "border border-[#bfd1ef] bg-white"
                                }`}
                              >
                                <div
                                  className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                                    theme === "dark"
                                      ? "text-white/60"
                                      : "text-[#3b5478]/78"
                                  }`}
                                >
                                  {entry.label}
                                </div>
                                <div
                                  className={`mt-1 break-all font-mono text-[13px] ${
                                    theme === "dark"
                                      ? "text-white/90"
                                      : "text-[#1f314d]/88"
                                  }`}
                                >
                                  {entry.address}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>,
              document.body,
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
