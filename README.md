# Theme - itg.flat

*Update: Sublime text 2 and 3 now supported.*

## Here it is

My flat, retina friendly, sublime-theme.  It comes in two flavors, Dark and Light. I'll be adding more color variations over the coming weeks, so stay tuned. [Read more about it](http://itsthatguy.com/post/70191573560/sublime-text-theme-itg-flat)

Installation is a snap. Once you have [Package Control](https://sublime.wbond.net/installation) installed, you just need to follow the instructions below.

I hope you enjoy it. I'd love to hear your thoughts.

### Dark

![](https://www.evernote.com/shard/s117/sh/e6e55372-e4f3-46c7-b4d4-3854ddb87cb2/920289d4ced10498fea9dde651c9abc9/deep/0/Pasted-Image-12-15-13,-12-51-AM.jpg)


### Light
![](https://www.evernote.com/shard/s117/sh/000c469f-6d71-44bd-a549-ed4af40a9768/6b52e4c849b328e56703d2fd2d1fa2a6/deep/0/Pasted-Image-12-15-13,-12-52-AM.jpg)


## Installation

### Using Sublime Package Control

If you are using sublime package control, you can install directly from the `Package Control: Install Package` menu item.

![](https://www.evernote.com/shard/s117/sh/f2e2df96-720b-497d-b15c-102c373a8ba1/0578f155cd7646f7fe526fb1ae92b78b/deep/0/Pasted-Image-12-15-13,-12-05-PM.jpg)


The theme is listed as `Theme - itg.flat` in the packages list.

![](https://www.evernote.com/shard/s117/sh/ea3a7441-ccda-4e39-bf04-fdc042264664/182e047a3c9e135b8a587f254396adda/deep/0/Pasted-Image-12-15-13,-12-07-PM.jpg)

##### Enabling the theme

To enable the theme and adjust theme settings edit your `Preferences.sublime-settings` file:

![](https://www.evernote.com/shard/s117/sh/779f46cf-9659-4821-a183-68e82cda7fc8/0919749d14c83296a1cc82051588c09f/deep/0/Pasted-Image-12-15-13,-12-04-PM.jpg)

```javascript
// for a dark theme use:
"theme": "itg.flat.dark.sublime-theme"
 
// for a light theme use:
"theme": "itg.flat.light.sublime-theme"

// additional (dark) color options
"theme": "itg.flat.dark.aqua.sublime-theme"
"theme": "itg.flat.dark.blue.sublime-theme"
"theme": "itg.flat.dark.green.sublime-theme"
"theme": "itg.flat.dark.orange.sublime-theme"
"theme": "itg.flat.dark.yellow.sublime-theme"
```


##### Enabling the custom Syntax Highlighting

Select a theme from `Preferences > Color Scheme > Theme - itg.flat`:

![](http://i.imgur.com/dBGzR0u.png)

or add this to your `Preferences.sublime-settings` file:

```javascript
// for a dark theme use:
"color_scheme": "Packages/Theme - itg.flat/itg.dark.tmTheme",

// for a light theme use:
"color_scheme": "Packages/Theme - itg.flat/itg.light.tmTheme",
```


##### Additional Settings:

```javascript
// small tabs
"itg_small_tabs": true
 
// Sidebar padding options
"itg_sidebar_tree_xsmall": true
"itg_sidebar_tree_small": true
"itg_sidebar_tree_medium": true
"itg_sidebar_tree_large": true
"itg_sidebar_tree_xlarge": true


// Scrollbar size options
"itg_scrollbar_small": true
"itg_scrollbar_medium": true

// if the scrollbar options aren't working, try setting the following
"overlay_scroll_bars": "disabled"
```

