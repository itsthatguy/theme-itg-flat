# sublime theme maker

* setup with `bundle`

* run with `be mustache light.yml itg.flat.light.mustache >! itg.flat.light.sublime-theme`

* Create a symbolic link to use with your Sublime text packages folder
  * Sublime Text 2: `ln -s $HOME/git/sublime-theme-maker/themes $HOME/Library/Application\ Support/Sublime\ Text\ 2/Packages/; mv themes Theme\ -\ itg`
  * Sublime Text 3: `ln -s $HOME/git/sublime-theme-maker/themes $HOME/Library/Application\ Support/Sublime\ Text\ 3/Packages/; mv themes Theme\ -\ itg`

## Explain-a-nator

This is the bare bones, first implementation of using mustache to generate sublime-themes.
As I continue, this will become much more automated.

The Goal: Changing variables in YAML files will allow you to quickly change the colors
for your theme, and allow you to produce multiple color schemes, very quickly.