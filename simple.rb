#!/usr/bin/env ruby
require 'mustache'


Mustache.template_file = './simple.mustache'
view = Mustache.new
# Mustache.template_extension = '.sublime-theme2'

puts view.render
