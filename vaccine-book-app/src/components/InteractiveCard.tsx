"use client";

export default function InteractiveCard({
  children,
}: {
  children: React.ReactNode;
}) {
  function onCardMouseAction(event: React.SyntheticEvent) {
    if (event.type == "mouseover") {
      event.currentTarget.classList.remove("shadow-xl");
      event.currentTarget.classList.add("shadow-2xl");
      event.currentTarget.classList.add("bg-neutral-200");
    } else {
      event.currentTarget.classList.add("shadow-xl");
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.remove("bg-neutral-200");
    }
  }

  return (
    <div
      className="w-[400px] h-[300px] shadow-xl rounded-lg overflow-hidden m-4"
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
