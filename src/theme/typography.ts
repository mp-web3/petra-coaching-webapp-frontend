// src/theme/typography.ts
export const typography = {
    // Font Families
    fonts: {
        title: { value: "Heliuk Pliable, system-ui, sans-serif" },
        h1: { value: "Heliuk Pliable, system-ui, sans-serif" },
        h2: { value: "Heliuk Pliable, system-ui, sans-serif" },
        body: { value: "Inter, system-ui, sans-serif" },
        mono: { value: "JetBrains Mono, monospace" }
    },

    // Font Sizes
    fontSize: {
        title: { value: "48px" },
        xs: { value: "0.75rem" },      // 12px
        sm: { value: "0.875rem" },     // 14px
        md: { value: "1rem" },         // 16px
        lg: { value: "1.125rem" },     // 18px
        xl: { value: "1.25rem" },      // 20px
        "2xl": { value: "1.5rem" },    // 24px
        "3xl": { value: "1.875rem" },  // 30px
        "4xl": { value: "2.25rem" },   // 36px
        "5xl": { value: "3rem" },      // 48px
        "6xl": { value: "3.75rem" }    // 60px
    },

    // Font Weights
    fontWeight: {
        thin: { value: "100" },
        light: { value: "300" },
        regular: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" },
        extrabold: { value: "800" },
        black: { value: "900" }
    },

    // Line Heights
    lineHeights: {
        title: { value: "56px" },
        h1: { value: "72px" },
        h2: { value: "56px" },
        none: { value: "1" },
        tight: { value: "1.25" },
        normal: { value: "1.5" }
    },

    // Letter Spacing
    letterSpacings: {
        tighter: { value: "-0.05em" },
        tight: { value: "-0.025em" },
        normal: { value: "0" },
        wide: { value: "0.025em" }
    }
}
