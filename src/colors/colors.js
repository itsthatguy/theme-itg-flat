_ = require('underscore');

var defaults = function(defaultColors) {
  console.log(defaultColors);
  return {
    // General
    iconPath: "Theme - itg.flat/assets/",
    iconPathGroup: "",

    inputColor: "[230, 230, 230]",

    // Tabs
    tabsetBackground: defaultColors.primaryDark,
    tabSettings: {
      inactive: {
        textColor: defaultColors.white,
        backgroundColor: defaultColors.primaryDark,
        textBold: false
      },
      active: {
        textColor: defaultColors.dark,
        backgroundColor: defaultColors.white,
        textBold: false
      },
      hover: {
        textColor: defaultColors.dark,
        backgroundColor: "[255, 255, 255, 180]",
        textBold: false
      }
    },

    tabCloseIcon: "close.png",

    // Sidebar
    sidebarBackground: defaultColors.primaryDark,
    sidebarSettings: {
      headingTextColor: defaultColors.white,
      hover: {
        backgroundColor: "[0,0,0,30]",
        textColor: defaultColors.white
      },
      selected: {
        backgroundColor: defaultColors.primaryColor,
        textColor: defaultColors.white,
        textHoverColor: defaultColors.white,
        folderTextColor: defaultColors.white
      },
      deselected: {
        backgroundColor: defaultColors.primaryDark,
        textColor: defaultColors.white,
        textHoverColor: defaultColors.white,
        folderTextColor: defaultColors.white
      }
    },

    // Close ICONS
    closeIconSettings: {
      // Tabs
      tabs: {
        inactive: {
          color: defaultColors.white,
          hoverColor: defaultColors.dark,
          dirtyColor: defaultColors.yellow,
          defaultOpacity: 0.3,
          hoverOpacity: 0.6
        },
        active: {
          color: defaultColors.dark,
          hoverColor: defaultColors.RED,
          dirtyColor: defaultColors.darkYellow,
          defaultOpacity: 0.4,
          hoverOpacity: 0.6
        },
        hover: {
          hoverColor: defaultColors.RED,
          dirtyColor: defaultColors.darkYellow,
          hoverOpacity: 1.0
        }
      },

      // Close ICONS - SIDEBAR
      sidebar: {
        selected: {
          color: defaultColors.white,
          hoverColor: defaultColors.white,
          dirtyColor: defaultColors.yellow,
          defaultOpacity: 0.6,
          hoverOpacity: 1.0
        },
        deselected: {
          color: defaultColors.dark,
          hoverColor: defaultColors.white,
          dirtyColor: defaultColors.yellow,
          defaultOpacity: 0.0,
          hoverOpacity: 0.0
        },
        hover: {
          color: defaultColors.white,
          hoverColor: defaultColors.RED,
          defaultOpacity: 0.4,
          hoverOpacity: 1.0
        }
      }
    },

    // Panel
    panelBackground: defaultColors.primaryDark,
    panelSelectedBackground: defaultColors.primaryColor,
    panelTextColor: defaultColors.lightWhite,
    panelMatchTextColor: defaultColors.white,
    panelSelectedTextColor: defaultColors.lightPrimaryColor,
    panelSelectedMatchTextColor: defaultColors.white,

    // Icons
    icons: {
      sidebarGroupOpen: "group-open.png",
      sidebarGroupClosed: "group-closed.png",
      closeIcon: "close.png",
      dirtyIcon: "file-dirty.png",
      panelBufferIcon: "icon-buffer.png",
      panelCaseIcon: "icon-case.png",
      panelContextIcon: "icon-context.png",
      panelHighlightIcon: "icon-highlight.png",
      panelPreserveIcon: "icon-preserve.png",
      panelRegexIcon:  "icon-regex.png",
      panelReverseIcon: "icon-reverse.png",
      panelSelectedIcon: "icon-selection.png",
      panelWordIcon: "icon-word.png",
      panelWrapIcon: "icon-wrap.png"
    },

    // Icons
    scrollbars: {
      darkContentColor: defaultColors.white,
      lightContentColor: defaultColors.white
    },

    // Minimap
    minimapBackground: "[65, 69, 78, 165]"
  };
};

module.exports = function(base, data) {
  return defaults(_.extend(base, data));
};
