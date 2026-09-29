"use client";

import { useAuth } from "@/context/AuthContext";
import { AuthModal } from "@/components/Auth/AuthModal/AuthModal";

export function AuthModalHost() {
  const { isAuthModalOpen, closeAuthModal } = useAuth();

  if (!isAuthModalOpen) return null;

  return <AuthModal onClose={closeAuthModal} />;
}
