import { useState } from "react";
import { styles } from "./styles";

export const Modal = () => {
  const [show, setShow] = useState(false);

  return (
    <div style={styles.body}>
      <button style={styles.button} onClick={() => setShow(true)}>
        Show modal
      </button>

      {show && (
        <div style={styles.overlay} onClick={() => setShow(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <p>Want to cancel this payment?</p>
            <button style={styles.closeButton} onClick={() => setShow(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
