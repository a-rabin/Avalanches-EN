;/*
; * $Revision$
;**/

*label|

@show_message layer=message0

;@click_skip !enabled
*label|
@fadeinbgm storage=bgm001.ogg time=2000
ＢＧＭを再生しました。[p][cm]

*label|
ＢＧＭ再生中です。[p][cm]

*label|
@pausebgm
ＢＧＭを一時停止しました。[p][cm]

*label|
@resumebgm
ＢＧＭを再開しました。[p][cm]

*label|
@playse buf=0 storage=se001
ＳＥを再生しました。[p][cm]

*label|
@playse buf=0 storage=se001 loop
ＳＥをループ再生します。[p][cm]

*label|
@stopse buf=0
ＳＥを停止します。[p][cm]

*label|
@fadeoutbgm time=2000
ＢＧＭを停止しました。[p][cm]

@hide_message layer=message0

@log message="テスト終了しました。"


