
@load_module name=ModTypingProcessor
@load_module name=ModSLG
@load_module name=ModSaveLoadMenuItems
@load_module name=ModSystemMenuItems

*start|
@start_anchor

;@ask_close base_storage=YesNoBase yes=button yes_left=50 yes_top=150 no=button no_left=150 no_top=150

@que storage=ModRightClickTest
@que storage=ModADVTest
@que storage=ModMessageTest
@que storage=ModBookmark
@que storage=ModSoundTest
@que storage=ModImageTest
@que storage=ModVideoTest
@que storage=ModTypingProcessorTest
@que storage=ModSLGTest

@que storage=endoftest


