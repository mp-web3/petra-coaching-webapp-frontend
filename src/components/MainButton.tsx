import { Button, Link } from '@chakra-ui/react'

interface MainButtonProps {
    text?: string
    href?: string
    onClick?: () => void
    isExternal?: boolean
}

const MainButton = ({ text, href, onClick, isExternal }: MainButtonProps) => {
    const handleClick = () => {
        onClick?.()
    }

    const buttonEl = (
        <Button
            onClick={handleClick}
            bg='surface.action'
            color='text.onSurfaceAction'
            textStyle='button'
            px={8}
            py={4}
            borderRadius='md'
            _hover={{ bg: 'interactive.primaryHover' }}
            w={{ base: 'auto', md: 'auto' }}
        >
            {text}
        </Button>
    )

    if (href) {
        return (
            <Link href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>
                {buttonEl}
            </Link>
        )
    }

    return buttonEl
}

export default MainButton
