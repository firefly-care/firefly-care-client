export const fonts = {
  Head1: {
    fontFamily: "Pretendard Variable",
    fontSize: 28,
    fontWeight: "600",
    lineHeight: "32px",
  },
  Head2: {
    fontFamily: "Pretendard Variable",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: "28px",
  },
  Head3: {
    fontFamily: "Pretendard Variable",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: "24px",
  },
  Head4: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: "20px",
  },
  Body1: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: "24px",
  },
  Body1B: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: "24px",
  },
  Body2: {
    fontFamily: "Pretendard Variable",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: "20px",
  },
  Body2B: {
    fontFamily: "Pretendard Variable",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: "20px",
  },
  Body3: {
    fontFamily: "Pretendard Variable",
    fontSize: 12,
    fontWeight: "400",
    lineHeight: "16px",
  },
  Button1: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: "20px",
  },
  Button2: {
    fontFamily: "Pretendard Variable",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: "16px",
  },
  Chips: {
    fontFamily: "Pretendard Variable",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: "16px",
  },
  Caption: {
    fontFamily: "Pretendard Variable",
    fontSize: 10,
    fontWeight: "500",
    lineHeight: "12px",
  },
  Alert: {
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: "24px",
  },
} as const;

export const primitive = {
  orange: {
    50: "#FEF6E7",
    100: "#FDE3B5",
    200: "#FCD591",
    300: "#FBC25F",
    400: "#FAB640",
    500: "#F9A410",
    600: "#E3950F",
    700: "#B1740B",
    800: "#895A09",
    900: "#694507",
  },
  gray: {
    50: "#F0F1F3",
    100: "#CFD2DB",
    200: "#B8BCCA",
    300: "#979EB1",
    400: "#838BA2",
    500: "#646E8B",
    600: "#5B647E",
    700: "#474E63",
    800: "#373D4C",
    900: "#2A2E3A",
  },
  green: {
    50: "#EAF9F4",
    100: "#BFECDC",
    200: "#9FE2CB",
    300: "#74D5B3",
    400: "#59CDA5",
    500: "#2FC18E",
    600: "#2BB081",
    700: "#218965",
    800: "#1A6A4E",
    900: "#14513C",
  },
  red: {
    50: "#FEEBEA",
    100: "#FAC0BD",
    200: "#F8A29D",
    300: "#F57870",
    400: "#F35D55",
    500: "#F0352A",
    600: "#DA3026",
    700: "#AA261E",
    800: "#841D17",
    900: "#651612",
  },
  blue: {
    50: "#ECF0FD",
    100: "#C3CFF7",
    200: "#A6B8F4",
    300: "#7D97EE",
    400: "#6483EB",
    500: "#3D64E6",
    600: "#385BD1",
    700: "#2B47A3",
    800: "#22377F",
    900: "#1A2A61",
  },
  white: "#ffffff",
  black: "#000000",
};

export const semantic = {
  normal: "#61C176",
  info: "#FFE658",
  warning: primitive.orange[400],
  danger: primitive.red[400],
};

export const gradients = {
  orange: "linear-gradient(180deg, #FFF -32.56%, #FDE3B5 100%)",
};

export const theme = {
  colors: {
    ...primitive,
    semantic,
  },
  fonts: fonts,
  gradients: gradients,
};
