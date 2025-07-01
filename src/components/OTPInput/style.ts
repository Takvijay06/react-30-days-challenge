export const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    gap: "0.5rem",
    margin: "1rem 0",
  } as React.CSSProperties,
  input: {
    width: "3rem",
    height: "3rem",
    fontSize: "1.5rem",
    textAlign: "center",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  } as React.CSSProperties,
  inputFocus: {
    border: "1px solid #007bff",
    boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
  } as React.CSSProperties,
};