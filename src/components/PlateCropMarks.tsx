interface PlateCropMarksProps {
  toneClass?: string;
}

export function PlateCropMarks({
  toneClass = "border-[var(--border-strong)]",
}: PlateCropMarksProps) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-2 left-2 h-2.5 w-2.5 border-t border-l ${toneClass}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute top-2 right-2 h-2.5 w-2.5 border-t border-r ${toneClass}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l ${toneClass}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute right-2 bottom-2 h-2.5 w-2.5 border-r border-b ${toneClass}`}
      />
    </>
  );
}
