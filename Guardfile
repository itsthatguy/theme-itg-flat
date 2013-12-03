# A sample Guardfile
# More info at https://github.com/guard/guard#readme

def groom
  Dir.glob('source/*.yml') do |f|
    base = File.basename(f, File.extname(f)).chomp
    puts "[Executing] $ mustache source/#{base}.yml source/itg.flat.mustache > themes/itg.flat.#{base}.sublime-theme"
    puts %x[ bundle exec mustache source/#{base}.yml source/itg.flat.mustache > themes/itg.flat.#{base}.sublime-theme ]
  end
end

guard :shell do

  watch %r{^source/.+\.mustache$} do |m|
    groom
  end
end

guard :shell do
  watch %r{^source/.+\.yml$} do |m|
    groom
  end
end
