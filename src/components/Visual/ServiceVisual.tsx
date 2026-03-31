import { cn } from "@/lib/utils";

export type ServiceVisualVariant =
  | "overview"
  | "operations"
  | "web"
  | "verification";

type Palette = {
  aura: string;
  stage: string;
  ink: string;
  inkSoft: string;
  panel: string;
  panelSoft: string;
  line: string;
};

export function ServiceVisual({
  variant,
  className,
}: {
  variant: ServiceVisualVariant;
  className?: string;
}) {
  const palette: Palette =
    variant === "operations"
      ? {
          aura: "bg-[radial-gradient(circle_at_18%_16%,rgba(168,131,88,0.28),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(88,65,44,0.16),transparent_42%)]",
          stage: "bg-[#f5ecdd]",
          ink: "bg-[#231912]",
          inkSoft: "bg-[#7b6450]",
          panel: "bg-[#fffaf2]",
          panelSoft: "bg-[#e6d3b7]",
          line: "bg-[#d6c3a7]",
        }
      : variant === "web"
        ? {
            aura: "bg-[radial-gradient(circle_at_18%_18%,rgba(201,170,134,0.26),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(116,90,68,0.18),transparent_40%)]",
            stage: "bg-[#f7f0e3]",
            ink: "bg-[#1f1712]",
            inkSoft: "bg-[#8e735c]",
            panel: "bg-[#fffaf4]",
            panelSoft: "bg-[#ead8be]",
            line: "bg-[#dcc9af]",
          }
        : variant === "verification"
          ? {
              aura: "bg-[radial-gradient(circle_at_22%_18%,rgba(139,121,101,0.24),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(72,58,46,0.18),transparent_42%)]",
              stage: "bg-[#f2e7d9]",
              ink: "bg-[#201813]",
              inkSoft: "bg-[#8a725d]",
              panel: "bg-[#fffaf4]",
              panelSoft: "bg-[#dfccb4]",
              line: "bg-[#d3bea6]",
            }
          : {
              aura: "bg-[radial-gradient(circle_at_18%_18%,rgba(197,165,124,0.28),transparent_34%),radial-gradient(circle_at_84%_78%,rgba(111,88,63,0.18),transparent_42%)]",
              stage: "bg-[#f4ebdc]",
              ink: "bg-[#201813]",
              inkSoft: "bg-[#826b56]",
              panel: "bg-[#fffaf3]",
              panelSoft: "bg-[#e3d2ba]",
              line: "bg-[#d7c5ac]",
            };

  return (
    <div
      className={cn(
        "relative h-full min-h-[280px] overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--surface-strong)]",
        className,
      )}
    >
      <div className={cn("absolute inset-0", palette.aura)} />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.22),transparent_35%,rgba(0,0,0,0.03))]" />

      {variant === "overview" ? <OverviewVisual palette={palette} /> : null}
      {variant === "operations" ? <OperationsVisual palette={palette} /> : null}
      {variant === "web" ? <WebVisual palette={palette} /> : null}
      {variant === "verification" ? (
        <VerificationVisual palette={palette} />
      ) : null}
    </div>
  );
}

