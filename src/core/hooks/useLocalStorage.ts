// src/core/hooks/useLocalStorage.ts
import { useState, useEffect, useCallback } from "react";

// Tipi per il valore e il setter
type SetValue<T> = (value: T | ((val: T) => T)) => void;

/**
 * Hook personalizzato per gestire localStorage con React state sync
 *
 * @param key - Chiave localStorage
 * @param initialValue - Valore iniziale se non presente in localStorage
 * @returns [value, setValue, removeValue] - Stato attuale, setter, remover
 */
function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>, () => void] {
  // Legge il valore da localStorage all'inizializzazione
  const readFromStorage = useCallback((): T => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      if (item === null) {
        return initialValue;
      }
      return JSON.parse(item);
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  // State React sincronizzato con localStorage
  const [storedValue, setStoredValue] = useState<T>(readFromStorage);

  // Wrapper per setValue che sincronizza con localStorage
  const setValue: SetValue<T> = useCallback(
    (value) => {
      try {
        // Permette l'uso di funzioni callback come setValue((prev) => newVal)
        const valueToStore = value instanceof Function ? value(storedValue) : value;

        // Aggiorna React state
        setStoredValue(valueToStore);

        // Sincronizza con localStorage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));

          // Dispatch custom event per sincronizzare tra tab/finestre
          window.dispatchEvent(
            new StorageEvent("storage", {
              key,
              newValue: JSON.stringify(valueToStore),
              storageArea: window.localStorage,
            })
          );
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  // Funzione per rimuovere il valore da localStorage
  const removeValue = useCallback(() => {
    try {
      setStoredValue(initialValue);

      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key);

        // Dispatch custom event
        window.dispatchEvent(
          new StorageEvent("storage", {
            key,
            newValue: null,
            storageArea: window.localStorage,
          })
        );
      }
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  // Ascolta i cambiamenti di localStorage da altre tab/finestre
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.storageArea === window.localStorage) {
        try {
          const newValue = e.newValue ? JSON.parse(e.newValue) : initialValue;
          setStoredValue(newValue);
        } catch (error) {
          console.warn(`Error parsing localStorage change for key "${key}":`, error);
        }
      }
    };

    // Ascolta eventi di storage per sincronizzazione cross-tab
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);

  // Re-read da localStorage se la chiave cambia
  useEffect(() => {
    setStoredValue(readFromStorage());
  }, [readFromStorage]);

  return [storedValue, setValue, removeValue];
}

export default useLocalStorage;

// Utility types
export type LocalStorageValue<T> = [T, SetValue<T>, () => void];

// Hook specializzato per valori boolean (molto usato per toggles)
export function useLocalStorageBoolean(
  key: string,
  initialValue: boolean = false
): [boolean, (value?: boolean) => void, () => void] {
  const [value, setValue, removeValue] = useLocalStorage(key, initialValue);

  const toggleOrSet = useCallback(
    (newValue?: boolean) => {
      if (newValue !== undefined) {
        setValue(newValue);
      } else {
        setValue((prev) => !prev);
      }
    },
    [setValue]
  );

  return [value, toggleOrSet, removeValue];
}

// Hook specializzato per oggetti JSON
export function useLocalStorageObject<T extends Record<string, unknown>>(
  key: string,
  initialValue: T
): [T, (updates: Partial<T>) => void, SetValue<T>, () => void] {
  const [value, setValue, removeValue] = useLocalStorage(key, initialValue);

  const updateObject = useCallback(
    (updates: Partial<T>) => {
      setValue((prev) => ({ ...prev, ...updates }));
    },
    [setValue]
  );

  return [value, updateObject, setValue, removeValue];
}
