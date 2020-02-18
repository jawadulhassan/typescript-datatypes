console.log('Hello Typescript World!');

interface aColor {
  [key: number]: string;
}

interface oColorVariant {
  primary: string;
  light?: aColor;
  dark?: aColor;
}

interface ILibraryColors{
  [key: string]: oColorVariant;
}

// interface oColorType {
//   light: {[key: number]: string;},
//   primary: string,
//   dark: {[key: number]: string;}
// }

// interface aColorType {
//   primary: string,
// }

// interface ILibraryColors{
//   black: aColorType;
//   green: oColorType;
//   grey: oColorType;
//   orange: oColorType;
//   red: oColorType;
//   white: aColorType;
//   pink: aColorType;
//   purple: aColorType;
//   blue: oColorType;
// }


const LibraryColors: ILibraryColors = {
    black: {
        primary: "#000000",
    },
    green: {
        light: {
            60: "#40C0C0",
        },
        primary: "#00AEA9",
        dark: {
            40: "#00867C",
        }
    },
    grey: {
        light: {
            80: "#fafafa",
            70: "#dddddd",
            60: "#C4C7C5",
        },
        primary: "#707373",
        dark: {
            40: "#353735"
        }
    },
    orange: {
        light: {
            60: "#FFBB11",
        },
        primary: "#FAA21B",
        dark: {
            40: "#F58220"
        }
    },
    red: {
        light: {
            60: "F15B5D",
        },
        primary: "#E63E51",
        dark: {
            40: "#BC3A4B",
        }
    },
    white: {
        primary: "#ffffff",
    },
    pink: {
        primary: "#f434ed",
    },
    purple: {
        primary: "#1E4286",
    },
    blue: {
        light: {
            60: "#6BC3E7",
        },
        primary: "#06A7E0",
        dark: {
            40: "#005DA6",
        }
    }
}