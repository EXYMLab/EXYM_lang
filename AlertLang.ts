import { SystemLang } from "../models/SystemStructure";

class AlertLang {
  // connection error
  static title_connection_error: SystemLang = {
    jp: "接続エラー",
    en: "Connection error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_connection_error: SystemLang = {
    jp: "ネットワークとの接続に失敗しました。最初からやり直してください。",
    en: "Network connection failure. Please try again.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  // unknown error
  static title_unknown_error: SystemLang = {
    jp: "エラー",
    en: "Error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_unknown_error: SystemLang = {
    jp: "予期しないエラーが発生しました。アプリを再起動してください。",
    en: "An unexpected error has occurred, please restart the app.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  // account error
  static title_account_error: SystemLang = {
    jp: "アカウントエラー",
    en: "Account error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_account_error: SystemLang = {
    jp: "アカウントの作成に失敗しました。やり直してください。",
    en: "Account creation failure. Please try again.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  // transaction error
  static title_transaction_error: SystemLang = {
    jp: "トランザクションエラー",
    en: "Transaction error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_transaction_error: SystemLang = {
    "jp": "トランザクション形式が正しくありません",
    en: "Malformed transaction",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export default AlertLang;
