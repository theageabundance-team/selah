"use client";

import { useEffect, useState } from "react";
import { getUser } from "./auth";
import type { User } from "./types";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // lecture ponctuelle de localStorage au montage (non disponible côté serveur)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUser(getUser());
     
    setReady(true);
  }, []);

  return { user, ready };
}
