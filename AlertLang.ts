import { SystemLang } from "../models/SystemStructure";

class AlertLang {
  // connection error
  static title_connection_error: SystemLang = {
    jp: "接続エラー",
    en: "",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_connection_error: SystemLang = {
    jp: "ネットワークとの接続に失敗しました。最初からやり直してください。",
    en: "",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  // unknown error
  static title_unknown_error: SystemLang = {
    jp: "エラー",
    en: "",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_unknown_error: SystemLang = {
    jp: "予期しないエラーが発生しました。アプリを再起動してください。",
    en: "",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  // account error
  static title_account_error: SystemLang = {
    jp: "アカウントエラー",
    en: "",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_account_error: SystemLang = {
    jp: "アカウントの作成に失敗しました。やり直してください。",
    en: "",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  // transaction error
  static title_transaction_error: SystemLang = {
    jp: "トランザクションエラー",
    en: "",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_transaction_error: SystemLang = {
    "jp": "トランザクション形式が正しくありません",
    en: "",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export default AlertLang;
