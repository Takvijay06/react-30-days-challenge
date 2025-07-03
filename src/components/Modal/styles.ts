import type { CSSProperties } from "react";

export const styles = {
    body: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "sans-serif",
    } as CSSProperties,

    button: {
      padding: "10px 20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    } as CSSProperties,

    overlay: {
      position: "fixed" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(4px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    } as CSSProperties,

    modal: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      minWidth: "300px",
      textAlign: "center",
    } as CSSProperties,

    closeButton: {
      marginTop: "15px",
      padding: "8px 16px",
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
    } as CSSProperties,
  };