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

var templateData = {
  tabsetBackground: defaultColors.light,
  tabSettings: {
    inactive: {
      textColor: defaultColors.dark,
      backgroundColor: defaultColors.light
    }
  }, 

  sidebarBackground: defaultColors.light,
  sidebarSettings: {
    headingTextColor: defaultColors.dark,
    deselected: {
      backgroundColor: defaultColors.light,
      textColor: defaultColors.dark,
      textHoverColor: defaultColors.dark,
      folderTextColor: defaultColors.dark
    }
  }, 

  closeIconSettings: {
    tabs: {
      inactive: {
        color: defaultColors.dark,
        hoverColor: defaultColors.dark,
        dirtyColor: defaultColors.darkYellow
      }
    }, 
    
    sidebar: {
      deselected: {
        dirtyColor: defaultColors.darkYellow
      },
      hover: {
        color: defaultColors.dark,
        hoverColor: defaultColors.primaryColor
      }
    }
  },

  panelBackground: defaultColors.light,
  panelTextColor: defaultColors.secondaryDark,
  panelMatchTextColor: defaultColors.dark,
  panelSelectedTextColor: defaultColors.light,

  scrollbars: {
    darkContentColor: defaultColors.white,
    lightContentColor: defaultColors.dark
  }, 

  minimapBackground: "[212, 205, 202, 60]"
};

module.exports = { defaultColors: defaultColors, templateData: templateData };
