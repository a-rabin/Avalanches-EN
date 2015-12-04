#!/usr/bin/ruby -w
# -*- coding: cp932 -*-

#/**
# *

def show_usage
	puts <<EOS
Synopsis:
 ruby #{File.basename(__FILE__)} INPUT_FILE [Options]

Example:
 ruby #{File.basename(__FILE__)} .\words.ods

Description:
 INPUT_FILE を読み込んで吉里吉里の Dictionary 形式でファイルを出力します。

Options:
 --configuration-file
 --cf
  設定ファイルを指定します。
  設定ファイルは Windows INI file フォーマットです。
  デフォルトの設定ファイルは config.ini です。

 -help
 -h
  使い方の詳細（このテキスト）を表示します。

 -ignore-nil
  空のセルを無視します。

 -ignore-nil-row
  空のセルだけの行を無視します。

 --output-encoding
  出力されるテキストの文字エンコーディングを指定します。
  指定できるエンコーディングの名前のリストは下記コマンドで得る事ができます。
  デフォルトの文字エンコーディングは CP932 です。

   #ruby -e "puts Encoding.name_list"

 --output-path
 --o
  出力先を指定します。
  デフォルトの出力先はカレントディレクトリです。

 -vervose
 -v
  変換の詳細を出力します。
EOS
end

# *
# * Global settings

# カレント
pwd = '.'
# 環境ルート
root_dir = "#{pwd}/../../.."
# 設定ファイル
configuration_file = "#{pwd}/config.ini"
# 空のセルと空の行の扱い
ignore_nil = false
ignore_nil_row = false
# 入力ファイル
input_file = nil
# 出力のエンコーディング方式
output_file_encoding = __ENCODING__
# 出力先
output_dir = "#{pwd}"

# ファイルヘッダ
header = <<EOT
/**
 * !!!! Warning !!!!
 *
 * This file was generated by #{File.basename(__FILE__)}.
 * Don't edit directly this file.
**/

EOT

# ruby 用共有モジュールへのパス
common_module_dir = "#{root_dir}/src/common/ruby"

$: << "#{common_module_dir}"

verbose = false

# *
#**/


require "inifile.rb"

require 'mod_utils.rb'
require 'mod_cmd_params.rb'
require 'mod_convxlsx.rb'


cmdp = CmdParam.new(ARGV)

if(cmdp['-help'] || cmdp['-h'])
	show_usage()
	exit
end

verbose = (cmdp['-verbose'] || cmdp['-v'])
MakeUtils.verbose = verbose

if(cmdp['--output-encoding'] != nil)

	begin
		output_file_encoding = Encoding.find(cmdp['--output-encoding'])
	rescue ArgumentError
		puts 'Error:'
		puts " #{$!.message}"
		puts " --output-encoding=#{cmdp['--output-encoding']}"
		puts '--------------'
		exit
	end

end

if(cmdp['@'] == nil)
	puts 'Error:'
	puts ' 入力ファイルが指定されていません。'
	puts ''
	exit
end
input_file = cmdp['@'].gsub(/\\/, '/')

# --configuration-file オプション名義の方を優先
configuration_file = cmdp['--cf'] if cmdp['--cf'] != nil
configuration_file = cmdp['--configuration-file'] if cmdp['--configuration-file'] != nil
configuration_file = configuration_file.gsub(/\\/, '/')

ignore_nil = cmdp['-ignore-nil'] if cmdp['-ignore-nil'] != nil
ignore_nil_row = cmdp['-ignore-nil-row'] if cmdp['-ignore-nil-row'] != nil

# --output-path オプション名義の方を優先
output_dir = cmdp['--o'] if cmdp['--o'] != nil
output_dir = cmdp['--output-path'] if cmdp['--output-path'] != nil
output_dir = output_dir.gsub(/\\/, '/')

while output_dir[-1].chr == '/' do output_dir.chop! end
MakeUtils.mkdir_p(output_dir)

puts ''
puts "Output encoding name: '#{output_file_encoding.name}'"
puts "Input file: '#{input_file}'"
puts "Configuration file: '#{configuration_file}'"
puts "Output directory: '#{output_dir}'"
puts ''

config = IniFile.load(configuration_file)

filenames = nil
if(config['SHEET_NAMES'] != nil)
	filenames = {}
	config['SHEET_NAMES'].each { |key, value| filenames[":#{value}"] = key }
end

converter = XlsxConverter.new(output_file_encoding)

converter.ignore_nil = ignore_nil
converter.ignore_nil_row = ignore_nil_row
converter.first_row_is_header = true
converter.collect_in_file = false
converter.file_header = header
converter.file_extension = '.dic'

puts 'Please wait...'
puts ''
converter.convert_to(input_file, output_dir, filenames) { |row, is_header|
	if(is_header)
		config['HEADER_ITEMS'].each { |key, value|
			converter.data_header.each { |item| item.element_name = key if item.header_name == value }
		}
	end
}


