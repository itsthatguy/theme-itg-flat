# A sample Guardfile
# More info at https://github.com/guard/guard#readme

def groom
  Dir.glob('*.yml') do |f|
    base = File.basename(f, File.extname(f)).chomp
    puts "[Executing] $ mustache #{base}.yml itg.flat.mustache >! itg.flat.#{base}.sublime-theme"
    %x[ bundle exec mustache #{base}.yml itg.flat.mustache >! itg.flat.#{base}.sublime-theme ]
    puts %x[ cat #{base}.yml ]
  end
end

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
guard :shell do
  watch /(.*).mustache/ do |m|
    groom
  end
end

guard :shell do
  watch /(.*).yml/ do |m|
    groom
  end
end
