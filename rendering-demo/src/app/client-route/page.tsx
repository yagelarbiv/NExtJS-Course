"use client"
import { useTheme } from "@/components/theme-provider";



export default function ClientRoutePage() {
  const theme = useTheme();
  return (
    <h1 style={{ color: theme.colors.primary }}>
      Client route
    </h1>
  );
};
