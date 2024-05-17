import { useEffect } from "react";

export function useTimeout(func: () => void, duration: number) {
  useEffect(() => {
    const id = setTimeout(func, duration);
    return () => clearTimeout(id);
  }, [duration, func]);
}
export function useInterval(func: () => void, duration: number) {
  useEffect(() => {
    const id = setInterval(func, duration);
    return () => clearInterval(id);
  }, [duration, func]);
}
