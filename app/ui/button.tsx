'use client';

export default function Button({
  onClick,
  styling,
  children,
}: {
  onClick?: () => void;
  styling?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styling}
    >
      {children}
    </button>
  );
}
