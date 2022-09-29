import { SystemLang } from "../models/SystemStructure";

export class TransactionObservationLang {
  static payment_completed_title: SystemLang = {
    jp: "送信完了",
    en: "Transaction complete",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static payment_completed_message: SystemLang = {
    jp: "送信が承認されました。履歴をご確認ください。",
    en: "Transaction approved. Please check the history.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static payment_failed_title: SystemLang = {
    jp: "送信失敗",
    en: "Transaction failure",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static payment_failed_message: SystemLang = {
    jp: "送信に失敗しました。履歴を確認ください。",
    en: "Transaction failed. Please check your history.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}
