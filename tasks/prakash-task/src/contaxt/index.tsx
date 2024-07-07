import { createContext } from "react";

interface ProductPopupContextOnOff {
   productPopupFormOnOff: boolean
   setProductPopupFormOnOff: (value: boolean) => void
}

export const ProductPopupFormContext = createContext<ProductPopupContextOnOff>({
   productPopupFormOnOff: false,
   setProductPopupFormOnOff: () => false,
});