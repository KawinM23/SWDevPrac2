import { useEffect } from "react";

export function useWindowListener(
  eventType: string,
  listener: EventListener,
  targetElement: HTMLElement | null
) {
  useEffect(() => {
    if (targetElement != null) {
      targetElement.addEventListener(eventType, listener);

      return () => {
        targetElement.removeEventListener(eventType, listener);
      };
    }
  }, [targetElement]);
}
