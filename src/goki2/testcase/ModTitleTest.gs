; タイトル画面のテスト

*label|
@title_option click_sound=se001.ogg enter_sound=se002.ogg
@title_screen start_caption=スタート start_left=370 start_top=400 start_width=60 start_height=20 start_target=*start
@title_screen load_caption=ロード load_left=370 load_top=430 load_width=60 load_height=20
@title_screen cgmemory_caption=CG/回想 cgmemory_left=370 cgmemory_top=460 cgmemory_width=60 cgmemory_height=20
@title_screen system_caption=システム system_left=370 system_top=490 system_width=60 system_height=20
@title_screen exit_caption=終了 exit_left=370 exit_top=520 exit_width=60 exit_height=20 exit_target=*exit

@title_screen show
@s


*exit
@close !ask

*start


