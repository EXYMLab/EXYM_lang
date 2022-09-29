import { SystemLang } from "../models/SystemStructure";

export class MissAuthLang {
  static miss_auth_message: SystemLang = {
    jp: "認証してください。",
    en: "Authentication required",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };

}

export class StartPageLang {
  static startpage_welcome: SystemLang = {
    jp: "EXYMへようこそ！",
    en: "Welcome to EXYM!",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static startpage_startbutton: SystemLang = {
    jp: "ウォレットを作成",
    en: "Create wallet",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export class SetAccountNameLang {
  static top_message1: SystemLang = {
    jp: "ウォレットの名前を決めましょう",
    en: "Name your wallet",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static top_message2: SystemLang = {
    jp: "例：個人用ウォレット",
    en: "E.g. personal wallet",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static next_button: SystemLang = {
    jp: "次へ",
    en: "Next",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static back_button: SystemLang = {
    jp: "戻る",
    en: "Back",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_connect_error_title: SystemLang = {
    jp: "ネットワークに接続エラー",
    en: "Network error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_connect_error_message: SystemLang = {
    jp: "ネットワークへ接続出来ませんでした。時間を置いてお試し頂くか、電波の良い所で改めてご利用ください",
    en: "Unable to connect to the network. Please check your network connection or try again later.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export class SetNetworkTypeLang {
  static top_message1: SystemLang = {
    "jp": "接続するネットワークを\n選択しましょう",
    en: "Select the network \n to connect with",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mainnet: SystemLang = {
    "jp": "メインネット",
    en: "Mainnet",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static testnet: SystemLang = {
    "jp": "テストネット",
    en: "Testnet",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static description: SystemLang = {
    jp: "通常はメインネットを選択",
    en: "Usually select mainnet",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static next_button: SystemLang = {
    jp: "次へ",
    en: "Next",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static back_button: SystemLang = {
    jp: "戻る",
    en: "Back",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export class SelectCreateModeLang {
  static description: SystemLang = {
    jp: "既にウォレットをお持ちの方は復元を、それ以外の方は新規を選択ください",
    en: "If you already have a wallet, recover it with secret keys, otherwise select create wallet.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static import_privatekey: SystemLang = {
    jp: "秘密鍵から復元",
    en: "Recover with secret keys",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static import_mnemonic: SystemLang = {
    jp: "ニーモニックから復元",
    en: "Recover with mnemonic",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static import_button: SystemLang = {
    jp: "復元",
    en: "Recovering",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static new_button: SystemLang = {
    jp: "新規ウォレットの作成",
    en: "Create new wallet",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static back_button: SystemLang = {
    jp: "戻る",
    en: "Back",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export class SignUpIssueAccountLang {
  static ok: SystemLang = {
    jp: "OK",
    en: "OK",
    es: "OK",
    it: "OK",
    ko: "OK",
    pl: "OK",
    ru: "OK",
  };
  static top_message: SystemLang = {
    jp: "ニーモニックフレーズを保存しましょう。",
    en: "Save mnemonic phrases safely.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static generating: SystemLang = {
    jp: "生成中...",
    en: "Processing...",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_message: SystemLang = {
    jp: "EXYM内でニーモニックを暗号化するパスワードを設定してください。",
    en: "Set a password to encrypt the mnemonic within EXYM.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_caution: SystemLang = {
    jp: "※半角英数字8文字以上",
    en: "Numbers and letters more than 8 characters",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_placeholder: SystemLang = {
    jp: "パスワードを入力",
    en: "Enter password",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  }
  static do_copy: SystemLang = {
    jp: "コピーする",
    en: "Copy",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static precautions: SystemLang = {
    jp: "・この情報は絶対に秘密にしてください。他人に教えた場合、資産が失われる可能性があります。\n・必ず別の場所に保存してください。端末の機種変更やアプリの再インストール等、アカウントを復元する際に必要となります。",
    en: "・This information must be saved completely confidential. \n If you share this information with others, you would possibly lose your assets \n・Be sure to keep it in a separate safety location. \n This information is required when recovering your account, \n e.g. when changing the device or reinstalling the EXYM app.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static save_check: SystemLang = {
    jp: "保存しましたか？",
    en: "Have you saved it?",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static new_button: SystemLang = {
    jp: "次へ",
    en: "Next",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static back_button: SystemLang = {
    jp: "戻る",
    en: "Back",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_connect_error_title: SystemLang = {
    jp: "ネットワーク接続エラー",
    en: "Network error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_connect_error_message: SystemLang = {
    jp: "ネットワークへの接続設定が正しく行われませんでした。ネットワーク種別選択画面に戻り、やり直してください。",
    en: "The connection to the network failed. Back to the network type selection and try again.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static wallet_create_error_title: SystemLang = {
    jp: "ウォレット作成エラー",
    en: "Wallet creation error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static wallet_create_error_message: SystemLang = {
    jp: "ウォレットの作成に失敗しました。アプリを再起動しやり直してください。",
    en: "Wallet creation failed. Reboot the app and try again.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static mnemonic_copy: SystemLang = {
    jp: "コピーしました",
    en: "Copied",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static warning_title: SystemLang = {
    jp: "必ずお読みください",
    en: "Please read carefully",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export class SignInSetPrivateKeyLang {
  static ok: SystemLang = {
    jp: "OK",
    en: "OK",
    es: "OK",
    it: "OK",
    ko: "OK",
    pl: "OK",
    ru: "OK",
  };
  static input_privatekey_message: SystemLang = {
    jp: "所有しているウォレットの秘密鍵を入力してください",
    en: "Enter the private key of your wallet",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_privatekey_placeholder: SystemLang = {
    jp: "秘密鍵を入力",
    en: "Enter the private key",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_message: SystemLang = {
    jp: "EXYM内で秘密鍵を暗号化するパスワードを設定してください。",
    en: "Set a password to encrypt the secret key within EXYM.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_caution: SystemLang = {
    jp: "※半角英数字8文字以上",
    en: "Numbers and letters more than 8 characters",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_placeholder: SystemLang = {
    jp: "パスワードを入力",
    en: "Enter password",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  }
  static network_connect_error_title: SystemLang = {
    jp: "ネットワーク接続エラー",
    en: "Network error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_connect_error_message: SystemLang = {
    jp: "ネットワークへ接続出来ませんでした。\n時間を置いてお試し頂くか、電波の良い所で改めてご利用ください。",
    en: "Unable to connect to the network. Please check your network connection or try again later.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_defferenct_type_error_title: SystemLang = {
    jp: "ネットワークエラー",
    en: "Network error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_defferenct_type_error_message: SystemLang = {
    jp: "取込んだ秘密鍵のネットワーク種別と選択されたネットワーク種別が異なります。正しいネットワーク種別を選択してください。",
    en: "The network type of the imported secret key and the selected network type are different. Select the correct network type.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static account_already_exists_error_title: SystemLang = {
    jp: "アカウント読込エラー",
    en: "Account read error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static account_already_exists_error_message: SystemLang = {
    jp: "読み込んだアカウントは既に端末内に存在します。別のQRコードを読み取ってください。",
    en: "The account you have read already exists in the device. Scan another QR code.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_filed_load_error_title: SystemLang = {
    jp: "QRコード読取失敗エラー",
    en: "QR code reading failure error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_filed_load_error_message: SystemLang = {
    jp: "QRコードの読取に失敗しました。再度読み込みをお試し頂くか、読み込んだQRコードの形式が正しいことをご確認ください。",
    en: "Failed to read the QR code. Try again or check the scanned QR code is in correct format.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static avator_create_error_title: SystemLang = {
    jp: "エラー",
    en: "Error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static avator_create_error_message: SystemLang = {
    jp: "アカウントの生成に失敗しました。操作をやり直してください。",
    en: "Account generation failed. Please try the operation again.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static next_button: SystemLang = {
    jp: "次へ",
    en: "Next",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static back_button: SystemLang = {
    jp: "戻る",
    en: "Back",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}

export class SignInSetMnemonicLang {
  static ok: SystemLang = {
    jp: "OK",
    en: "OK",
    es: "OK",
    it: "OK",
    ko: "OK",
    pl: "OK",
    ru: "OK",
  };
  static input_mnemonic_message: SystemLang = {
    jp: "復元したいアカウントのニーモニックを入力してください。",
    en: "Enter the mnemonic of the account you wish to restore.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_mnemonic_placeholder: SystemLang = {
    jp: "ニーモニックを入力",
    en: "Enter the mnemonic",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_message: SystemLang = {
    jp: "EXYM内でニーモニックを暗号化するパスワードを設定してください。",
    en: "Set a password to encrypt the mnemonic within EXYM.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_caution: SystemLang = {
    jp: "※半角英数字8文字以上",
    en: "Numbers and letters more than 8 characters",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static input_password_placeholder: SystemLang = {
    jp: "パスワードを入力",
    en: "Enter password",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  }
  static network_connect_error_title: SystemLang = {
    jp: "ネットワーク接続エラー",
    en: "Network error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_connect_error_message: SystemLang = {
    jp: "ネットワークへ接続出来ませんでした。\n時間を置いてお試し頂くか、電波の良い所で改めてご利用ください。",
    en: "Unable to connect to the network. \n Please check your network connection or try again later",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_defferenct_type_error_title: SystemLang = {
    jp: "ネットワークエラー",
    en: "Network error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static network_defferenct_type_error_message: SystemLang = {
    jp: "取込んだ秘密鍵のネットワーク種別と選択されたネットワーク種別が異なります。正しいネットワーク種別を選択してください。",
    en: "The network type of the imported secret key and the selected network type are different. Select the correct network type.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static account_already_exists_error_title: SystemLang = {
    jp: "アカウント読込エラー",
    en: "Account read error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static account_already_exists_error_message: SystemLang = {
    jp: "読み込んだアカウントは既に端末内に存在します。別のQRコードを読み取ってください。",
    en: "The account you have read already exists in the device. Scan another QR code.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_filed_load_error_title: SystemLang = {
    jp: "QRコード読取失敗エラー",
    en: "QR code reading failure error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static qrcode_filed_load_error_message: SystemLang = {
    jp: "QRコードの読取に失敗しました。再度読み込みをお試し頂くか、読み込んだQRコードの形式が正しいことをご確認ください。",
    en: "Failed to read the QR code. Try again or check the scanned QR code is in correct format.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static avator_create_error_title: SystemLang = {
    jp: "エラー",
    en: "Error",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static avator_create_error_message: SystemLang = {
    jp: "アカウントの生成に失敗しました。操作をやり直してください。",
    en: "Account generation failed. Please try the operation again.",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static next_button: SystemLang = {
    jp: "次へ",
    en: "Next",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
  static back_button: SystemLang = {
    jp: "戻る",
    en: "Back",
    es: "",
    it: "",
    ko: "",
    pl: "",
    ru: "",
  };
}
