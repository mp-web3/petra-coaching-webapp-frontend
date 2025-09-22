import { Button, Link } from '@chakra-ui/react'

interface MainButtonProps {
    text?: string
    link?: string
    onClick?: () => void
    isExternal?: boolean
}

const MainButton = ({ text, link, onClick, isExternal }: MainButtonProps) => {
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
            // alignSelf={{ base: 'left', md: 'center' }}
            w={{ base: 'auto', md: 'auto' }}
        >
            {text}
        </Button>
    )

    if (link) {
        return (
            <Link href={link} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>
                {buttonEl}
            </Link>
        )
    }

    return buttonEl
}

export default MainButton
