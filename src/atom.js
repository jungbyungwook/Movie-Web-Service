import { atom } from "recoil";

export const romanceTranslate = atom({
    key: "romanceTranslate", // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});
