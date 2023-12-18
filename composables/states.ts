export const useSub = () => useState("activeSub", () => 'none');
export const useLoading = () => useState("loading", () => false);
export const useSwitchInMainPage = () => useState("switchInMainPage", () => false);
export const useHeader = () => useState("openHeader", () => false);
export const useMenu = () => useState("isOpen", () => true);
export const useTextHeader = () => useState("textHeader", () => '');
export const useBodyModal = () => useState("bodyModal", () => "");
export const useH1Page = () => useState("h1Page", () => "");