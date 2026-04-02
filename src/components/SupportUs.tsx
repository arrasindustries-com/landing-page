import { useLanguage } from "@/contexts/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { CircleDollarSign, Info, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/Button/Button";

type Eip1193Provider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};

type SelectOption = {
  label: string;
  value: string;
};

function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (next: string) => void;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-medium text-[var(--text-soft)]">
        {label}
      </div>
      <select
        className="support-select h-12 w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 text-sm text-[var(--text)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--accent-ring)]"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function SupportSection() {
  const { t, language } = useLanguage();
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
    networks.find((entry) => entry.value === network) ?? networks[0];

  const ensureNetwork = async () => {
    const eth = (window as unknown as { ethereum?: Eip1193Provider }).ethereum;
    if (!eth) return false;
    try {
      await eth.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: selectedNetwork.chainId }],
      });
      return true;
    } catch (error: unknown) {
      const code = (error as { code?: number }).code;
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
    const [whole, fraction = ""] = clean.split(".");
    if (fraction.length > 18) return null;
    const padded = (fraction + "0".repeat(18)).slice(0, 18);
    return BigInt(whole) * 10n ** 18n + BigInt(padded);
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
    const eth = (window as unknown as { ethereum?: Eip1193Provider }).ethereum;
    if (!eth) {
      if (isMobile()) {
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
      const canProceed = await ensureNetwork();
      if (!canProceed) return;

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
      const url = new URL(paypalDonationBase);
      const hostname = url.hostname.toLowerCase();
      const isPayPalHost =
        hostname === "paypal.com" ||
        hostname.endsWith(".paypal.com") ||
        hostname === "paypal.me" ||
        hostname.endsWith(".paypal.me");

      if (!isPayPalHost) {
        setStatus(t.support.errors.paypalConfig);
        return;
      }

      if (hostname === "paypal.me" || hostname.endsWith(".paypal.me")) {
        targetUrl = `${url.toString().replace(/\/+$/, "")}/${normalizedAmount}`;
      } else {
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

    const win = window.open(targetUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      setStatus(t.support.errors.paypalBlocked);
      return;
    }
    setStatus(t.support.errors.paypalRedirect);
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="supporto" className="mx-auto max-w-7xl px-4 pb-20 md:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--surface-strong)] shadow-[var(--shadow)]"
      >
        <div className="grid gap-8 p-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-center md:p-10">
          <div className="lg:pr-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)]">
              {language === "it" ? "Supporto" : "Support"}
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl">{t.support.title}</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-muted)]">
              {t.support.subtitle}
            </p>

            <div className="mt-8 space-y-3">
              <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  {language === "it" ? "Utilizzo" : "Use of funds"}
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {language === "it"
                    ? "Il supporto contribuisce a prototipi, test tecnici, integrazioni sperimentali e sviluppo di strumenti che poi possono diventare parte del nostro lavoro applicato."
                    : "Support helps fund prototypes, technical testing, experimental integrations, and tool development that can later become part of our applied work."}
                </p>
              </div>
              <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  {t.support.transparency}
                </div>
                <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
                  {t.support.transparencyDesc}
                </p>
                <button
                  type="button"
                  onClick={() => setShowTransparencyCard(true)}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-opacity hover:opacity-70"
                >
                  <Info className="h-4 w-4" />
                  {language === "it" ? "Vedi indirizzi" : "View addresses"}
                </button>
              </div>
            </div>
          </div>

          <div className="self-center rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-5 md:p-6">
            <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                  {t.support.method}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  {language === "it"
                    ? "Wallet EVM o PayPal, con un flusso lineare e leggibile su desktop e mobile."
                    : "EVM wallet or PayPal, with a clear and readable flow on desktop and mobile."}
                </p>
              </div>

              <div className="inline-flex rounded-[14px] border border-[var(--border)] bg-[var(--surface-strong)] p-1">
                <button
                  type="button"
                  onClick={() => {
                    setDonationMethod("metamask");
                    setStatus(null);
                  }}
                  className={[
                    "rounded-[10px] px-3 py-2 text-xs font-semibold transition",
                    donationMethod === "metamask"
                      ? "bg-[var(--button-bg)] text-[var(--button-text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]",
                  ].join(" ")}
                >
                  {t.support.metaMaskMode}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDonationMethod("paypal");
                    setStatus(null);
                  }}
                  className={[
                    "rounded-[10px] px-3 py-2 text-xs font-semibold transition",
                    donationMethod === "paypal"
                      ? "bg-[var(--button-bg)] text-[var(--button-text)]"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]",
                  ].join(" ")}
                >
                  {t.support.payPalMode}
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              {donationMethod === "metamask" ? (
                <motion.div
                  key="metamask-panel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="pt-6"
                >
                  <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="text-base font-semibold text-[var(--text)]">
                          {language === "it" ? "Wallet EVM" : "EVM wallet"}
                        </div>
                        <div className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                          {language === "it"
                            ? "Compatibile con MetaMask."
                            : "Compatible with MetaMask."}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowTransparencyCard(true)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] transition-opacity hover:opacity-70"
                      >
                        <Info className="h-4 w-4" />
                        {t.support.transparency}
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-3">
                    <label className="block">
                      <div className="mb-1 text-xs font-medium text-[var(--text-soft)]">
                        {t.support.amount}
                      </div>
                      <input
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        placeholder="0.05"
                        className="h-12 w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--accent-ring)]"
                      />
                    </label>

                    <SelectField
                      label={t.support.network}
                      value={network}
                      options={networks}
                      onChange={setNetwork}
                    />

                    <SelectField
                      label={t.support.token}
                      value={token}
                      options={tokens}
                      onChange={setToken}
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm leading-6 text-[var(--text-muted)]">
                      {t.support.selectedNetwork}: {selectedNetwork.label}
                    </div>
                    <Button onClick={handleMetaMask} disabled={busy}>
                      {busy
                        ? language === "it"
                          ? "Invio..."
                          : "Sending..."
                        : t.support.sendMetaMask}
                    </Button>
                  </div>

                  {status ? (
                    <div className="mt-4 rounded-[16px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm leading-6 text-[var(--text-muted)]">
                      {status}
                    </div>
                  ) : null}
                </motion.div>
              ) : (
                <motion.div
                  key="paypal-panel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="pt-6"
                >
                  <div className="rounded-[18px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4">
                    <div className="text-base font-semibold text-[var(--text)]">
                      PayPal
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                      {t.support.paypalDesc}
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                    <label className="block">
                      <div className="mb-1 text-xs font-medium text-[var(--text-soft)]">
                        {t.support.amount}
                      </div>
                      <input
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        placeholder="10.00"
                        className="h-12 w-full rounded-[16px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-[var(--border-strong)] focus:ring-2 focus:ring-[var(--accent-ring)]"
                      />
                    </label>
                    <button
                      type="button"
                      onClick={handlePayPal}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-strong)] px-5 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--border-strong)] hover:bg-[var(--surface)]"
                    >
                      <CircleDollarSign className="h-4 w-4" />
                      {t.support.sendPayPal}
                    </button>
                  </div>

                  <div className="mt-4 text-sm text-[var(--text-soft)]">
                    {t.support.paypalCurrency}
                  </div>

                  {status ? (
                    <div className="mt-4 rounded-[16px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-3 text-sm leading-6 text-[var(--text-muted)]">
                      {status}
                    </div>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {showTransparencyCard ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[80] flex items-center justify-center bg-black/45 p-4"
              onClick={() => setShowTransparencyCard(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="relative w-full max-w-2xl rounded-[22px] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow)] md:p-7"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setShowTransparencyCard(false)}
                  className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--text-muted)] transition hover:text-[var(--text)]"
                  aria-label="Close transparency details"
                >
                  <X className="h-4 w-4" />
                </button>

                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
                  {t.support.transparency}
                </p>
                <h3 className="mt-4 text-3xl text-[var(--text)]">
                  {t.support.destinationWallet}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-muted)]">
                  {t.support.transparencyDesc}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {onchainAddresses.map((entry) => (
                    <div
                      key={`${entry.label}-${entry.address}`}
                      className="rounded-[16px] border border-[var(--border)] bg-[var(--surface-strong)] px-4 py-4"
                    >
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)]">
                        {entry.label}
                      </div>
                      <div className="mt-2 break-all font-mono text-[13px] leading-6 text-[var(--text)]">
                        {entry.address}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
}
