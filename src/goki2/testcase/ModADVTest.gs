
; 出力先をModADVにする
; これをしないと立ち絵が表示されなかったりします
@using_mod_adv

; 改行コードをrタグとして扱う
@cr_handling !ignore

*label|
;@show_current_message_layer
;@wait_show_current_message

; 立ち絵を表示する
@ハロ ポーズ１ 表情１ 中 表示

;@cursor default_cursor=&crCross

[ハロ]メッセージのテストです。
[ruby text=かいぎょう]改行します。

*label|
@ハロ ポーズ２ 表情１

[ハロ no_voice]ポーズ２を表示します。
改行します。
改行します。

*label|
; 時間帯を指定する
; 詳しくは/src/goki2/system/config.gsを参照
@夕
@ハロ ポーズ２ 表情１

[ハロ]履歴を埋めます。

*label|
[cancelautomode]
@夜
@ハロ ポーズ２ 表情１

[ハロ]履歴を埋めます２。

*label|
@朝
@黒

[ハロ]履歴を埋めます３。

*label|
@白
[ハロ]履歴を埋めます４。

*label|
@赤
[ハロ]履歴を埋めます５。

*label|
[ハロ]履歴を埋めます６。

*label|
[ハロ]履歴を埋めます７。

*label|
[ハロ]履歴を埋めます８。

*label|
[cancelskip]
[ハロ]履歴を埋めます９。

*label|
[ハロ]履歴を埋めます１０。

*label|
@黒
@ハロ 消去

[ハロ]テスト終了です。

@hide_current_message_layer
@wait_hide_current_message
; 出力先を元に戻す
@not_using_mod_adv


