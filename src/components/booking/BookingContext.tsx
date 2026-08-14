"use client";

import React, { createContext, useContext, useState } from "react";

interface BookingContextType {
  isBookingOpen: boolean;
  presetService: string;
  openBooking: (service?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  isBookingOpen: false,
  presetService: "",
  openBooking: () => {},
  closeBooking: () => {},
});

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [presetService, setPresetService] = useState("");

  const openBooking = (service?: string) => {
    if (service) setPresetService(service);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setPresetService("");
  };

  return (
    <BookingContext.Provider value={{ isBookingOpen, presetService, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingModal() {
  return useContext(BookingContext);
}
