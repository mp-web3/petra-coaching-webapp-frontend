import { Button, Link } from '@chakra-ui/react'

interface MainButtonProps {
    text: string
    link: string
}

const MainButton = ({ text, link }: MainButtonProps) => {
    return (
        <Link href={link}>
            <Button 
                bg='surface.action'
                color='text.onSurfaceAction'
                textStyle='button'
                px={8}
                py={4}
                borderRadius='md'
                _hover={{
                    bg: 'interactive.primaryHover'
                }}
            >
                {text}
            </Button>
        </Link>
    )
}

export default MainButton
