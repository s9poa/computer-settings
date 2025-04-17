import { useEffect, useRef } from 'react';
import styles from "../css/components/user-feedback.module.css";

function UserFeedback({ isOpen, trapFocus, onClose }) {
    const modalRef = useRef(null);
    const firstBtnRef = useRef(null);

    useEffect(() => {
        if (isOpen && trapFocus) {
            firstBtnRef.current.focus();
            const handleKeyDown = e => {
                if (e.key === 'Tab') {
                    const focusable = modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (e.shiftKey) {
                        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
                    } else {
                        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
                    }
                }
                if (e.key === 'Escape') { onClose(); }
            };
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, trapFocus, onClose]);

    return (
        <div className={styles.container} style={{ display: isOpen ? 'grid' : 'none' }} onClick={onClose}>
            <div ref={modalRef} onClick={e => e.stopPropagation()}>
                <img src="404.avif" width="400" height="400" alt="" />
                <h2>Sorry! Not Available Yet.</h2>
                <p>Welp, that didn't go anywhere. Let's go back.</p>
                <button type="button" ref={firstBtnRef} className={styles["go-back"]} onClick={onClose}>Go back</button>
            </div>
        </div>
    );
}

export default UserFeedback;