function OverviewVisual({ palette }: { palette: Palette }) {
  return (
    <div className="relative h-full p-5 md:p-6">
      <div
        className={cn(
          "absolute left-[8%] top-[8%] h-[72%] w-[68%] rounded-[22px] border border-white/65 shadow-[0_28px_70px_-34px_rgba(50,34,20,0.25)]",
          palette.panel,
        )}
      >
        <div className="flex items-center gap-2 border-b border-[#eadfce] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#cfad87]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#b08a63]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8b6a4e]" />
          <div className="ml-3 h-7 flex-1 rounded-full bg-[#f0e3d1]" />
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[16px] bg-[#f9f1e5] p-4">
            <div className={cn("h-2.5 w-16 rounded-full", palette.inkSoft)} />
            <div className={cn("mt-4 h-14 w-4/5 rounded-[14px]", palette.panelSoft)} />
            <div className="mt-4 space-y-2">
              <div className="h-2 rounded-full bg-[#dfcfba]" />
              <div className="h-2 w-5/6 rounded-full bg-[#dfcfba]" />
            </div>
            <div className="mt-5 flex gap-2">
              <div className={cn("h-10 w-24 rounded-full", palette.ink)} />
              <div className="h-10 w-24 rounded-full border border-[#e4d4bf] bg-white/85" />
            </div>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-[14px] border border-white/70 bg-white/78 p-3"
              >
                <div className={cn("h-2 w-12 rounded-full", palette.inkSoft)} />
                <div className="mt-3 grid grid-cols-[40px_1fr] gap-3">
                  <div className={cn("h-10 rounded-[10px]", palette.panelSoft)} />
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-[#dfcfba]" />
                    <div className="h-2 w-4/5 rounded-full bg-[#dfcfba]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-[10%] right-[8%] w-[42%] rounded-[20px] border border-white/65 p-4 shadow-[0_24px_58px_-32px_rgba(50,34,20,0.25)]",
          palette.stage,
        )}
      >
        <div className="grid gap-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="grid grid-cols-[48px_1fr] gap-3 rounded-[14px] bg-white/78 p-3">
              <div className={cn("rounded-[12px]", item === 2 ? palette.ink : palette.panelSoft)} />
              <div className="space-y-2">
                <div className={cn("h-2 w-14 rounded-full", palette.inkSoft)} />
                <div className="h-2 rounded-full bg-[#dfcfba]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-[12%] top-[18%] h-10 w-10 rounded-full border border-white/60 bg-white/45" />
      <div className="absolute right-[14%] top-[16%] h-16 w-16 rounded-full border border-white/55 bg-white/38" />
    </div>
  );
}

