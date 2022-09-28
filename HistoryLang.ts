import { SystemLang } from "../models/SystemStructure";

class HistoryLang {
  static confirmed: SystemLang = {
    jp: "承認済",
    en: "Confirmed",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static unconfirmed: SystemLang = {
    jp: "未承認",
    en: "Unconfirmed",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static partial: SystemLang = {
    jp: "署名待ち",
    en: "Awaiting signature",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static get_history_error: SystemLang = {
    jp: "履歴を取得できませんでした",
    en: "Failed retrieving history.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static copied: SystemLang = {
    jp: "コピーしました",
    en: "Copied",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static receive: SystemLang = {
    jp: "受信",
    en: "Received",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static send: SystemLang = {
    jp: "送信",
    en: "Send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_RESERVED: SystemLang = {
    jp: "その他",
    en: "Other",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_TRANSFER: SystemLang = {
    jp: "転送",
    en: "Transfer",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_NAMESPACE_REGISTRATION: SystemLang = {
    jp: "ネームスペース登録",
    en: "Namespace registration",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_ADDRESS_ALIAS: SystemLang = {
    jp: "ネームスペースに紐づくアドレスを編集",
    en: "Link namespace to an address",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_MOSAIC_ALIAS: SystemLang = {
    jp: "ネームスペースに紐づくモザイクを編集",
    en: "Linking a namespace to mosaic",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_MOSAIC_DEFINITION: SystemLang = {
    jp: "新しいモザイクの作成",
    en: "Create new mosaics",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_MOSAIC_SUPPLY_CHANGE: SystemLang = {
    jp: "モザイクの供給量を変更",
    en: "Mosaic supply change",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_MOSAIC_SUPPLY_REVOCATION: SystemLang = {
    jp: "モザイクを回収",
    en: "Revoke mosaic",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_MULTISIG_ACCOUNT_MODIFICATION: SystemLang = {
    jp: "マルチシグアカウントの変更",
    en: "Modifying a multisig account",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_AGGREGATE_COMPLETE: SystemLang = {
    jp: "署名不要なアグリゲートトランザクション",
    en: "Aggregate transactions that do not require signatures",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_AGGREGATE_BONDED: SystemLang = {
    jp: "署名待ちのアグリゲートトランザクション",
    en: "Aggregate transactions awaiting signature",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_HASH_LOCK: SystemLang = {
    jp: "署名待ちアグリゲートトランザクション用資金をロック",
    en: "Funds Lock for aggregate transactions awaiting signature",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_SECRET_LOCK: SystemLang = {
    jp: "シークレットロックトランザクションの作成",
    en: "Create secret lock transaction",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_SECRET_PROOF: SystemLang = {
    jp: "シークレットロックトランザクションのロックを解除",
    en: "Unlock secret lock transaction",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_ACCOUNT_ADDRESS_RESTRICTION: SystemLang = {
    jp: "送受信するアドレスの制限設定",
    en: "Account address restriction",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_ACCOUNT_MOSAIC_RESTRICTION: SystemLang = {
    jp: "送受信するモザイクの制限設定",
    en: "Mosaics restriction",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_ACCOUNT_OPERATION_RESTRICTION: SystemLang = {
    jp: "送信可能なトランザクション種別の変更",
    en: "Change transaction types that can be sent",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_ACCOUNT_KEY_LINK: SystemLang = {
    jp: "アカウントの重要度をリモートアカウントにリンク(ハーベスト用)",
    en: "Link importance to remote account (for harvesting)",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_VRF_KEY_LINK: SystemLang = {
    jp: "アカウントをVRFアカウントにリンク(ハーベスト用)",
    en: "Link account to VRF account (for harvesting)",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_VOTING_KEY_LINK: SystemLang = {
    jp: "投票キーをアカウントにリンク(ハーベスト用)",
    en: "Link voting key to account (for harvesting)",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_NODE_KEY_LINK: SystemLang = {
    jp: "アカウントを委任先ノードにリンク(ハーベスト用)",
    en: "Link account to delegating Node (for harvesting)",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_MOSAIC_ADDRESS_RESTRICTION: SystemLang = {
    jp: "モザイクのアドレス制限設定",
    en: "Settings for mosaics address restriction",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_MOSAIC_GLOBAL_RESTRICTION: SystemLang = {
    jp: "モザイクのグローバル制限設定",
    en: "Settings for mosaics global restriction",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_ACCOUNT_METADATA: SystemLang = {
    jp: "アカウントへメタデータを付与",
    en: "Attach metadata to account",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_MOSAIC_METADATA: SystemLang = {
    jp: "モザイクへメタデータを付与",
    en: "Attach metadata to mosaic",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static tx_type_NAMESPACE_METADATA: SystemLang = {
    jp: "ネームスペースへメタデータを付与",
    en: "Attach metadata to namespace",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}

export default HistoryLang;
