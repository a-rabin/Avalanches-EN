*start|
@start_anchor

[if exp="global.productInfo.language == 'jp'"]
;@ask_close base_storage=YesNoBase yes=button yes_left=50 yes_top=150 no=button no_left=150 no_top=150
@ask_close confirm_caption=次回からは確認しない
@ask_start confirm_caption=次回からは確認しない
@ask_record confirm_caption=次回からは確認しない
@ask_save confirm_caption=次回からは確認しない
@system_menu skip_menu auto_mode_menu next_skip_menu message_hide_menu history_menu record_menu go_back_title_menu full_screen_menu exit_menu
@saveload_menu save_menu load_menu
;@message_menu message_speed_menu message_speed_no_wait_menu message_speed_high_menu message_speed_normal_menu message_speed_low_menu reading_message_speed_menu reading_message_speed_no_wait_menu reading_message_speed_high_menu reading_message_speed_normal_menu reading_message_speed_low_menu

@que storage=ModTitleTest
@que storage=ModSelectTest
@que storage=ModRightClickTest
@que storage=ModADVTest
@que storage=ModMessageTest
@que storage=ModBookmark
@que storage=ModSoundTest
@que storage=ModImageTest
@que storage=ModVideoTest
@que storage=ModTypingProcessorTest
@que storage=ModSLGTest
[elsif exp="global.productInfo.language == 'en'"]
;@ask_close base_storage=YesNoBase yes=button yes_left=50 yes_top=150 no=button no_left=150 no_top=150
@ask_close confirm_caption="I won't check next time"
@ask_start confirm_caption="I won't check next time"
@ask_record confirm_caption="I won't check next time"
@ask_save confirm_caption="I won't check next time"
@system_menu skip_menu auto_mode_menu next_skip_menu message_hide_menu history_menu record_menu go_back_title_menu full_screen_menu exit_menu
@saveload_menu save_menu load_menu
;@message_menu message_speed_menu message_speed_no_wait_menu message_speed_high_menu message_speed_normal_menu message_speed_low_menu reading_message_speed_menu reading_message_speed_no_wait_menu reading_message_speed_high_menu reading_message_speed_normal_menu reading_message_speed_low_menu

@que storage=ModTitleTestEn
@que storage=ModSelectTestEn
@que storage=ModRightClickTestEn
@que storage=ModADVTestEn
@que storage=ModMessageTestEn
@que storage=ModBookmarkEn
@que storage=ModSoundTestEn
@que storage=ModImageTestEn
@que storage=ModVideoTestEn
@que storage=ModTypingProcessorTestEn
@que storage=ModSLGTestEn
[endif]

@que storage=endoftest


