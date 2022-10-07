import { SystemLang } from "../models/SystemStructure";

export class WalletTabLang {
  static pair: SystemLang = {
    jp: "XYM/JPY",
    en: "XYM/USD",
    es: "XYM/USD",
    it: "XYM/USD",
    ko: "XYM/USD",
    pl: "XYM/USD",
    ru: "XYM/USD",
  };
  static receive: SystemLang = {
    jp: "受 取",
    en: "Received",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static send: SystemLang = {
    jp: "送 信",
    en: "Send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static send_by_qr: SystemLang = {
    jp: "QRスキャンで送信",
    en: "Send via QR scan",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}

export class NewsModalLang {
  static news_list_get_error_title: SystemLang = {
    jp: "ニュース取得エラー",
    en: "News retrieval error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static news_list_get_error_message: SystemLang = {
    jp: "ニュースを取得出来ませんでした。",
    en: "Could not retrieve news.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}

export class HomeBottomTabNavigationLang {
  static home_bottomtab_wallettab: SystemLang = {
    jp: "ウォレット",
    en: "Wallet",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static navigation_history_tab_title: SystemLang = {
    jp: "履 歴",
    en: "History",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static navigation_wallet_design_tab_title: SystemLang = {
    jp: "着せ替え",
    en: "Change screen background ",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static navigation_menu_tab_title: SystemLang = {
    jp: "メニュー",
    en: "Menu",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static navigation_settings_tab_title: SystemLang = {
    jp: "設定",
    en: "Settings",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

  static current_account_null_error_title: SystemLang = {
    jp: "アカウントエラー",
    en: "Account error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static current_account_null_error_message: SystemLang = {
    jp: "現在接続中のネットワークタイプで登録されているウォレットがありません。ウォレットを追加してください。",
    en: "No registered wallets for the network type being connected to. Please add a wallet.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}

export class MenuTabLang {
  static community_title: SystemLang = {
    jp: "コミュニティ",
    en: "Community",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static community_subTitle: SystemLang = {
    jp: "コミュニティ一覧を表示",
    en: "See community lists",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

  static paymentservice_title: SystemLang = {
    jp: "決済サービス一覧",
    en: "List of payment services",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static paymentservice_subTitle: SystemLang = {
    jp: "Symbolが使えるサービスを表示",
    en: "See symbol payment accepted service",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static contracts_title: SystemLang = {
    jp: "アドレス帳",
    en: "Address book",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static contracts_subTitle: SystemLang = {
    jp: "登録済みの連絡先を表示",
    en: "Show registered address",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static news_title: SystemLang = {
    jp: "ニュース",
    en: "News",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static news_subTitle: SystemLang = {
    jp: "EXYMやSymbolの最新情報",
    en: "Latest news on EXYM and Symbol",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export class DataCardComponentLang {
  static copy_address_notification: SystemLang = {
    jp: "コピーしました",
    en: "Copied",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}

export class ContractsModalLang {
  static address_format_error_title: SystemLang = {
    jp: "入力エラー",
    en: "Input error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static address_format_error_message: SystemLang = {
    jp: "アドレスの形式が正しくありません。",
    en: "Incorrect address format",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static notmatch_qr_networktype_error_title: SystemLang = {
    jp: "QR読込エラー",
    en: "QR code reading error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static notmatch_qr_networktype_error_message: SystemLang = {
    jp: "現在の接続中のネットワーク種別と読み込んだQRコードに登録されたウォレットのネットワーク種別が異なる為、登録できません。",
    en: "Cannot register due to the network type being connected to. Network type of the wallet registered in the read QR code are different.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_read_error_title: SystemLang = {
    jp: "QR読込エラー",
    en: "QR code reading error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_read_error_message: SystemLang = {
    jp: "QRコードの読み込みに失敗しました。再度お試しください。",
    en: "Failed to read the QR code. Try again.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static fab_title_main: SystemLang = {
    jp: "追加",
    en: "Add",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static fab_title_by_qrcode: SystemLang = {
    jp: "QRコードから登録",
    en: "Register via QR code",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static fab_title_by_manual: SystemLang = {
    jp: "手動で登録",
    en: "Register manually",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static flatlist_no_data: SystemLang = {
    jp: "登録がありません",
    en: "No registration",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static do_search: SystemLang = {
    jp: "検索する",
    en: "Search",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static edit_modal_name: SystemLang = {
    jp: "名前",
    en: "Name",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static edit_modal_address: SystemLang = {
    jp: "Symbolアドレス",
    en: "Symbol address",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static edit_modal_publickey: SystemLang = {
    jp: "Symbol公開鍵",
    en: "Symbol public key",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static edit_modal_note: SystemLang = {
    jp: "メモ",
    en: "Memo",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static edit_modal_save: SystemLang = {
    jp: "保存する",
    en: "Save",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static edit_modal_update: SystemLang = {
    jp: "更新する",
    en: "Update",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static eidt_modal_delete: SystemLang = {
    jp: "削除する",
    en: "Delete",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export class SendByQRModalLang {
  static ok: SystemLang = {
    jp: "OK",
    en: "OK",
    es: "OK",
    it: "OK",
    ko: "OK",
    pl: "OK",
    ru: "OK",
  };
  static network_connection_error_title: SystemLang = {
    jp: "ネットワーク接続エラー",
    en: "Network error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_connection_error_message: SystemLang = {
    jp: "ネットワークへの接続に失敗しました。再度お試しいただくか、時間を開けてお試しください",
    en: "Unable to connect to the network. Try again or take a moment.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static get_privatekey_error_title: SystemLang = {
    jp: "メッセージ暗号化エラー",
    en: "Message encryption error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static get_privatekey_error_message: SystemLang = {
    jp: "メッセージの暗号化を行う為、端末内の秘密鍵の取得を試みましたが失敗しました。再度お試し頂くか、アカウント設定を再度行ってください。",
    en: "Attempts to retrieve the private key in your device to encrypt messages have failed. Try again or set up your account once more.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static get_publickey_error_title: SystemLang = {
    jp: "メッセージ暗号化エラー",
    en: "Message encryption error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static get_publickey_error_message: SystemLang = {
    jp: "送信先アドレスの公開鍵がネットワーク上に存在しませんでした。ウォレット生成直後のアドレスには暗号化メッセージは送信出来ません。",
    en: "The public key for the destination address does not exist on the network. Encrypted messages cannot be sent to the address immediately after the wallet was generated.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static create_transaction_error_title: SystemLang = {
    jp: "トランザクション生成エラー",
    en: "Transaction error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static create_transaction_error_message: SystemLang = {
    jp: "手数料の計算中、もしくはトランザクションの生成中に予期せぬエラーが発生しました。再度お試し頂くか、アカウント設定を再度行ってください",
    en: "An unexpected error occurred during the fees calculation or transaction process. Try again or set up your account once more.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static address_format_error_title: SystemLang = {
    jp: "入力エラー",
    en: "Input error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static address_format_error_message: SystemLang = {
    jp: "入力されたアドレスの形式が正しくありません",
    en: "Incorrect address format",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static minus_balance_error_title: SystemLang = {
    jp: "残高エラー",
    en: "Balance error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static minus_balance_error_message: SystemLang = {
    jp: "保有量を上回っています。送信量を確認してください。",
    en: "Insufficient balance. Check transaction volume.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_duplicated_error_title: SystemLang = {
    jp: "モザイク重複エラー",
    en: "Error mosaic duplication",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_duplicated_error_message: SystemLang = {
    jp: "送信するモザイクが重複しています。モザイク名を確認してください。",
    en: "Mosaics about to be sent are duplicated. Check the mosaics name.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_is_null_error_title: SystemLang = {
    jp: "モザイク名入力エラー",
    en: "Mosaic name input error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_is_null_error_message: SystemLang = {
    jp: "モザイク名が入力されていません。モザイク名を確認してください。",
    en: "The mosaic name has not been input. Check the name.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static amount_is_null_error_title: SystemLang = {
    jp: "送信量入力エラー",
    en: "Transmission amount input error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static amount_is_null_error_message: SystemLang = {
    jp: "送信量が入力されていません。送信量を確認してください。",
    en: "The transmission amount has not been input. Check the amount.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_read_error_title: SystemLang = {
    jp: "QRコード読み取りエラー",
    en: "QR code reading error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_read_error_message: SystemLang = {
    jp: "読み込んだQRコードの形式が正しくありません。送信先アドレスQRコードであることを確認してください。",
    en: "Scanned QR code is an incorrect format. Check destination address QR code.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static point_excess_error_title: SystemLang = {
    jp: "ポイント超過エラー",
    en: "Excess point error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static point_excess_error_message: SystemLang = {
    jp: "ポイントモザイクがsymbol.xymの送信量を超過しました。再度入力し直してください。",
    en: "The point mosaic has exceeded the amount of sending symbol.xym. Enter the amount again.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static total_value_mismatch_error_title: SystemLang = {
    jp: "レート換算エラー",
    en: "Rate conversion error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static total_value_mismatch_error_message: SystemLang = {
    jp: "レート換算したsymbol.xymの数量と一致しません。再度レート換算を実行するか、symbol.xymおよびポイントモザイクの送信量を入力し直してください。",
    en: "The converted  rate and symbol.xym amount are not matched. Try rate conversion again, or enter the symbol.xym and point mosaics transmission amounts once more.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static namespace_non_Legitimate_error_title: SystemLang = {
    jp: "ポイントモザイクエラー",
    en: "Point Mosaic Error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static namespace_non_Legitimate_error_message: SystemLang = {
    jp: "ポイントモザイクを確認できませんでした。「設定」から接続先ノードを変更してください。",
    en: "Could not find point mosaic. Change the connecting node via 'Configuration'.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static recipient_name_notmatch: SystemLang = {
    jp: "一致無し",
    en: "Not applicable",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static recipient_address_title: SystemLang = {
    jp: "送信先アドレス(ハイフン不要)",
    en: "Destination address (no hyphen required)",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static recipient_address_placeholder: SystemLang = {
    jp: "相手のアドレスを入力してください",
    en: "Enter the destination address",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static recipient_address_hitname: SystemLang = {
    jp: "連絡帳登録名：",
    en: "Contact list name",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic: SystemLang = {
    jp: "送信するモザイク",
    en: "Mosaic to send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_name: SystemLang = {
    jp: "モザイク名",
    en: "Mosaic name",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_stock: SystemLang = {
    jp: "保有量：",
    en: "Holding amount：",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_amount_title: SystemLang = {
    jp: "送信量",
    en: "Sending amount",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_amount_placeholder: SystemLang = {
    jp: "送信する数量を入力してください",
    en: "Enter the sending amount",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_title: SystemLang = {
    jp: "メッセージ",
    en: "Message",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_placeholder: SystemLang = {
    jp: "メッセージを入力してください",
    en: "Enter the message",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static select_commision_title: SystemLang = {
    jp: "手数料を選択",
    en: "Select transaction fee",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static select_commision_average: SystemLang = {
    jp: "平均",
    en: "Average",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static select_commision_slow: SystemLang = {
    jp: "遅い",
    en: "Slow",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static select_commision_fast: SystemLang = {
    jp: "速い",
    en: "Fast",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static commition_remark_1: SystemLang = {
    jp: "表示されている数字は手数料最大値の予測となります。",
    en: "",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static commition_remark_2: SystemLang = {
    jp: "表示された手数料を保証するものではありません。",
    en: "The fee shown is projections of the maximum fee.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_submit: SystemLang = {
    jp: "確認する",
    en: "Confirm",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_title: SystemLang = {
    jp: "以下で送信を確定します",
    en: "To confirm transaction with the following information.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_body: SystemLang = {
    jp: "取り消しは出来ません。よろしいですか？",
    en: "It cannot be revoked. Is that OK?",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static warning_title: SystemLang = {
    jp: "ご確認ください",
    en: "Please confirm",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_waring_message: SystemLang = {
    jp: "送信量が保有資産の80％を超えています。詐欺の可能性を強く疑ってください。本当に送金してもよろしいですか？",
    en: "The amount of transaction about to send exceeds 80% of the assets held. You should strongly suspect a possibility of being scammed. Are you sure about sending them?",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_recipient: SystemLang = {
    jp: "送信先",
    en: "Address you send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static price: SystemLang = {
    jp: "支払い金額",
    en: "Amount of payment",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_mosaic: SystemLang = {
    jp: "送信するモザイク",
    en: "Mosaic to send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_amount: SystemLang = {
    jp: "送信量",
    en: "Sending amount",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_crypted: SystemLang = {
    jp: "暗号化",
    en: "Encryption",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_commision: SystemLang = {
    jp: "手数料",
    en: "Fee",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_crypted_do: SystemLang = {
    jp: "する",
    en: "Encrypted",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_crypted_not_do: SystemLang = {
    jp: "しない",
    en: "Not encrypted",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static sendcomfirmmodal_checksendcontent: SystemLang = {
    jp: "送金内容を確認しました。",
    en: "Transaction details confirmed.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_cancel: SystemLang = {
    jp: "キャンセル",
    en: "Cancel",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_submit: SystemLang = {
    jp: "送信する",
    en: "Send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_submit_auth: SystemLang = {
    jp: "送信を実行します",
    en: "Execute transaction",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static common_require: SystemLang = {
    jp: "必 須",
    en: "Required",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static common_optional: SystemLang = {
    jp: "任 意",
    en: "Optional",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static update_sendlist: SystemLang = {
    jp: "モザイク一覧を更新しました。",
    en: "Updated mosaic list.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static exchange_title: SystemLang = {
    jp: "日本円から計算する",
    en: "Calculate from Japanese yen",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static exchange: SystemLang = {
    jp: "レート換算",
    en: "Rate conversion",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static exchange_placeholder: SystemLang = {
    jp: "日本円の金額を入力してください",
    en: "Enter the amount in Japanese yen",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static currency_mark: SystemLang = {
    jp: "￥",
    en: "￥",
    es: "￥",
    it: "￥",
    ko: "￥",
    pl: "￥",
    ru: "￥",
  };
  static currency: SystemLang = {
    jp: "日本円",
    en: "Japanese Yen",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static xym: SystemLang = {
    jp: "XYM",
    en: "XYM",
    es: "XYM",
    it: "XYM",
    ko: "XYM",
    pl: "XYM",
    ru: "XYM",
  }
  static input_password: SystemLang = {
    jp: "パスワード",
    en: "Password",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  }
  static input_password_placeholder: SystemLang = {
    jp: "パスワードを入力してください",
    en: "Enter password",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  }

}

export class SendModalLang {
  static ok: SystemLang = {
    jp: "OK",
    en: "OK",
    es: "OK",
    it: "OK",
    ko: "OK",
    pl: "OK",
    ru: "OK",
  };
  static network_connection_error_title: SystemLang = {
    jp: "ネットワーク接続エラー",
    en: "Network error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_connection_error_message: SystemLang = {
    jp: "ネットワークへの接続に失敗しました。再度お試しいただくか、時間を開けてお試しください",
    en: "Unable to connect to the network. Try again or take a moment.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static get_privatekey_error_title: SystemLang = {
    jp: "メッセージ暗号化エラー",
    en: "Message encryption error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static get_privatekey_error_message: SystemLang = {
    jp: "メッセージの暗号化を行う為、端末内の秘密鍵の取得を試みましたが失敗しました。再度お試し頂くか、アカウント設定を再度行ってください",
    en: "Attempts to retrieve the private key in your device to encrypt messages have failed. Try again or set up your account once more.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static get_publickey_error_title: SystemLang = {
    jp: "メッセージ暗号化エラー",
    en: "Message encryption error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static get_publickey_error_message: SystemLang = {
    jp: "送信先アドレスの公開鍵がネットワーク上に存在しませんでした。ウォレット生成直後のアドレスには暗号化メッセージは送信出来ません。",
    en: "The public key for the destination address does not exist on the network. Encrypted messages cannot be sent to the address immediately after the wallet was generated.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static create_transaction_error_title: SystemLang = {
    jp: "トランザクション生成エラー",
    en: "Transaction error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static create_transaction_error_message: SystemLang = {
    jp: "手数料の計算中、もしくはトランザクションの生成中に予期せぬエラーが発生しました。再度お試し頂くか、アカウント設定を再度行ってください",
    en: "An unexpected error occurred during the fees calculation or transaction process. Try again or set up your account ",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static address_format_error_title: SystemLang = {
    jp: "入力エラー",
    en: "Input error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static address_format_error_message: SystemLang = {
    jp: "入力されたアドレスの形式が正しくありません。",
    en: "Incorrect address format",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static minus_balance_error_title: SystemLang = {
    jp: "残高エラー",
    en: "Balance error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static minus_balance_error_message: SystemLang = {
    jp: "保有量を上回っています。送信量を確認してください。",
    en: "Insufficient balance. Check transaction volume.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_duplicated_error_title: SystemLang = {
    jp: "モザイク重複エラー",
    en: "Error mosaic duplication",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_duplicated_error_message: SystemLang = {
    jp: "送信するモザイクが重複しています。モザイク名を確認してください。",
    en: "Error mosaic duplication to be sent. Check the name.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_is_null_error_title: SystemLang = {
    jp: "モザイク名入力エラー",
    en: "Mosaic name input error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_is_null_error_message: SystemLang = {
    jp: "モザイク名が入力されていません。モザイク名を確認してください。",
    en: "The mosaic name has not been input. Check the name.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static amount_is_null_error_title: SystemLang = {
    jp: "送信量入力エラー",
    en: "Transmission amount input error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static amount_is_null_error_message: SystemLang = {
    jp: "送信量が入力されていません。送信量を確認してください。",
    en: "The transmission amount has not been input. Check the amount.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_read_error_title: SystemLang = {
    jp: "QRコード読み取りエラー",
    en: "QR code reading error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_read_error_message: SystemLang = {
    jp: "読み込んだQRコードの形式が正しくありません。送信先アドレスQRコードであることを確認してください。",
    en: "Scanned QR code is an incorrect format. Check destination address QR code.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static point_excess_error_title: SystemLang = {
    jp: "ポイント超過エラー",
    en: "Excess point error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static point_excess_error_message: SystemLang = {
    jp: "ポイントモザイクがsymbol.xymの送信量を超過しました。再度入力してください。",
    en: "The point mosaic has exceeded the amount of sending symbol.xym. Enter the amount again.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static total_value_mismatch_error_title: SystemLang = {
    jp: "レート換算エラー",
    en: "Rate conversion error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static total_value_mismatch_error_message: SystemLang = {
    jp: "レート換算したsymbol.xymの数量と一致しません。再度レート換算を実行するか、symbol.xymおよびポイントモザイクの送信量を入力し直してください。",
    en: "The converted rate and symbol.xym amount are not matched. Try rate conversion again, or enter the symbol.xym and point mosaics transmission amounts once more.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static namespace_non_Legitimate_error_title: SystemLang = {
    jp: "ポイントモザイクエラー",
    en: "Point Mosaic Error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static namespace_non_Legitimate_error_message: SystemLang = {
    jp: "ポイントモザイクを確認できませんでした。「設定」から接続先ノードを変更してください。",
    en: "Could not find point mosaic. Change the connecting node via 'Configuration.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static recipient_name_notmatch: SystemLang = {
    jp: "該当なし",
    en: "Not applicable",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static recipient_address_title: SystemLang = {
    jp: "送信先アドレス(ハイフン不要)",
    en: "Destination address (no hyphen required)",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static recipient_address_placeholder: SystemLang = {
    jp: "相手のアドレスを入力してください",
    en: "Enter the destination address",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static recipient_address_hitname: SystemLang = {
    jp: "連絡帳登録名：",
    en: "Contact list name",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic: SystemLang = {
    jp: "送信するモザイク",
    en: "Mosaic to send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_name: SystemLang = {
    jp: "モザイク名",
    en: "Mosaic name",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_stock: SystemLang = {
    jp: "保有量：",
    en: "Holding amount",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_amount_title: SystemLang = {
    jp: "送信量",
    en: "Sending amount",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mosaic_amount_placeholder: SystemLang = {
    jp: "送信する数量を入力してください",
    en: "Enter the sending amount",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_title: SystemLang = {
    jp: "メッセージ",
    en: "Message",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static message_placeholder: SystemLang = {
    jp: "メッセージを入力してください",
    en: "Enter the message",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static select_commision_title: SystemLang = {
    jp: "手数料を選択",
    en: "Select transaction fee",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static select_commision_average: SystemLang = {
    jp: "平均",
    en: "Average",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static select_commision_slow: SystemLang = {
    jp: "遅い",
    en: "Slow",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static select_commision_fast: SystemLang = {
    jp: "速い",
    en: "Fast",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static commition_remark_1: SystemLang = {
    jp: "表示されている数字は手数料最大値の予測となります。",
    en: "The fee shown is projections of the maximum fee.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static commition_remark_2: SystemLang = {
    jp: "表示された手数料を保証するものではありません。",
    en: "The fee shown is approximate and does not guarantee the transaction fee.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_submit: SystemLang = {
    jp: "確認する",
    en: "Confirm",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_title: SystemLang = {
    jp: "以下で送信を確定します",
    en: "Confirm the transaction below",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_body: SystemLang = {
    jp: "取り消しは出来ません。よろしいですか？",
    en: "It cannot be revoked. Is that OK?",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static warning_title: SystemLang = {
    jp: "ご確認ください",
    en: "Please confirm",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_waring_message: SystemLang = {
    jp: "送信量が保有資産の80％を超えています。詐欺の可能性を強く疑ってください。本当に送金してもよろしいですか？",
    en: "The amount of transaction about to send exceeds 80% of the assets held. You should strongly suspect a possibility of being scammed. Are you sure about sending them?",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_recipient: SystemLang = {
    jp: "送信先",
    en: "Address you send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static price: SystemLang = {
    jp: "支払い金額",
    en: "Amount of payment",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_mosaic: SystemLang = {
    jp: "送信するモザイク",
    en: "Mosaic to send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_amount: SystemLang = {
    jp: "送信量",
    en: "Sending amount",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_crypted: SystemLang = {
    jp: "暗号化",
    en: "Encryption",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_commision: SystemLang = {
    jp: "手数料",
    en: "Fee",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_crypted_do: SystemLang = {
    jp: "する",
    en: "Encrypted",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_crypted_not_do: SystemLang = {
    jp: "しない",
    en: "Not encrypted",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static sendcomfirmmodal_checksendcontent: SystemLang = {
    jp: "送金内容を確認しました。",
    en: "Transaction details confirmed.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_cancel: SystemLang = {
    jp: "キャンセル",
    en: "Cancel",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_submit: SystemLang = {
    jp: "送信する",
    en: "Send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_check_modal_submit_auth: SystemLang = {
    jp: "送信を実行します",
    en: "Execute transaction",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static contract_select_modal_wallet_select_title: SystemLang = {
    jp: "送信先のウォレットを選択",
    en: "Select the wallet sending to",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static contract_select_modal_wallet_search_placeholder: SystemLang = {
    jp: "検索する",
    en: "Search",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static contract_select_modal_wallet_no_data: SystemLang = {
    jp: "登録がありません",
    en: "No registration",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static common_require: SystemLang = {
    jp: "必 須",
    en: "Required",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static common_optional: SystemLang = {
    jp: "任 意",
    en: "Optional",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static update_sendlist: SystemLang = {
    jp: "モザイク一覧を更新しました。",
    en: "Updated mosaic list.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static exchange_title: SystemLang = {
    jp: "日本円から計算する",
    en: "Calculate from Japanese yen",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static exchange: SystemLang = {
    jp: "レート換算",
    en: "Rate conversion",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static exchange_placeholder: SystemLang = {
    jp: "日本円の金額を入力してください",
    en: "Enter the amount in Japanese yen",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static currency_mark: SystemLang = {
    jp: "￥",
    en: "￥",
    es: "￥",
    it: "￥",
    ko: "￥",
    pl: "￥",
    ru: "￥",
  };
  static currency: SystemLang = {
    jp: "日本円",
    en: "Japanese Yen",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static xym: SystemLang = {
    jp: "XYM",
    en: "XYM",
    es: "XYM",
    it: "XYM",
    ko: "XYM",
    pl: "XYM",
    ru: "XYM",
  };
  static input_password: SystemLang = {
    jp: "パスワード",
    en: "Password",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_placeholder: SystemLang = {
    jp: "パスワードを入力してください",
    en: "Enter password",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export class ReceiveModalLang {
  static ok: SystemLang = {
    jp: "OK",
    en: "OK",
    es: "OK",
    it: "OK",
    ko: "OK",
    pl: "OK",
    ru: "OK",
  };
  static node_connect_title: SystemLang = {
    jp: "通信エラー",
    en: "Error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static node_connect_msg: SystemLang = {
    jp: "ノードへの接続に失敗しました。通信状況を確認するか、接続先ノードを変更して下さい",
    en: "Unable to connect to node. Please check your network connection or try again later.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_mosaic_number_title: SystemLang = {
    jp: "受け取るsymbol.xym数量",
    en: "Amount of symbols.xym to be received",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_mosaic_number_placeholder: SystemLang = {
    jp: "symbol.xym数量を入力してください",
    en: "Enter the amount of symbol.xym",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static exchange_title: SystemLang = {
    jp: "日本円から計算する",
    en: "Calculate from Japanese yen",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static exchange: SystemLang = {
    jp: "レート換算",
    en: "Rate conversion",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static exchange_placeholder: SystemLang = {
    jp: "日本円の金額を入力してください",
    en: "Enter the amount in Japanese yen",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static currency_mark: SystemLang = {
    jp: "￥",
    en: "￥",
    es: "￥",
    it: "￥",
    ko: "￥",
    pl: "￥",
    ru: "￥",
  };
  static currency: SystemLang = {
    jp: "日本円",
    en: "Japanese Yen",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_message_title: SystemLang = {
    jp: "メッセージ",
    en: "Message",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_message_placeholder: SystemLang = {
    jp: "メッセージを記入してください",
    en: "Enter the message",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static submit_btn: SystemLang = {
    jp: "QRコードを更新する",
    en: "Reload QR code",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static copy_address_notification: SystemLang = {
    jp: "コピーしました",
    en: "Copied",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}

export class PaidModalLang {
  static reception_completed_title: SystemLang = {
    jp: "送信受付完了",
    en: "Transaction acceptance complete",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static reception_completed_message1: SystemLang = {
    jp: "処理が完了すると通知が届きます。",
    en: "You will receive a notification when the process is complete.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static reception_completed_message2: SystemLang = {
    jp: "履歴からもご確認いただけます。",
    en: "You can also check it from history.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static destination_title: SystemLang = {
    jp: "宛先",
    en: "Destination",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static back_home_btn: SystemLang = {
    jp: "戻る",
    en: "Back",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}

export class PaymentMenuLang {
  static payment: SystemLang = {
    jp: "決　済",
    en: "Payment",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static sendbyqrmodal: SystemLang = {
    jp: "QRスキャン",
    en: "QR scan",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static sendmodal: SystemLang = {
    jp: "送　信",
    en: "Send",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static receivemodal: SystemLang = {
    jp: "受　取",
    en: "Receive",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static pair: SystemLang = {
    jp: "XYM/JPY",
    en: "XYM/USD",
    es: "XYM/USD",
    it: "XYM/USD",
    ko: "XYM/USD",
    pl: "XYM/USD",
    ru: "XYM/USD",
  };
  static wallet_name: SystemLang = {
    jp: "ウォレット名",
    en: "Wallet name",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}
