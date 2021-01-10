export const jwtTokens = 'jwtTokens';

export const color = {
    primary: '#88CCF1',
    primaryDark: '#3587A4',
    primaryLight: '#C1DFF0',
    secondary: '#C1FF9B',
    primaryFont: '#000000',
    secondaryFont: '#FFFFFF',
    danger: '#A83232',
    authBackground: '#FFFFFF',
    messageBoxBackground: '#F0F0F0',
};

export const cardShadow = '4px 4px 15px rgba(86, 82, 108, 0.2)';

export const fontSize = {
    verySmall: '0.6rem',
    small: '0.8rem',
    normal: '1rem',
    big: '1.5rem',
    veryBig: '2rem',
    large: '3rem',
};

export const fontWeight = {
    regular: '400',
    bold: '800',
};

export const fontFamily = {
    primary: 'Raleway',
    secondary: "'Oswald', sans-serif",
};

export const breakpointsValues = {
    xs: 480,
    sm: 576,
    md: 675,
    lg: 920,
    xl: 1075,
};

const mediaQ = (size: number): string => `@media only screen and (min-width: ${size}px)`;

export const breakpoints = {
    sm: mediaQ(breakpointsValues.sm),
    md: mediaQ(breakpointsValues.md),
    lg: mediaQ(breakpointsValues.lg),
    xl: mediaQ(breakpointsValues.xl),
};

export const contentWidth = '1152px';
