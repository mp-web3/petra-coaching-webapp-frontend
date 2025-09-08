// src/theme/colorsSemantic.ts
export const semanticTokens = {
    colors: {
        // Brand Colors - Semantic aliases for your brand colors
        primary: { value: '{colors.flame.500}' },
        primaryLight: { value: '{colors.flame.100}' },
        primaryDark: { value: '{colors.flame.800}' },

        secondary: { value: '{colors.casal.500}' },
        secondaryLight: { value: '{colors.casal.100}' },
        secondaryDark: { value: '{colors.casal.800}' },

        // Surface Colors - Different background contexts
        surface: {
            action: { value: '{colors.primary}' },
            page: { value: '{colors.springWood.100}' },
            card: { value: '{colors.white}' },
            modal: { value: '{colors.white}' },
            elevated: { value: '{colors.springWood.200}' },
        },

        // Text Colors - Different text contexts
        text: {
            primary: { value: '{colors.casal.800}' },
            secondary: { value: '{colors.casal.600}' },
            muted: { value: '{colors.casal.500}' },
            inverse: { value: '{colors.white}' },
            link: { value: '{colors.primary}' },
            linkHover: { value: '{colors.flame.600}' },
        },

        // Border Colors - Different border contexts
        border: {
            default: { value: '{colors.springWood.300}' },
            subtle: { value: '{colors.springWood.200}' },
            strong: { value: '{colors.casal.400}' },
            focus: { value: '{colors.primary}' },
        },

        // Interactive Colors - Button and interactive states
        interactive: {
            primary: { value: '{colors.primary}' },
            primaryHover: { value: '{colors.flame.600}' },
            secondary: { value: '{colors.secondary}' },
            secondaryHover: { value: '{colors.casal.600}' },
            ghost: { value: 'transparent' },
            ghostHover: { value: '{colors.springWood.200}' },
        },

        // Status Colors - Different states and feedback
        status: {
            success: { value: '{colors.green.500}' },
            successLight: { value: '{colors.green.100}' },
            warning: { value: '{colors.yellow.500}' },
            warningLight: { value: '{colors.yellow.100}' },
            error: { value: '{colors.primary}' },
            errorLight: { value: '{colors.primaryLight}' },
        }
    }
}