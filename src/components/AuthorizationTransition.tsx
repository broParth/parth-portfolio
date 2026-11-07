"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

type AuthorizationPhase = "idle" | "covering" | "revealing";
type BookDeparture = () => Promise<void>;

interface AuthorizationTransitionValue {
  phase: AuthorizationPhase;
  authorize: (onBookDeparture: BookDeparture) => Promise<void>;
}

const AuthorizationTransitionContext =
  createContext<AuthorizationTransitionValue | null>(null);

export function useAuthorizationTransition() {
  const context = useContext(AuthorizationTransitionContext);
  if (!context) {
    throw new Error(
      "useAuthorizationTransition must be used inside AuthorizationTransitionProvider"
    );
  }
  return context;
}

export default function AuthorizationTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const reduceMotion = prefersReducedMotion ?? false;
  const curtainControls = useAnimationControls();
  const phaseRef = useRef<AuthorizationPhase>("idle");
  const [phase, setPhase] = useState<AuthorizationPhase>("idle");

  const authorize = useCallback(
    async (onBookDeparture: BookDeparture) => {
      if (phaseRef.current !== "idle") return;

      phaseRef.current = "covering";
      setPhase("covering");

      const coverTransition = curtainControls.start(
        reduceMotion
          ? { opacity: 1, transition: { duration: 0.12, ease: "easeOut" } }
          : {
              y: "0%",
              transition: { duration: 0.62, ease: [0.76, 0, 0.24, 1] },
            }
      );

      try {
        await Promise.all([coverTransition, onBookDeparture()]);
        router.push("/about");
      } catch {
        curtainControls.set(reduceMotion ? { opacity: 0 } : { y: "100%" });
        phaseRef.current = "idle";
        setPhase("idle");
      }
    },
    [curtainControls, reduceMotion, router]
  );

  useEffect(() => {
    // phaseRef guards against starting the reveal twice; the public phase stays
    // non-idle until the curtain has fully lifted, then resets in the callback.
    if (phase !== "covering" || pathname !== "/about") return;
    if (phaseRef.current !== "covering") return;

    phaseRef.current = "revealing";
    void curtainControls
      .start(
        reduceMotion
          ? { opacity: 0, transition: { duration: 0.18, ease: "easeOut" } }
          : { y: "-100%", transition: { duration: 0.82, ease: [0.76, 0, 0.24, 1] } }
      )
      .then(() => {
        curtainControls.set(reduceMotion ? { opacity: 0, y: 0 } : { y: "100%" });
        phaseRef.current = "idle";
        setPhase("idle");
      });
  }, [curtainControls, pathname, phase, reduceMotion]);

  return (
    <AuthorizationTransitionContext.Provider value={{ phase, authorize }}>
      {children}
      <motion.div
        aria-hidden="true"
        initial={reduceMotion ? { opacity: 0 } : { y: "100%" }}
        animate={curtainControls}
        className="fixed inset-0 z-[100] pointer-events-none bg-canvas"
        style={{ willChange: "transform, opacity" }}
      />
    </AuthorizationTransitionContext.Provider>
  );
}
