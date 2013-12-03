# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
guard :shell do
  watch /(.*).mustache/ do |m|
    %x[ ./groom ]
  end
end

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
# guard 'shell' do
#   watch(/(.*).txt/) {|m| `tail #{m[0]}` }
# end
