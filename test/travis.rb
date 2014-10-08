#!/usr/bin/env ruby
result = `sass bootstrap-asu.scss built-1.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('built-1.css')

result = `sass bootstrap-asu-theme-base.scss built-2.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('built-2.css')

puts "Regular compile worked successfully"