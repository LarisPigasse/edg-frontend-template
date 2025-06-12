// hooks.ts
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Usa i nuovi metodi .withTypes() per React Redux v9+
// Questi metodi esistono direttamente sui hook useDispatch e useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
