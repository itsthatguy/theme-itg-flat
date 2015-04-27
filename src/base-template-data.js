var defaults = function(colors) {
  return {
    // General
    iconPath: "Theme - itg.flat/assets/",
    iconPathGroup: "",

    inputColor: "[230, 230, 230]",

    // Tabs
    tabsetBackground: colors.primaryDark,
    tabSettings: {
      inactive: {
        textColor: colors.white,
        backgroundColor: colors.primaryDark,
        textBold: false
      },
      active: {
        textColor: colors.dark,
        backgroundColor: colors.white,
        textBold: false
      },
      hover: {
        textColor: colors.dark,
        backgroundColor: "[255, 255, 255, 180]",
        textBold: false
      }
    },

    tabCloseIcon: "close.png",

    // Sidebar
    sidebarBackground: colors.primaryDark,
    sidebarSettings: {
      headingTextColor: colors.white,
      hover: {
        backgroundColor: "[0,0,0,30]",
        textColor: colors.white
      },
      selected: {
        backgroundColor: colors.primaryColor,
        textColor: colors.white,
        textHoverColor: colors.white,
        folderTextColor: colors.white
      },
      deselected: {
        backgroundColor: colors.primaryDark,
        textColor: colors.white,
        textHoverColor: colors.white,
        folderTextColor: colors.white
      }
    },

    // Close ICONS
    closeIconSettings: {
      // Tabs
      tabs: {
        inactive: {
          color: colors.white,
          hoverColor: colors.dark,
          dirtyColor: colors.yellow,
          defaultOpacity: 0.3,
          hoverOpacity: 0.6
        },
        active: {
          color: colors.dark,
          hoverColor: colors.red,
          dirtyColor: colors.darkYellow,
          defaultOpacity: 0.4,
          hoverOpacity: 0.6
        },
        hover: {
          hoverColor: colors.red,
          dirtyColor: colors.darkYellow,
          hoverOpacity: 1.0
        }
      },

      // Close ICONS - SIDEBAR
      sidebar: {
        selected: {
          color: colors.white,
          hoverColor: colors.white,
          dirtyColor: colors.yellow,
          defaultOpacity: 0.6,
          hoverOpacity: 1.0
        },
        deselected: {
          color: colors.dark,
          hoverColor: colors.white,
          dirtyColor: colors.yellow,
          defaultOpacity: 0.0,
          hoverOpacity: 0.0
        },
        hover: {
          color: colors.white,
          hoverColor: colors.red,
          defaultOpacity: 0.4,
          hoverOpacity: 1.0
        }
      }
    },

    // Panel
    panelBackground: colors.primaryDark,
    panelSelectedBackground: colors.primaryColor,
    panelTextColor: colors.lightWhite,
    panelMatchTextColor: colors.white,
    panelSelectedTextColor: colors.lightPrimaryColor,
    panelSelectedMatchTextColor: colors.white,

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
      darkContentColor: colors.white,
      lightContentColor: colors.white
    },

    // Minimap
    minimapBackground: "[65, 69, 78, 165]"
  };
};

module.exports = defaults;
