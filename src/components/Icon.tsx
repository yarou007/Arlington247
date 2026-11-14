export default function Icon({
  name,
  size = 24,
}: {
  name: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "phone" ? (
        <path d="m7 3-3 1c-1 5 5 13 12 16l4-3-4-4-3 2-5-5 2-3Z" />
      ) : name === "whatsapp" ? (
        <>
          <path d="M20 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.1-4.4A8.5 8.5 0 1 1 20 11.5Z" />
          <path d="m8 7 1 3-1 1c1 2 2 3 4 4l1-1 3 1" />
        </>
      ) : name === "car" ? (
        <>
          <path d="m4 10 2-5h12l2 5M3 10h18v7H3ZM5 17v3m14-3v3M6 13h2m8 0h2" />
        </>
      ) : name === "home" ? (
        <>
          <path d="m3 11 9-8 9 8M5 10v11h14V10" />
          <path d="M10 21v-7h4v7" />
        </>
      ) : name === "shop" ? (
        <>
          <path d="M4 10v11h16V10M3 10l2-7h14l2 7M3 10c1 3 4 3 5 0 1 3 4 3 5 0 1 3 4 3 5 0 1 3 3 3 3 0M9 21v-7h6v7" />
        </>
      ) : name === "door" ? (
        <>
          <path d="M5 21V3h14v18M3 21h18M9 12h8M16 9v6" />
        </>
      ) : name === "lock" ? (
        <>
          <rect x="5" y="10" width="14" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2" />
        </>
      ) : name === "arrow" ? (
        <path d="M4 12h16m-6-6 6 6-6 6" />
      ) : name === "pin" ? (
        <>
          <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="2" />
        </>
      ) : name === "check" ? (
        <path d="m5 12 4 4L19 6" />
      ) : (
        <>
          <circle cx="8" cy="8" r="5" />
          <path d="m12 12 9 9m-5-5 3-3m-6 0 3-3" />
        </>
      )}
    </svg>
  );
}
