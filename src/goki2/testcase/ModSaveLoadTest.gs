
*label|
; 出力先をModMessageにする
; これをしないとメッセージが表示されません
@using_mod_message

@show_message layer=message0
@wait_show_message layer=message0

*label|
セーブロードのテストです。[p][cm]

@hide_message layer=message0
@wait_hide_message layer=message0


