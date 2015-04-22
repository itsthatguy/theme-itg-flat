var defaultColors = {
  red               : "[243, 86, 86]",
  yellow            : "[254, 209, 0, 255]",
  darkYellow        : "[220, 150, 0]",
  light             : "[212, 205, 202, 255]",
  dark              : "[91, 84, 81, 255]",
  white             : "[255, 255, 255, 200]",
  lightWhite        : "[180, 180, 180]",
  primaryDark       : "[178, 169, 165, 250]",
  secondaryDark     : "[128, 119, 115, 250]",
  primaryColor      : "[180, 80, 80, 255]",
  lightPrimaryColor : "[190, 168, 168]"
};

var templateData = function(colors) {
  return {
    tabsetBackground: colors.light,
    tabSettings: {
      inactive: {
        textColor: colors.dark,
        backgroundColor: colors.light
      }
    }, 

    sidebarBackground: colors.light,
    sidebarSettings: {
      headingTextColor: colors.dark,
      deselected: {
        backgroundColor: colors.light,
        textColor: colors.dark,
        textHoverColor: colors.dark,
        folderTextColor: colors.dark
      }
    }, 

    closeIconSettings: {
      tabs: {
        inactive: {
          color: colors.dark,
          hoverColor: colors.dark,
          dirtyColor: colors.darkYellow
        }
      }, 
      
      sidebar: {
        deselected: {
          dirtyColor: colors.darkYellow
        },
        hover: {
          color: colors.dark,
          hoverColor: colors.primaryColor
        }
      }
    },

    panelBackground: colors.light,
    panelTextColor: colors.dark,
    panelMatchTextColor: colors.dark,
    panelSelectedTextColor: colors.light,

    scrollbars: {
      darkContentColor: colors.white,
      lightContentColor: colors.dark
    }, 

    minimapBackground: "[212, 205, 202, 60]"
  };
};

module.exports = { defaultColors: defaultColors, templateData: templateData };
