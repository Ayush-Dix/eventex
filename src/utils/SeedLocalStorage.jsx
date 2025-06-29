import { useEffect } from "react";
import { events } from "./EventDatabase"; 


export default function SeedLocalStorage() {
  useEffect(() => {
    if (!localStorage.getItem('events')) {
      localStorage.setItem('events', JSON.stringify(events));
    }
  }, []);
  return null;
}