function OperationsVisual({ palette }: { palette: Palette }) {
  return (
    <div className="relative h-full p-5 md:p-6">
      <div
        className={cn(
          "absolute inset-[8%] rounded-[22px] border border-white/65 p-4 shadow-[0_28px_70px_-34px_rgba(50,34,20,0.24)]",
          palette.stage,
        )}
      >
        <div className="grid h-full gap-4 md:grid-cols-[78px_1fr]">
          <div className="rounded-[16px] bg-white/72 p-3">
            <div className={cn("mb-4 h-8 w-8 rounded-[10px]", palette.ink)} />
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className={cn(
                    "h-9 rounded-[10px]",
                    item === 2 ? palette.panelSoft : "bg-[#f6ecdf]",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[16px] bg-white/76 p-4">
              <div className="flex items-center justify-between">
                <div className={cn("h-2.5 w-18 rounded-full", palette.inkSoft)} />
                <div className="h-8 w-24 rounded-full border border-[#eadcc8] bg-[#faf2e6]" />
              </div>
              <div className="relative mt-6 grid grid-cols-4 gap-3">
                <div className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-[#d7c5ac]" />
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="relative">
                    <div className="mx-auto h-10 w-10 rounded-full border border-white/70 bg-[#fffaf3]" />
                    <div className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[#806652]">
                      0{item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid flex-1 gap-4 md:grid-cols-[1.04fr_0.96fr]">
              <div className="rounded-[16px] bg-white/76 p-4">
                <div className={cn("h-2.5 w-14 rounded-full", palette.inkSoft)} />
                <div className="mt-5 space-y-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="rounded-[14px] bg-[#faf2e6] p-3">
                      <div className="grid grid-cols-[44px_1fr] gap-3">
                        <div className={cn("rounded-[10px]", item === 2 ? palette.ink : palette.panelSoft)} />
                        <div className="space-y-2">
                          <div className={cn("h-2 w-12 rounded-full", palette.inkSoft)} />
                          <div className="h-2 rounded-full bg-[#dcccba]" />
                          <div className="h-2 w-4/5 rounded-full bg-[#dcccba]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[16px] bg-white/76 p-4">
                <div className={cn("h-2.5 w-16 rounded-full", palette.inkSoft)} />
                <div className="mt-5 grid h-[calc(100%-1.25rem)] gap-3">
                  <div className={cn("rounded-[14px]", palette.panelSoft)} />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-[14px] bg-[#faf2e6]" />
                    <div className="rounded-[14px] bg-[#faf2e6]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebVisual({ palette }: { palette: Palette }) {
  return (
    <div className="relative h-full p-5 md:p-6">
      <div
        className={cn(
          "absolute inset-[8%] rounded-[22px] border border-white/65 p-4 shadow-[0_28px_70px_-34px_rgba(50,34,20,0.24)]",
          palette.stage,
        )}
      >
        <div className="flex items-center gap-2 border-b border-[#e8dbc8] pb-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#cfad87]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#b08a63]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#8b6a4e]" />
          <div className="ml-3 h-7 flex-1 rounded-full bg-[#f2e6d6]" />
        </div>

        <div className="grid gap-4 pt-4 md:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[18px] bg-white/76 p-5">
            <div className={cn("h-2.5 w-16 rounded-full", palette.inkSoft)} />
            <div className="mt-5 space-y-3">
              <div className={cn("h-12 w-4/5 rounded-[14px]", palette.panelSoft)} />
              <div className="h-2 rounded-full bg-[#dcccba]" />
              <div className="h-2 w-5/6 rounded-full bg-[#dcccba]" />
              <div className="h-2 w-3/5 rounded-full bg-[#dcccba]" />
            </div>
            <div className="mt-6 flex gap-2">
              <div className={cn("h-10 w-24 rounded-full", palette.ink)} />
              <div className="h-10 w-24 rounded-full border border-[#e6d7c1] bg-[#faf2e6]" />
            </div>
          </div>

          <div className="grid gap-4">
            <div className={cn("rounded-[18px] p-4", palette.panelSoft)}>
              <div className="h-28 rounded-[14px] bg-white/58" />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-[16px] bg-white/76 p-3">
                <div className={cn("h-2 w-8 rounded-full", palette.inkSoft)} />
                <div className="mt-4 h-16 rounded-[12px] bg-[#f3e6d4]" />
              </div>
              <div className="rounded-[16px] bg-white/76 p-3">
                <div className={cn("h-2 w-8 rounded-full", palette.inkSoft)} />
                <div className="mt-4 h-16 rounded-[12px] bg-[#f3e6d4]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="rounded-[16px] bg-white/76 p-4">
              <div className={cn("h-2 w-10 rounded-full", palette.inkSoft)} />
              <div className="mt-4 h-2 rounded-full bg-[#dcccba]" />
              <div className="mt-2 h-2 w-4/5 rounded-full bg-[#dcccba]" />
              <div className={cn("mt-5 h-14 rounded-[12px]", item === 2 ? palette.ink : palette.panelSoft)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VerificationVisual({ palette }: { palette: Palette }) {
  return (
    <div className="relative h-full p-5 md:p-6">
      <div
        className={cn(
          "absolute inset-[8%] rounded-[22px] border border-white/65 p-4 shadow-[0_28px_70px_-34px_rgba(50,34,20,0.24)]",
          palette.stage,
        )}
      >
        <div className="grid h-full items-center gap-5 md:grid-cols-[0.92fr_1.08fr]">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[230px] rounded-[20px] border border-white/70 bg-white/80 p-5 shadow-[0_18px_40px_-28px_rgba(50,34,20,0.24)]">
              <div className={cn("h-2.5 w-16 rounded-full", palette.inkSoft)} />
              <div className="mt-4 space-y-2">
                {[1, 2, 3, 4, 5].map((row) => (
                  <div key={row} className="h-2 rounded-full bg-[#ded1be]" />
                ))}
              </div>
              <div className="mt-6 flex justify-center">
                <div className={cn("flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-white text-sm font-semibold uppercase tracking-[0.18em] text-white", palette.ink)}>
                  Trust
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className={cn("h-10 w-10 rounded-[12px]", palette.panelSoft)} />
                <div className="h-10 w-10 rounded-[12px] bg-[#f0e4d3]" />
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="grid grid-cols-[54px_1fr] items-center gap-3 rounded-[16px] bg-white/76 p-3">
                <div className="relative flex h-12 w-12 items-center justify-center">
                  <div className={cn("absolute inset-0 rounded-full", palette.panelSoft)} />
                  <div className={cn("relative h-5 w-5 rounded-full", item === 2 ? palette.ink : palette.inkSoft)} />
                </div>
                <div className="space-y-2">
                  <div className={cn("h-2 w-14 rounded-full", palette.inkSoft)} />
                  <div className="h-2 rounded-full bg-[#ded1be]" />
                </div>
              </div>
            ))}

            <div className="rounded-[16px] bg-white/76 p-4">
              <div className={cn("h-2.5 w-18 rounded-full", palette.inkSoft)} />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="rounded-[14px] bg-[#faf2e6] p-3">
                    <div className={cn("h-10 rounded-[10px]", item === 2 ? palette.ink : palette.panelSoft)} />
                    <div className="mt-3 h-2 rounded-full bg-[#ded1be]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
