# A sample Guardfile
# More info at https://github.com/guard/guard#readme

def groom
  Dir.glob('*.yml') do |f|
    base = File.basename(f, File.extname(f)).chomp
    puts "[Executing] $ mustache #{base}.yml itg.flat.mustache > itg.flat.#{base}.sublime-theme"
    puts %x[ bundle exec mustache #{base}.yml itg.flat.mustache > itg.flat.#{base}.sublime-theme ]
  end
end

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
