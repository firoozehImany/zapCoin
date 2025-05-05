import { customColors } from "./customColors";
const { primary, light, success } = customColors;
export const themeTokens = {
  token: {
    colorPrimary: primary,
    colorSuccess: success,
    colorLink: primary,
    borderRadius: 8,
  },
  components: {
    Table: {
      margin: 30,
      headerBg: light,
      headerSortHoverBg: light,
      headerSortActiveBg: light,
      borderColor: light,
      headerColor: light,
      bodySortBg: light,
      rowFontSize: 14,
    },

    Layout: {
      bodyBg: light,
      headerBg: light,
      headerHeight: 64,
    },

    Menu: {
      activeBarHeight: 0,
      itemHoverColor: primary,
      itemMarginInline: 0,
    },

    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: 0,
    },
  },
};
