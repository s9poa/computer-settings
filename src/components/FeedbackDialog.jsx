import React, { createContext, useContext, useState, useRef, useCallback } from 'react';
import UserFeedback from './UserFeedback';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [trapFocus, setTrapFocus] = useState(false);
  const lastFocusedRef = useRef(null);

  const openDialog = useCallback((trap, e) => {
    lastFocusedRef.current = e.currentTarget;
    setTrapFocus(trap);
    setIsOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setIsOpen(false);
    if (trapFocus && lastFocusedRef.current) {
      lastFocusedRef.current.focus();
    }
  }, [trapFocus]);

  return (
    <FeedbackContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      {/* Render the dialog once at the root */}
      <UserFeedback
        isOpen={isOpen}
        trapFocus={trapFocus}
        onClose={closeDialog}
      />
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const ctx = useContext(FeedbackContext);
  if (!ctx) throw new Error('useFeedback must be used inside FeedbackProvider');
  return ctx;
}
